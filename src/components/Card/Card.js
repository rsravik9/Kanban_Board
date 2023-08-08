import React, { useState } from 'react'
import './Card.css'
import { CheckSquare, Clock, MoreHorizontal } from 'react-feather';
import Chips from './Chips/Chips';
import DropDown from '../DropDown/DropDown';


function Card(props) {
    const { cardData, removeCards, boardId, handleDragEnd, handleDragEnter, boardText } = props;
    const [showDropDown, setShowDropDown] = useState(false)

    return (
        <div className='card'
            draggable
            onDragEnd={() => handleDragEnd(boardId, cardData.id)}  // To make it sourse when something dragged on it
            onDragEnter={() => handleDragEnter(boardId, cardData.id)} // To make it target when move or drag
        >
            {/* Ta achive draggable functionality */}
            <div className='card_top'>
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
                <b>{cardData.date}</b>
            </div>
            <div className='card_title'>
                {cardData.title}
            </div>
            <div className='card_title'>
                {cardData.description}
            </div>
            <div className='card_footer'>

                <div className='board_top_lables'>
                    {
                        // cardData.labels.map((ev, index) => (
                            <Chips text={boardText} pColor={'#F7B0BB'} />
                        // ))
                    }
                </div>
                {cardData.labels.length && <p> <Clock /></p>}
                <p> &nbsp;&nbsp;<CheckSquare /></p>
            </div>
        </div>
    )
}

export default Card;
