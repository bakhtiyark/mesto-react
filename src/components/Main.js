import React from "react"
import { api } from "../utils/Api.js"
import Card from "./Card.js"
/*
const handleEditAvatarClick = () => {
  document.querySelector("#replace_avatar").classList.add("popup_opened")
}
const handleProfileClick = () => {
  document.querySelector("#profile__popup").classList.add("popup_opened")
}
const handleAddPlaceClick = () => {
  document.querySelector("#add_place").classList.add("popup_opened")
}*/


function Main() {
  React.useEffect(() => {
    api.getInitialCards().then((data) => {
      setcards(data);
    });
  }, []);

  //Пользователь
  const [username, setUsername] = React.useState(["Test"])
  const [avatar, setAvatar] = React.useState([null])
  const [occupation, setOccupation] = React.useState(["Penguin uprighter"])

  //Карты
  const [cards, setcards] = React.useState([])


  return (
    <main>
      <section className="profile">
        <div className="profile__card">
          <div className="profile__avatar-container">
            <img className="profile__avatar" alt="Аватар" />
            <button className="profile__avatar-replace" onClick={handleEditAvatarClick} type="button">
            </button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name"></h1>
            <p className="profile__subtitle"></p>
          </div>
          <button type="button" className="profile__button profile__button_edit" onClick={handleProfileClick}></button>
        </div>
        <button type="button" className="profile__button profile__button_add" onClick={handleAddPlaceClick}></button>

        <div className="popup" id="add_place">
          <div className="popup__container">
            <button className="popup__close-icon popup__close" type="button" id="place-close-button"
              name="place-close"></button>
            <h2 className="popup__label">Новое место</h2>
            <form className="popup__form" id="place-add" name="place-add" method="get" noValidate>
              <div className="popup__input-wrapper">
                <input required minLength="2" maxLength="30" className="popup__input" id="placename-input"
                  name="name" type="text" placeholder="Название" />
                <span className="placename-input-error"></span>
              </div>
              <div className="popup__input-wrapper">
                <input type="url" required className="popup__input popup__input_link" id="placelink-input"
                  name="link" placeholder="Ссылка на картинку" />
                <span className="placelink-input-error"></span>
              </div>
              <button type="submit" className="popup__save-button">Сохранить</button>
            </form>
          </div>
        </div>
        <div className="popup" id="confirm-delete">
          <div className="popup__container popup__container_delete">
            <button className="popup__close-icon popup__close" type="button" id="delete-close-button"
              name="place-close"></button>
            <h2 className="popup__label">Вы уверены?</h2>
            <form className="popup__form popup__form_delete-confirmation" id="place-delete" name="place-delete"
              method="get" noValidate>
              <button type="submit" className="popup__save-button" id="button-confirm-delete">Да</button>
            </form>
          </div>
        </div>
      </section>
      <section className="elements">

      </section>
      <div className="popup popup_open-card" id="open-card">
        <div className="popup__image-container">
          <button className="popup__close popup__close-icon popup__close-icon_position-place" id="image-close-button"
            type="button"></button>
          <img className="popup__image" />
          <p className="popup__place-name"></p>
        </div>
      </div>

      <div id="profile__popup" className="popup">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form" id="profile-edit" name="profile-edit" noValidate>
            <input id="profile-name-input" className="popup__input popup__input_profile_name" type="text"
              name="profileFormName" minLength="2" maxLength="40" required />
            <span className="profile-name-input-error"></span>
            <input id="profile-secondary-input" className="popup__input popup__input_profile_secondary"
              type="text" name="profileFormSecondary" minLength="2" maxLength="200" required />
            <span className="profile-secondary-input-error"></span>
            <button type="submit" className="popup__save-button">Сохранить</button>
          </form>
          <button type="button" className="popup__close popup__close-icon" id="profile-close-button"></button>
        </div>
      </div>

      <div className="popup replace_avatar" id="replace_avatar">
        <div className="popup__container popup__container_avatar">
          <button className="popup__close-icon popup__close" type="button" id="avatar-close-button"
            name="avatar-close"></button>
          <h2 className="popup__label">Обновить Аватар</h2>
          <form className="popup__form" id="avatar-add" name="avatar-add" method="get" noValidate>
            <div className="popup__input-wrapper">
              <input type="url" required className="popup__input popup__input_link" id="avatar-input"
                name="link" placeholder="Ссылка на картинку" />
              <span className="avatar-input-error"></span>
            </div>
            <button type="submit" className="popup__save-button">Сохранить</button>
          </form>
        </div>
      </div>

    </main>
  )
}
export default Main;