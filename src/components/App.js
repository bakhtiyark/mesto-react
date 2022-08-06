import Header from "./Header.js"
import Main from "./Main.js"
import Footer from "./Footer.js"
import React from "react";

function App() {
  const [isAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [isProfilePopupOpen, setProfilePopupOpen] = React.useState(false)

  function replaceAvatar() {
    setAvatarPopupOpen(true)
  }

  function addPlace(){
    setAddPlacePopupOpen(true)
  }

  function openProfilePopup(){
    setProfilePopupOpen(true)
  }

  function closePopups(){
    setAvatarPopupOpen(false)
    setAddPlacePopupOpen(false)
    setProfilePopupOpen(false)
  }

  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />

      <script type="module" src="./pages/index.js"></script>
    </div>
  );
}

export default App;
