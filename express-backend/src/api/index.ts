// src/index.js
import express, { Express, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import ScoreRouter from "../routes/score.route";
import AuthRouter from "../routes/auth.router";
import dotenv from "dotenv";

export const prisma = new PrismaClient();

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

async function main() {
	app.use(express.json());
	app.use("/api/v1/score", ScoreRouter);
	app.use("/api/v1/auth", AuthRouter);
	app.get("/", (req: Request, res: Response) => {
		res.send("Express + TypeScript Server");
	});
	app.all("*", (req: Request, res: Response) => {
		res.status(404).json({ error: `Route ${req.originalUrl}` });
	});

	app.listen(port, () => {
		console.log(`[server]: Server is running at http://localhost:${port}`);
	});
}

main()
	.then(async () => {
		await prisma.$connect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});

module.exports = app;
