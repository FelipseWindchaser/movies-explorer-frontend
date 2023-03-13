import success from '../../images/success.svg';
import failure from '../../images/failure.svg';
import './popupTooltip.css'
import { useEffect, useState } from 'react';

function PopupTooltip({ popupContent, setPopupTooltipContent }) {
  const popupImage = popupContent.isSuccessful ? success : failure;
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if(Object.keys(popupContent).length !== 0) {
      setIsPopupOpen(true)
    }
  },[popupContent])

  function closePopup() {
    setIsPopupOpen(false)
    setTimeout(() => setPopupTooltipContent({}), 200) 
  }

  return (
    <div className={`popup ${isPopupOpen ? "popup_active" : ""}`}>
      <div className="popup__overlay" onClick={closePopup}></div>
      <div className="popup__content">
        <img className="popup__image" 
        src={popupImage}
        alt="Ответ сервера"
        />
        <p className="popup__text">{popupContent.message}</p>
        <button className="popup__close-button" type="button" onClick={closePopup}>Закрыть</button>
      </div>
    </div>
  )
}
export default PopupTooltip;