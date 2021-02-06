import React from 'react'
import Videoitem from './Videoitem'

function Videolist({videos , onVideoSelect}) {
   var rendersList =  videos.map((video) =>{
        return <Videoitem onVideoSelect={onVideoSelect} key={video.id.videoId} video={video}/>

    })
    return (
        <div>       
        <div className="ui relaxed divided list">{rendersList}      </div>
        </div>
    )
}

export default Videolist
