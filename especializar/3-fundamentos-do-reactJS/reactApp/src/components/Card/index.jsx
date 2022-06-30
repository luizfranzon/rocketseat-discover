import "./style.css"

function Card(props) {
    return(
        <div className="card">
            <strong>{props.name}</strong>
            <span>{props.time}</span>
        </div>
    )
}

export default Card