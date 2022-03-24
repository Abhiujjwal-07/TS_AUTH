import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import Jwt from "jsonwebtoken";
import argon2 from "argon2";
import { body, validationResult } from "express-validator";
export const auth = Router();
const prisma = new PrismaClient();

auth.post("/login", async (req, res) => {
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
    if (await argon2.verify(user.password, password)) {
      const Acesstoken = Jwt.sign({ userId: user.id }, "secret ");
      return res.status(200).json({ success: true, Acesstoken: Acesstoken });
    } else {
      return res
        .status(400)
        .json({ success: false, error: "invalid password" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, error: "internal server error" });
  }
});

auth.post(
  "/register",
  [
    body("username", "Please provide valid Email").isEmail(),
    body("password", "password must be greater then 5").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const { username, password } = req.body;
    const errors = validationResult(req); //validte the input

    if (!errors.isEmpty()) {
    //   console.log("errorr ch");
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

    const hashedPassword = await argon2.hash(password);
    const user = await prisma.user.create({
      data: {
        username: username,
        password: hashedPassword,
      },
    });
    const Acesstoken = Jwt.sign({ userId: user.id }, "secret ");

    return res.status(200).json({ success: true, Acesstoken: Acesstoken });
  }
);
