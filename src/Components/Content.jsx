import React from "react";
import Stories from "./Stories";
import Timeline from "./Timeline";

const Content = () => {

    return (

        <>
            {/*posts*/}
            <div className="posts">
                {/* stories */}
                <Stories />
                {/*create post*/}
                <Timeline />
            </div>
        </>


    )
}

export default Content