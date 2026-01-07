import React from "react";
import UserInfos from "./UserInfos";
import Shortcuts from "./Shortcuts";

const Leftsidebar = () => {

    return (

        <>
            
            <div className="shortcuts">
                {/*Profiles section*/}
                <UserInfos />
                {/*Shortcuts section*/}
                <Shortcuts />
            </div>
        </>

    )
}

export default Leftsidebar