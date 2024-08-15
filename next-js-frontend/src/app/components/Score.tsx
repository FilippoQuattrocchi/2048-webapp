'use client'
import { useContext, useEffect, useState } from "react";
import { ScoreType } from "../lib/Definition";
type Props ={
    scoreValue: number
}

const Button = ({ scoreValue }: Props) => {
    
    const [useScore, setScore] = useState(scoreValue);

	useEffect(() => {
		setScore(scoreValue);
	}, [scoreValue]);
    
	return (
		<>
			<div>
				<h1>Score</h1>
				<br></br>
				<p>Your score is : {useScore}</p>
                <p>Keep merging!</p>
			</div>
		</>
	);
};
export default Button;
