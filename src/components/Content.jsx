import Part from "./Part";

const Content = (props) => {
    return (
        <div>
            <Part part={props.part1} point={props.point1}/>
            <Part part={props.part2} point={props.point2}/>
            <Part part={props.part3} point={props.point3}/>
        </div>
    )
}

export default Content;
