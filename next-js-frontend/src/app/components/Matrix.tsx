"use client";
import { useEffect, useState } from "react";
import { DEFAULT_SIZE_GRID } from "../lib/Default-values";
import Cell from "./Cell";

type Props = {
	matrixCellValues: number[][];
	requestedUpdate: boolean;
};

const Matrix = ({ matrixCellValues, requestedUpdate }: Props) => {
	const [useCellElements, setCellElements] = useState<JSX.Element[][]>([]);

	useEffect(() => {
		let cellElementsTemp = [];
		let counterKey = 0;
		for (let row = 0; row < DEFAULT_SIZE_GRID; row++) {
			const colElement = [];
			for (let col = 0; col < DEFAULT_SIZE_GRID; col++) {
				colElement.push(
					<Cell value={matrixCellValues[row][col]} key={counterKey}></Cell>
				);
				counterKey += 1;
			}
			cellElementsTemp.push(colElement);
		}
		setCellElements(cellElementsTemp);
	}, [requestedUpdate]);

	return (
		<>
			<p>Tabella</p>
			<div className="grid grid-cols-4 gap-2 mx-40 justify-items-center p-4 ">
				{" "}
				{useCellElements}
			</div>
		</>
	);
};

export default Matrix;
