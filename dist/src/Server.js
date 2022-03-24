"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const auth_1 = require("../routes/auth");
const express_1 = __importDefault(require("express"));
const consola_1 = __importDefault(require("consola"));
const cors_1 = __importDefault(require("cors"));
const bodyParser = __importStar(require("body-parser"));
const dotenv = __importStar(require("dotenv"));
class Server {
    constructor() {
        this.logger = consola_1.default;
        this.app = (0, express_1.default)();
    }
    start() {
        this.setConfig();
        this.setRequestLogger();
        this.setRoutes();
        this.app.listen(process.env.PORT, () => {
            this.logger.success(`server started on port ${process.env.PORT}`);
        });
    }
    setConfig() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use((0, cors_1.default)());
        dotenv.config();
    }
    setRequestLogger() {
        this.app.use(async (req, res, next) => {
            console.log(`[${req.method} - ${req.path}]`);
            next();
        });
    }
    setRoutes() {
        this.app.get("/", (req, res) => {
            res.json({ success: true, message: "JWT Authentication" });
        });
        this.app.use("/api/v1/auth", auth_1.auth);
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map