import React from 'react'
import VideosCard from "../components/VideosCard.js"
import "../styles/Videos.css"
const Videos = ({videos}) => {
  return (
    <div className="videos">
        {
            videos.map((item,index)=>(
                <VideosCard key={item.image} index={index} image={item.image} name={item.name}  />
            ))
        }
    </div>
  )
}

export default Videos