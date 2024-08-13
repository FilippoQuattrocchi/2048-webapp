import { useEffect, useState } from "react";

type Props = {
    value: number;
}
const Cell = ({value}: Props) => {
    const [useValue, setValue] = useState(value);

    useEffect(() => {
        setValue(value);
    },[value]);

    return <div className="bg-slate-400 text-center">{useValue}</div>;

}

export default Cell;