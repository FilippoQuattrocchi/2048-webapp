import Matrix from "./components/Matrix";
import { DEFAULT_MATRIX_VALUES } from "./lib/Default-values";
import GameManager from "./components/GameManager";
import Score from "./components/Score";

export default function Home() {
	return (
		<div>
			<h1 className="text-center bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent my-9">
				Language Merge
			</h1>

			<div className="flex flex-1 ml-20">
				<Score scoreValue={ 0}></Score>
				<div className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch"></div>
				<GameManager></GameManager>
			</div>
		</div>
	);
}
