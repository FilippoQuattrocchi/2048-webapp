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
		const className = "bg-slate-400 flex justify-center items-center";

		if (numberImageAssociation[value] !== undefined) {
			setCellElement(
				<div className={className}>
					<Image
						src={numberImageAssociation[value]}
						// width={100}
						// height={100}
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
