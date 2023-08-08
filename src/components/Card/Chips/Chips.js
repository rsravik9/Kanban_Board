import React from 'react';
import './Chips.css';
import { X } from 'react-feather';



function Chips(props) {
    const { text, close, pColor, onClose } = props
    return (
        <div className='chips' style={{ backgroundColor: pColor }}>
            {text}
            {close && <X onClick={() => onClose() ? onClose() : ''} />}
        </div>
    )
}

export default Chips
