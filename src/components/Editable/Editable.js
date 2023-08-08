import React, { useState } from 'react'
import { X } from 'react-feather'
import './Editable.css'

function Editable(props) {
    const { text, btntext, placeholder, onSubmit, editClass, displayClass } = props;
    const [show, setShow] = useState(false);
    const [getInputData, setInputData] = useState();
    return (
        <div className='editable'>
            {
                show ?
                    (
                        <form
                            className={`editable_edit ${editClass || ""}`}
                            onSubmit={(event) => {
                                event.preventDefault();
                                if (onSubmit) {
                                    onSubmit(getInputData)
                                    setShow(false)
                                    setInputData("")
                                }
                            }}>
                            <input
                                type="text"
                                autoFocus
                                placeholder={placeholder || "Enter Item"}
                                // defaultValue={text} // It is directly provided in useState
                                value={getInputData}
                                onChange={(event) => setInputData(event.target.value)}
                            />

                            <div className='editable_edit_footer'>

                                <button type='submit'>{btntext || 'Add'}</button>
                                <X onClick={() => setShow(false)} />
                            </div>
                        </form>

                    ) : <p className={`editable_display ${displayClass || ""}`} onClick={() => setShow(true)}>{text || 'Add Item'}</p>
            }

        </div>
    )
}

export default Editable
