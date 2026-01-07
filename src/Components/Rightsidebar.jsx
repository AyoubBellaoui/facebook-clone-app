import React from "react";
import YourPages from "./YourPages";
import Birthdays from "./Birthdays";
import Contact from "./Contact";

const Rightsidebar = () => {

    return (

        <>
        {/*shortcuts 2 -events and chat- */}
        <div className="shortcuts shortcuts-2">
            {/* Your Pages */}
            <YourPages />

            <div className="second-col">
            {/* birthdays */}
            <h6 className="title">birthdays</h6>
            <Birthdays description = "it's diana berry's birthday"/>
            <Birthdays description = "It's Ayoub birthday"/>
            {/* Contact */}
            <Contact />
            </div>
            
        </div>
        </>
    )
}

export default Rightsidebar