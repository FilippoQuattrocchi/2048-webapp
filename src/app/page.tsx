import Image from "next/image";
import Matrix from "./components/Matrix";
import { DEFAULT_MATRIX_VALUES } from "./lib/default-values";

export default function Home() {
	return (
		<div>
			<Matrix matrixCellValues={DEFAULT_MATRIX_VALUES}></Matrix>
		</div>
	);
}
