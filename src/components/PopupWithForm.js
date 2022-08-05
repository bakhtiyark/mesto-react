function PopupWithForm(props) {
    const className = `popup popup__${props.name} ${props.isOpen ? "popup_opened" : null}`

    return (
        <div className={className}>
            <div className="popup__container">
                <h2 className="popup__title">{props.title}</h2>
                <form className="popup__form" name={props.name} noValidate>
                    <input id="profile-name-input" className="popup__input popup__input_profile_name" type="text"
                        name="profileFormName" minLength="2" maxLength="40" required />
                    <span className="profile-name-input-error"></span>
                    <input id="profile-secondary-input" className="popup__input popup__input_profile_secondary"
                        type="text" name="profileFormSecondary" minLength="2" maxLength="200" required />
                    <span className="profile-secondary-input-error"></span>
                    <button type="submit" className="popup__save-button">{props.buttonText}</button>
                </form>
                <button type="button" onClick={props.Close} className="popup__close popup__close-icon" id="profile-close-button"></button>
            </div>
        </div>
    )
}