import assemblyImg from "../../../public/icons/assembly.png";
import htmlImg from "../../../public/icons/html.png";
import javaImg from "../../../public/icons/java.png";
import javascriptImg from "../../../public/icons/javascript.png";
import pythonImg from "../../../public/icons/python.png";
import { NumImageAssocation } from "./Definition";

export const DEFAULT_SIZE_GRID = 4;
export const DEFAULT_MATRIX_VALUES = [
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
];
export const numberImageAssociation: NumImageAssocation = {
	2: assemblyImg,
	4: htmlImg,
	8: javaImg,
	16: pythonImg,
	32: javascriptImg,
};
