
type Props = {
    value: number;
}
const Cell = ({value}: Props) => {

    return (
        <div className="bg-slate-400 text-center">{value}</div>
    );

}

export default Cell;