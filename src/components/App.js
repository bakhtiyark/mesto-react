import Header from "./Header.js"
import Main from "./Main.js"
import Footer from "./Footer.js"
import React from "react";
import PopupWithForm from "./PopupWithForm.js"
import ImagePopup from "./ImagePopup.js";
import { api } from "../utils/Api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function App() {

  //Данные о пользователе

  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo().then((data) => {
      setCurrentUser(data);
    });
  }, []);


  React.useEffect(() => {
    api.getInitialCards().then((res) => {
      console.dir(res)
      setCards(res)
    })
  }, [])

  const [cards, setCards] = React.useState([]);
  //Стейты
  const [isAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [isProfilePopupOpen, setProfilePopupOpen] = React.useState(false)

  // Открытие соответствующих попапов
  function replaceAvatar() {
    setAvatarPopupOpen(true)
  }

  function addPlace() {
    setAddPlacePopupOpen(true)
  }

  function openProfilePopup() {
    setProfilePopupOpen(true)
  }

  //Закрытие Попапов

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

  //Установка данных пользователей
  function handleUserData(data) {
    api.setUserInfo({ data }).then((data) => {
      setCurrentUser(data)
    });
    closePopups();
  }

  //Аптейт аватара
  function handleAvatarUpdate(data) {
    api.replaceAvatar(data).then((data) => {
      setCurrentUser(data)
    });
    closePopups();
  }

  // Лайканье

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }
  // Удаление карты
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
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
          modifier="popup__container_avatar"
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
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}


        />


        <ImagePopup card={selectedCard} onClose={closePopups}></ImagePopup>

        <Footer />

        <script type="module" src="./pages/index.js"></script>
      </div>


    </CurrentUserContext.Provider>);
}

export default App;
