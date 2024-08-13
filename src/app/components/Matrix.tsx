"use client";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { DEFAULT_SIZE_GRID } from "../lib/default-values";
import Cell from "./Cell";

type Props = {
	matrixCellValues: number[][];
};

const Matrix = ({ matrixCellValues }: Props) => {
	const [useCellMatrix, setCellMatrix] = useState(matrixCellValues);
	const [useCellElements, setCellElements] = useState<JSX.Element[][]>([]);

	useEffect(() => {
		let cellElementsTemp = [];
		let counterKey = 0;
		for (let row = 0; row < DEFAULT_SIZE_GRID; row++) {
			const colElement = [];
			for (let col = 0; col < DEFAULT_SIZE_GRID; col++) {
				colElement.push(
					<Cell value={useCellMatrix[row][col]} key={counterKey}></Cell>
				);
				counterKey += 1;
			}
			cellElementsTemp.push(colElement);
		}
		setCellElements(cellElementsTemp);
	}, [matrixCellValues]);

	return (
		<>
			<p>Tabella</p>
			<div className="grid grid-cols-4 gap-4 m-5"> {useCellElements}</div>
		</>
	);
};

export default Matrix;
