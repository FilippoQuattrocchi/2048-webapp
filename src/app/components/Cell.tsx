
type Props = {
    value: number;
}
const Cell = ({value}: Props) => {

    return (
        <div>{value}</div>
    );

}

export default Cell;