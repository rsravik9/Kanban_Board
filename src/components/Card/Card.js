import React, { useState } from 'react'
import './Card.css'
import { CheckSquare, Clock, MoreHorizontal } from 'react-feather';
import Chips from './Chips/Chips';
import DropDown from '../DropDown/DropDown';


function Card(props) {
    const { cardData, removeCards, boardId, handleDragEnd, handleDragEnter } = props;
    const [showDropDown, setShowDropDown] = useState(false)

    return (
        <div className='card'
            draggable
            onDragEnd={() => handleDragEnd(boardId, cardData.id)}  // To make it sourse when something dragged on it
            onDragEnter={() => handleDragEnter(boardId, cardData.id)} // To make it target when move or drag
        >
            {/* Ta achive draggable functionality */}
            <div className='card_top'>
                <div className='board_top_lables'>
                    {
                        cardData.labels.map((ev, index) => (
                            <Chips key={index} text={ev.text} pColor={ev.color} />
                        ))
                    }
                </div>
                <div
                    className='card_top_more'
                    style={{ position: 'relative', cursor: 'pointer' }}
                    onClick={() => setShowDropDown(true)}
                >
                    <MoreHorizontal />
                    {
                        showDropDown &&
                        <DropDown onClose={() => setShowDropDown(false)}>
                            <div className='card_dropDown'>
                                <p onClick={() => removeCards(cardData.id, boardId)}>Delete Card</p>
                            </div>
                        </DropDown>
                    }
                </div>
            </div>
            <div className='card_title'>
                {cardData.title}
            </div>
            <div className='card_footer'>
                {cardData.date && <p> <Clock /> {cardData.date}</p>}
                <p> <CheckSquare /> 1/4</p>
            </div>
        </div>
    )
}

export default Card;
