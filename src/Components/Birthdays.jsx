import React from 'react'

const Birthdays = (props) => {
    return (
        <div className="menu-item">
            <div className="item-row">
                <div className="icon not-rounded">
                    <img src="img/icons/gift.svg" alt="" />
                </div>
                <h4>{props.description}</h4>
            </div>
        </div>
    )
}

export default Birthdays