import assemblyImg from "../../../public/icons/assembly.png";
import htmlImg from "../../../public/icons/html.png";
import javaImg from "../../../public/icons/java.png";
import javascriptImg from "../../../public/icons/javascript.png";
import pythonImg from "../../../public/icons/python.png";
import typescriptImg from "../../../public/icons/typeScript.png";
import cImg from "../../../public/icons/c.png";
import cSharpImg from "../../../public/icons/c-sharp.png";
import phpImg from "../../../public/icons/php.png";
import kotlinImg from "../../../public/icons/kotlin.png";
import rubyImg from "../../../public/icons/ruby.png";
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
	4: cImg,
	8: cSharpImg,
	16: htmlImg,
	32: phpImg,
	64: rubyImg,
	128: javaImg,
	256: kotlinImg,
	512: pythonImg,
	1024: javascriptImg,
	2048: typescriptImg,
};
