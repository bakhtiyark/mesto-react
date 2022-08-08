import React from "react"
import { api } from "../utils/Api.js"
import Card from "./Card.js"

export default function Main(props) {

// Получение данных с сервера
  React.useEffect(() => {
    api.getAllData().then(([cards, userData]) => {
      setUsername(userData.name);
      setOccupation(userData.about);
      setAvatar(userData.avatar);
      setCards(cards);
    }).catch(err => console.log(err))
  }, []);

  //Пользователь
  const [username, setUsername] = React.useState(["Test"])
  const [avatar, setAvatar] = React.useState([""])
  const [occupation, setOccupation] = React.useState(["Penguin uprighter"])
  const [cards, setCards] = React.useState([])

  return (
    <main>

      
      <section className="profile">
        <div className="profile__card">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src={avatar} alt="Аватар" />
            <button className="profile__avatar-replace" onClick={props.replaceAvatar} type="button">
            </button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{username}</h1>
            <p className="profile__subtitle">{occupation}</p>
          </div>
          <button type="button" className="profile__button profile__button_edit" onClick={props.openProfilePopup}></button>
        </div>

        <button type="button" className="profile__button profile__button_add" onClick={props.addPlace}></button>
        

      </section>
      <section className="elements">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              link={card.link}
              name={card.name}
              likes={card.likes}
              card={card}
              onCardClick={props.onCardClick}
            />
          );
        })}


      </section>
    </main>
  )
};

