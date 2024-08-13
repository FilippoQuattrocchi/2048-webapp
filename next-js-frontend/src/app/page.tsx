import Matrix from "./components/Matrix";
import { DEFAULT_MATRIX_VALUES } from "./lib/Default-values";
import GameManager from "./components/GameManager";

export default function Home() {
	return (
		<div>
			<GameManager></GameManager>
		</div>
	);
}
