import Part from "./Part";

const Content = (props) => {
    return (
        <div>
            {props.parts.map( part => <Part key={part.id} part={part.name} point={part.exercises}/>)}
        </div>
    )
}

export default Content;
