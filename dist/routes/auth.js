"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const express_1 = require("express");
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const argon2_1 = __importDefault(require("argon2"));
const express_validator_1 = require("express-validator");
exports.auth = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
exports.auth.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await prisma.user.findUnique({
        where: {
            username: username,
        },
    });
    if (!user) {
        return res.status(400).json({ sucess: false, error: "user not found" });
    }
    try {
        if (await argon2_1.default.verify(user.password, password)) {
            const Acesstoken = jsonwebtoken_1.default.sign({ userId: user.id }, "secret ");
            return res.status(200).json({ success: true, Acesstoken: Acesstoken });
        }
        else {
            return res
                .status(400)
                .json({ success: false, error: "invalid password" });
        }
    }
    catch (error) {
        return res
            .status(400)
            .json({ success: false, error: "internal server error" });
    }
});
exports.auth.post("/register", [
    (0, express_validator_1.body)("username", "Please provide valid Email").isEmail(),
    (0, express_validator_1.body)("password", "password must be greater then 5").isLength({ min: 5 }),
], async (req, res) => {
    const { username, password } = req.body;
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
        });
    }
    const result = await prisma.user.findUnique({
        where: {
            username: username,
        },
    });
    if (result) {
        return res.status(400).json({
            sucess: false,
            error: "user already exsist",
        });
    }
    const hashedPassword = await argon2_1.default.hash(password);
    const user = await prisma.user.create({
        data: {
            username: username,
            password: hashedPassword,
        },
    });
    const Acesstoken = jsonwebtoken_1.default.sign({ userId: user.id }, "secret ");
    return res.status(200).json({ success: true, Acesstoken: Acesstoken });
});
//# sourceMappingURL=auth.js.map