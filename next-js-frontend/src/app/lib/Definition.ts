import { StaticImageData } from "next/image";

export type Invoice = {
	id: string;
	customer_id: string;
	amount: number;
	date: string;
	// In TypeScript, this is called a string union type.
	// It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
	status: "pending" | "paid";
};

export type Position = {
	row: number;
	col: number;
}

export type Move = "up" | "down" | "left" | "right";

export type GameMatrix = number[][];

export type NumImageAssocation = {
	[key: number]: StaticImageData
}

export type ScoreType = number;

