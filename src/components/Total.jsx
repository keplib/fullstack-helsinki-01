const Total = ({parts}) => {
    return (
        <p><b>total of {parts.reduce((prev, curr) => prev + curr.exercises, 0)} exercises</b></p>
    )
}

export default Total;
