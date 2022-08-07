import Header from "./Header.js"
import Main from "./Main.js"
import Footer from "./Footer.js"
import React from "react";
import PopupWithForm from "./PopupWithForm.js"

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
    console.log("lala")
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
        onClose={closePopups}
      >
        <>
            <div className="popup__input-wrapper">
              <input type="url" required className="popup__input popup__input_link" id="avatar-input"
                name="link" placeholder="Ссылка на картинку" />
              <span className="avatar-input-error"></span>
            </div>
            <button type="submit" className="popup__save-button">Сохранить</button>

        </>
      </PopupWithForm>

      <PopupWithForm
        name="new-profile"
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
            className="popup__input popup__input_profile_secondary"
            required
          />
          <span className="profile-secondary-input-error"></span>
        </>
      </PopupWithForm>

      <PopupWithForm
        name="new-profile"
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
            className="popup__input popup__input_profile_secondary"
            required
          />
          <span className="profile-secondary-input-error"></span>
        </>
      </PopupWithForm>

      <Main
        replaceAvatar={replaceAvatar}
        addPlace={addPlace}
        openProfilePopup={openProfilePopup}
        closePopups={closePopups}
      />
      <Footer />

      <script type="module" src="./pages/index.js"></script>
    </div>
  );
}

export default App;
