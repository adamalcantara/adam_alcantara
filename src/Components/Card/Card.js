import React from 'react';

const Card = () => {

    const cardInfo = [
        {id: "photography", link: "https://avalcantaraphotography.com", text: "Photography"}
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