"use client";
import { useEffect, useRef, useState } from "react";
import { Move } from "../lib/Definition";

type Props = {
	handleNewInput(key:Move): void
};

const InputHandler = ({handleNewInput}: Props) => {
	const isKeyDown = useRef<boolean>(false);
	const actualKey = useRef<string | null>(null);
	const [useActualKey, setActualKey] = useState<Move | null>(null);

	useEffect(() => {
		//Keydown uplogic
		document.addEventListener("keydown", (event) => {
			if (!isKeyDown.current) {
				isKeyDown.current = true;
				actualKey.current = event.key;
				switch (event.key) {
					case "w":
					case "W":
					case "ArrowUp":
						setActualKey("up");
						break;
					case "s":
					case "S":
					case "ArrowDown":
						setActualKey("down");
						break;
					case "a":
					case "A":
					case "ArrowLeft":
						setActualKey("left");
						break;
					case "d":
					case "D":
					case "ArrowRight":
						setActualKey("right");
						break;
				}
				
			}
		});

		document.addEventListener("keyup", (event) => {
			isKeyDown.current = false;
		});
	});

	useEffect(() => {
		if (useActualKey) {
			handleNewInput(useActualKey);
			setActualKey(null);
		}
	}, [useActualKey]);

	return (
		<>
		</>
	);
};

export default InputHandler;
