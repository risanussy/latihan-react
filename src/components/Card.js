let Card = (props) => {
    return (
        <ul>
            <li className="bolder">{props.index+1}.</li>
            <li className="bolder">{props.nd} {props.nb}</li>
            <li><small>{props.mail}</small></li>
            <li className="btn-group">
                <button className="btn">edit</button>
                <button className="btn">delete</button>
            </li>
        </ul>
    )
}

export default Card;