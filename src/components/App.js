import Header from "./Header.js"
import Main from "./Main.js"
import Footer from "./Footer.js"
import React from "react";
import PopupWithForm from "./PopupWithForm.js"
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [isProfilePopupOpen, setProfilePopupOpen] = React.useState(false)

  function replaceAvatar() {
    setAvatarPopupOpen(true)
  }

  function addPlace() {
    setAddPlacePopupOpen(true)
  }

  function openProfilePopup() {
    setProfilePopupOpen(true)
  }

  function closePopups() {
    setAvatarPopupOpen(false)
    setAddPlacePopupOpen(false)
    setProfilePopupOpen(false)
    setSelectedCard({})
    console.log("lala")
  }
  //Карты
  const [selectedCard, setSelectedCard] = React.useState({})
  function openCardPopup(card) {
    setSelectedCard({ src: card.link, alt: card.name, opened: true });
  }

  return (
    <div className="page">
      <Header />

      <PopupWithForm
        name="updated-profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isProfilePopupOpen}
        onClose={closePopups}
      >
        <>
          <input
            type="text"
            id="firstname"
            name="name"
            placeholder="Имя"
            maxLength="40"
            className="popup__input popup__input_profile_name"
            required
          />
          <span className="profile-name-input-error"></span>

          <input
            type="text"
            id="profession"
            name="about"
            maxLength="200"
            placeholder="Род занятии"
            className="popup__input popup__input_profile_secondary"
            required
          />
          <span className="profile-secondary-input-error"></span>
        </>
      </PopupWithForm>

      <PopupWithForm
        name="updated-avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isAvatarPopupOpen}
        modifier= "popup__container_avatar"
        onClose={closePopups}
        placeholder="Ссылка на картинку"
      >
          <div className="popup__input-wrapper">
            <input type="url" required className="popup__input popup__input_link" id="avatar-input"
              name="link" placeholder="Ссылка на картинку" />
            <span className="avatar-input-error"></span>
          </div>
          <button type="submit" className="popup__save-button">Сохранить</button>

      </PopupWithForm>

      <PopupWithForm
        name="new-card"
        title="Добавить место"
        buttonText="Сохранить"
        isOpen={isAddPlacePopupOpen}
        onClose={closePopups}
      >
        <>
          <input
            type="text"
            id="location"
            name="name"
            maxLength="40"
            className="popup__input popup__input_profile_name"
            required
            placeholder="Название места"
          />
          <span className="profile-name-input-error"></span>

          <input
            type="text"
            id="link"
            name="link"
            maxLength="200"
            className="popup__input popup__input_profile_secondary"
            required
            placeholder="Ссылка на картинку"
          />
          <span className="profile-secondary-input-error"></span>
        </>
      </PopupWithForm>

      <Main
        replaceAvatar={replaceAvatar}
        addPlace={addPlace}
        openProfilePopup={openProfilePopup}
        closePopups={closePopups}
        onCardClick={openCardPopup}
      />


      <ImagePopup card={selectedCard} onClose={closePopups}></ImagePopup>

      <Footer />

      <script type="module" src="./pages/index.js"></script>
    </div>
  );
}

export default App;
