import React, { useEffect, useRef } from 'react'

function DropDown(props) {
    const dropDownRef = useRef();


    const handleClick = (event) => {
        if (dropDownRef && dropDownRef?.current?.contains(event?.target)) {
            if (props.onClose) { props.onClose() }
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])
    return (
        <div
            ref={dropDownRef}
            className='dropdown'
            style={{ position: 'absolute', top: '100%', right: 0 }}
        >
            {props.children}
        </div>
    )
}

export default DropDown
