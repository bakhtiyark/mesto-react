function Card(props) {
    function handleClick() {
        return ""
    }
    return (
        <article className="element">
            <img className="element__image" src={props.link} alt={props.name} onClick ={handleClick} />
            <div className="element__card">
                <h2 className="element__title">{props.name}</h2>
                <div className="like-compartment">
                    <button className="element__like-button" id="like-button" type="button"></button>
                    <p className="element__like-counter">{props.likes?.length}</p>
                </div>

            </div>
            <button className="element__delete-button" type="button"></button>
        </article>

    )
}
export default Card;