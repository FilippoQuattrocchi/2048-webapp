import Image from "next/image";
import Matrix from "./components/Matrix";
import { DEFAULT_MATRIX_VALUES } from "./lib/default-values";
import { useEffect } from "react";
import InputHandler from "./components/InputHandler";

export default function Home() {
	return (
		
		<div>
			<InputHandler></InputHandler>
			<Matrix matrixCellValues={DEFAULT_MATRIX_VALUES}></Matrix>
		</div>
	);
}
