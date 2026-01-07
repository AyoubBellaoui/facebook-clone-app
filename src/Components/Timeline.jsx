import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Post from './Post'
import CreatePost from './CreatePost'
import CreateView from './CreateView'
import People from './People'

const Timeline = () => {

    const [posts, setposts] = useState([]);
    
    useEffect(() => {

        axios.get("./data/posts.json").then(Response => {
        setposts(Response.data)})
    })

    return (
        <div className="timeline">
            {/*Create Post Components*/} 
            <CreatePost />

            {/*Create View Components*/}
            <CreateView />

            {/*Post Components*/}
            {posts.map((post) => {

                return (

                    <Post 
                    userName={post.userName} 
                    profilePicture={post.profilePicture} 
                    date={post.date} 
                    description={post.description} 
                    image={post.image} 
                    isOnline={post.isOnline} 
                    />
                );
            })}
            
            {/*people you may know*/}
            <People />,
        </div>
    )
}

export default Timeline