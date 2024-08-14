import { useEffect, useState } from "react";
import Image from "next/image";
import { numberImageAssociation } from "../lib/Default-values";

type Props = {
	value: number;
};
const Cell = ({ value }: Props) => {
	const [useCellElement, setCellElement] = useState(<></>);

	useEffect(() => {
		// setValue(value);
		const className = "bg-slate-400 justify-center items-center basis-1/4 w-20 h-48";

		if (numberImageAssociation[value] !== undefined) {
			setCellElement(
				<div className={className}>
					<Image
						src={numberImageAssociation[value]}
						 width={180}
						 height={180}
						alt="Assembly"
					></Image>
				</div>
			);
		} else {
			setCellElement(<div className={className}>{value}</div>);
		}
	}, [value]);

	return <>{useCellElement}</>;
};

export default Cell;
