function Card(props) {
    function handleClick() {
        return ""
    }
    return (
        <template id="elements-template">
            <article className="element">
                <img className="element__image" id="element-image" alt="Иллюстрация" />
                <div className="element__card">
                    <h2 className="element__title"></h2>
                    <div className="like-compartment">
                        <button className="element__like-button" id="like-button" type="button"></button>
                        <p className="element__like-counter"></p>
                    </div>

                </div>
                <button className="element__delete-button" type="button"></button>
            </article>
        </template>

    )
}