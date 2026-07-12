

function Course(props){

    return (
        <div className = "card">
            <img src = {props.image} alt = {props.name} />
            <h2>{props.name}</h2>
            <p>{props.price}</p>
            <p>{props.rating}</p>

        </div>
    );
}
export default Course;