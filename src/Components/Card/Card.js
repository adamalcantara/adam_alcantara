import React from 'react';
import "./Card.css"

const Card = () => {

    const cardInfo = [
        {id: "photography", link: "https://avalcantaraphotography.com", text: "Photography"},
        {id: "development", link: "https://alcantaradevelopment.com/", text: "Web Development"}
    ]

    const renderCard = (card, index) => {
        return (
            <div>
                <a id={card.id} className="card" href={card.link}>{card.text}</a>
            </div>
          );
    }
  
    return <div className='cardContainer'>
        {cardInfo.map(renderCard)}
    </div>
}

export default Card