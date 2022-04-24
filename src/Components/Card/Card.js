import React from 'react'

const Card = () => {

    const cardInfo = [
        {id: "photography", link: "https://avalcantaraphotography.com", text: "Photography"}
    ]

    const renderCard = (card, index) => {
        return (
            <div>
                <div id="card">Hello</div>
            </div>
          );
    }
  
    return <div className='cardContainer'>
        {cardInfo.map(renderCard)}
    </div>
}

export default Card