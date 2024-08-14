import { GameMatrix, Move, Position } from "./Definition";
import { randomInteger } from "./Util";

export const checkGameEnd = (matrix: number[][]) => {
	if (checkAvaibleCells(matrix).length === 0) return true;
	return false;
};

export const checkAvaibleCells = (matrix: number[][]) => {
	const freePosition = [];

	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[row].length; col++) {
			if (matrix[row][col] === 0) {
				const pos: Position = { row: row, col: col };
				freePosition.push(pos);
			}
		}
	}

	return freePosition;
};

export const getAvaiblePosition = (matrix: number[][]) => {
	const avabileCells = checkAvaibleCells(matrix);
	const randomNum = randomInteger(avabileCells.length);
	return avabileCells[randomNum];
};

export const changeValueOfMatrix = (
	matrix: number[][],
	pos: Position,
	newValue: number
) => {
	const newMatrix = matrix;
	newMatrix[pos.row][pos.col] = newValue;
	return newMatrix;
};

export const makeMove = (matrix: GameMatrix, moveTo: Move) => {
	switch (moveTo) {
		case "up":
			return moveUp(matrix);
		case "down":
			return moveDown(matrix);
		case "left":
			return moveLeft(matrix);
		case "right":
			return moveRight(matrix);
	}
};

export const compareMatrix = (matrix1: GameMatrix, matrix2: GameMatrix) => {
	for (let row = 0; row < matrix1.length; row++) {
		for (let col = 0; col < matrix1.length; col++) {
			if (matrix1[row][col] !== matrix2[row][col]) return false;
		}
	}
	return true;
};

export const makeACopyOfMatrix = (matrix: GameMatrix) => {
	return JSON.parse(JSON.stringify(matrix));
};

const moveUp = (matrix: GameMatrix) => {
	const changedMatrix = matrix;
	for (let row = matrix.length - 1; row > 0; row--) {
		for (let col = 0; col < matrix.length; col++) {
			if (changedMatrix[row][col] !== 0) {
				if (changedMatrix[row - 1][col] === changedMatrix[row][col]) {
					changedMatrix[row - 1][col] =
						changedMatrix[row][col] + changedMatrix[row][col];
					changedMatrix[row][col] = 0;
				} else if (changedMatrix[row - 1][col] === 0) {
					changedMatrix[row - 1][col] = changedMatrix[row][col];
					changedMatrix[row][col] = 0;
				}
			}
		}
	}
	return changedMatrix;
};

const moveDown = (matrix: GameMatrix) => {
	const changedMatrix = matrix;
	for (let row = 0; row < matrix.length - 1; row++) {
		for (let col = 0; col < matrix.length; col++) {
			if (changedMatrix[row][col] !== 0) {
				if (changedMatrix[row + 1][col] === changedMatrix[row][col]) {
					changedMatrix[row + 1][col] = changedMatrix[row][col] * 2;
					changedMatrix[row][col] = 0;
				} else if (changedMatrix[row + 1][col] === 0) {
					changedMatrix[row + 1][col] = changedMatrix[row][col];
					changedMatrix[row][col] = 0;
				}
			}
		}
	}
	return changedMatrix;
};

const moveRight = (matrix: GameMatrix) => {
	const changedMatrix = matrix;
	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix.length - 1; col++) {
			if (changedMatrix[row][col] !== 0) {
				if (changedMatrix[row][col + 1] === changedMatrix[row][col]) {
					changedMatrix[row][col + 1] = changedMatrix[row][col] * 2;
					changedMatrix[row][col] = 0;
				} else if (changedMatrix[row][col + 1] === 0) {
					changedMatrix[row][col + 1] = changedMatrix[row][col];
					changedMatrix[row][col] = 0;
				}
			}
		}
	}
	return changedMatrix;
};

const moveLeft = (matrix: GameMatrix) => {
	const changedMatrix = matrix;
	for (let row = 0; row < matrix.length; row++) {
		for (let col = matrix.length - 1; col > 0; col--) {
			if (changedMatrix[row][col] !== 0) {
				if (changedMatrix[row][col - 1] === changedMatrix[row][col]) {
					changedMatrix[row][col - 1] = changedMatrix[row][col] * 2;
					changedMatrix[row][col] = 0;
				} else if (changedMatrix[row][col - 1] === 0) {
					changedMatrix[row][col - 1] = changedMatrix[row][col];
					changedMatrix[row][col];
				}
			}
		}
	}
	return changedMatrix;
};
