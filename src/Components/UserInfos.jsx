import React from 'react'

const UserInfos = () => {
    return (
    <div className="first-col">
                    <div className="menu-item">
                        <div className="user">
                            <div className="profile">
                                <img src="img/avatar/hero.png" alt="" />
                            </div>
                            <h4>Anne</h4>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="item-row">
                            <div className="icon">
                                <img src="img/icons/shield.svg" alt="" />
                            </div>
                            <h4>COVID-19 Infromation Center </h4>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="item-row">
                            <div className="icon">
                                <img src="img/icons/colored-people.svg" alt="" />
                            </div>
                            <h4>Friends </h4>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="item-row">
                            <div className="icon">
                                <img src="img/icons/colored-messenger.svg" alt="" />
                            </div>
                            <h4>Messenger </h4>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="item-row">
                            <div className="icon">
                                <img src="img/icons/colored-flag.svg" alt="" />
                            </div>
                            <h4>Pages </h4>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="item-row  border">
                            <div className="icon more">
                                <img src="img/icons/arrow-down.svg" alt="" />
                            </div>
                            <h4>see more </h4>
                        </div>
                    </div>
                </div>
  )
}

export default UserInfos