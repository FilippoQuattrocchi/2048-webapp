"use client";
import { createContext, useEffect, useRef, useState } from "react";
import InputHandler from "./InputHandler";
import Matrix from "./Matrix";
import { DEFAULT_MATRIX_VALUES } from "../lib/Default-values";
import {
	changeValueOfMatrix,
	checkGameEnd,
	compareMatrix,
	getAvaiblePosition,
	makeACopyOfMatrix,
	makeMove,
} from "../lib/Game";
import { GameMatrix, Move } from "../lib/Definition";

type Props = {
	updateScore(value: number): void;
};

const GameManagerContext = createContext({});

const GameManager = ({ updateScore }: Props) => {
	const [useActualKey, setActualKey] = useState<string | null>(null);
	const [useMatrix, setMatrix] = useState<GameMatrix>(DEFAULT_MATRIX_VALUES);
	const [useRefresh, setRefresh] = useState(false);
	const [useScore, setScore] = useState(0);

	const handleNewInput = (move: Move) => {
		//Check the state if the game is ended
		if (!checkGameEnd(useMatrix)) {
			const newNumberPosition = getAvaiblePosition(useMatrix);
			const savedMatrixState = makeACopyOfMatrix(useMatrix);
			const matrixWithMove = makeMove(useMatrix, move);
			if (!compareMatrix(savedMatrixState, matrixWithMove)) {
				setMatrix(matrixWithMove);
				setScore(useScore + 10);
				updateScore(useScore);
				setMatrix(changeValueOfMatrix(useMatrix, newNumberPosition, 2));
				setRefresh(true);
			}
		} else alert("Game lost");
	};

	useEffect(() => {
		if (useRefresh) {
			setRefresh(false);
		}
	}, [useRefresh]);

	//Game init
	useEffect(() => {
		const newNumberPosition1 = getAvaiblePosition(useMatrix);
		const newNumberPosition2 = getAvaiblePosition(useMatrix);
		setMatrix(changeValueOfMatrix(useMatrix, newNumberPosition1, 2));
		// setMatrix(changeValueOfMatrix(useMatrix, newNumberPosition2, 2));
	}, []);

	return (
		<>
			<InputHandler handleNewInput={handleNewInput}></InputHandler>
			<Matrix
				matrixCellValues={useMatrix}
				requestedUpdate={useRefresh}
			></Matrix>
		</>
	);
};

export default GameManager;
