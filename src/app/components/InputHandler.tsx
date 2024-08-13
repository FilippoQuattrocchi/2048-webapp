"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
	matrixCellValues: number[][];
};

const InputHandler = () => {
	const isKeyDown = useRef<boolean>(false);
	const actualKey = useRef<string | null>(null);
	const [useActualKey, setActualKey] = useState<string | null>(null);

	useEffect(() => {
		//Keydown uplogic
		document.addEventListener("keydown", (event) => {
			if (!isKeyDown.current) {
				isKeyDown.current = true;
				actualKey.current = event.key;
				setActualKey(event.key);
			}
		});

		document.addEventListener("keyup", (event) => {
			isKeyDown.current = false;
		});
	});

	useEffect(() => {
		if (useActualKey) {
			console.log("New key is", useActualKey);
			console.log("Faccio qualcosa");
			setActualKey(null);
		}
	}, [useActualKey]);

	return (
		<>
			<p>Input handler!</p>
		</>
	);
};

export default InputHandler;
