import { Request, Response } from "express";
import AuthModel from "../models/auth.model";

const health = async (req: Request, res: Response) => {
	res.send("Auth health is good!");
};

const createUser = async (req: Request, res: Response) => {
	res.send("Auth health is good!");
};

const getUser = async (req: Request, res: Response) => {
	res.send("Auth health is good!");
};

const login = async (req: Request, res: Response) => {
	try {
		const { username, password } = req.body;
		const exist = await AuthModel.login(username, password);
        
        if (exist) {
            const id = exist?.id;
            res.status(200).json({ id });
        }
        else res.status(401).send("Invalid");
	} catch (e) {
		res.status(500).json({ error: e });
	}
};

export default {
	health,
	createUser,
	getUser,
	login,
};
