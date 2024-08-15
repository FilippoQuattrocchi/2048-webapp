import { useEffect, useState } from "react";
import Image from "next/image";
import { numberImageAssociation } from "../lib/Default-values";
import styles from "./Cell.module.css";

type Props = {
	value: number;
};
const Cell = ({ value }: Props) => {
	const [useCellElement, setCellElement] = useState(<></>);

	useEffect(() => {
		// setValue(value);
		const className =
			"justify-center items-center basis-1/4 w-20 h-48 border-4"+ styles.game_cell;

		if (numberImageAssociation[value] !== undefined) {
			setCellElement(
				<div className={className}>
					<Image
						src={numberImageAssociation[value]}
						 width={150}
						 height={150}
						alt="Assembly"
					></Image>
				</div>
			);
		} else {
			setCellElement(<div className={className}></div>);
		}
	}, [value]);

	return <>{useCellElement}</>;
};

export default Cell;
