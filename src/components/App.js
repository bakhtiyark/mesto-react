import Header from "./Header.js"
import Main from "./Main.js"
import Footer from "./Footer.js"
import React from "react";
import ImagePopup from "./ImagePopup.js";
import { api } from "../utils/Api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";

function App() {

  //Данные о пользователе

  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo().then((data) => {
      setCurrentUser(data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);


  React.useEffect(() => {
    api.getInitialCards().then((res) => {
      //console.dir(res)
      setCards(res)
    }).catch((err) => {
      console.log(err);
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
    //console.log("lala")
  }
  //Карты
  const [selectedCard, setSelectedCard] = React.useState({})
  function openCardPopup(card) {
    setSelectedCard({ src: card.link, alt: card.name, opened: true });
  }

  //Установка данных пользователей
  function handleUpdateUser(data) {
    api.setUserInfo(data).then((data) => {
      setCurrentUser(data)
    }).catch((err) => {
      console.log(err);
    });
    closePopups();
  }

  //Аптейт аватара
  function handleAvatarUpdate(data) {
    api.setUserAvatar(data).then((link) => {
      setCurrentUser(link)
    }).catch((err) => {
      console.log(err);
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

  // AddPlace
  function handleAddPlaceSubmit(data) {
    api.createCard(data).then((newCard) => {
      setCards([newCard, ...cards]);
      closePopups();
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <EditProfilePopup isOpen={isProfilePopupOpen} onClose={closePopups} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup isOpen={isAvatarPopupOpen} onClose={closePopups} onUpdateAvatar={handleAvatarUpdate} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closePopups} onSubmitPlace={handleAddPlaceSubmit} />

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
