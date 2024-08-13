"use client";
import { useEffect, useRef, useState } from "react";
import InputHandler from "./InputHandler";
import Matrix from "./Matrix";
import { DEFAULT_MATRIX_VALUES } from "../lib/Default-values";
import {
	changeValueOfMatrix,
	checkGameEnd,
	insertNewNumber,
	makeMove,
} from "../lib/Game";
import { GameMatrix, Move } from "../lib/Definition";

type Props = {
	matrixCellValues: number[][];
};

const GameManager = () => {
	const [useActualKey, setActualKey] = useState<string | null>(null);
	const [useMatrix, setMatrix] = useState<GameMatrix>(DEFAULT_MATRIX_VALUES);
	const [useRefresh, setRefresh] = useState(false);

	const handleNewInput = (move: Move) => {
		const newNumberPosition = insertNewNumber(useMatrix);
		const matrixWithMove = makeMove(useMatrix, move);
		setMatrix(matrixWithMove);
		if (!checkGameEnd(useMatrix)) {
			setMatrix(changeValueOfMatrix(useMatrix, newNumberPosition, 2));
			setRefresh(true);
		} else alert("Game lost");
	};

	useEffect(() => {
		if (useRefresh) {
			setRefresh(false);
		}
	}, [useRefresh]);

	//Game init
	useEffect(() => {}, []);

	return (
		<>
			<InputHandler handleNewInput={handleNewInput}></InputHandler>
			<Matrix
				matrixCellValues={useMatrix}
				requestedUpdate={useRefresh}
			></Matrix>
			<p>Game manager!</p>
		</>
	);
};

export default GameManager;
