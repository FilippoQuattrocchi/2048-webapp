'use client'
import React, { useEffect, useState } from "react";
import GameManager from "./components/GameManager";
import Score from "./components/Score";
import { redirect } from "next/navigation";

export default function Home() {
	const [useScore, setScore] = useState(0);

	useEffect(() => {
		let userId = localStorage.getItem('userId');
		if(!userId) {
			redirect('/login');
		}
	},[]);
	return (
		<div>
			<h1 className="text-center bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent my-9">
				Language Merge
			</h1>

			<div className="flex flex-1 ml-20">
				<Score scoreValue={useScore}></Score>
				<div className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch"></div>
				<GameManager updateScore={setScore}></GameManager>
			</div>
		</div>
	);
}
