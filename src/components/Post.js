import React, { useState } from 'react'
function Post(props) {

    const [likes, setLikes] = useState(0)
    const [hasLiked, setHasLikes] = useState(false)
    const [showMore, setShowMore] = useState(false)
    const [likeAnimation, setLikeAnimation] = useState(false)

    function handleLikes() {
        setLikeAnimation(true)
        if (hasLiked) {
            setLikes(likes + -1)
        } else {
            setLikes(likes + 1)
        }
        setHasLikes(!hasLiked)
    }

    return (
        <div className="z-10 bg-gray-800 max-w-[30rem] min-w-[20rem] rounded-md shadow-md my-2 overflow-hidden hover:scale-105 hover:shadow-2xl transition-all group border-green-600 hover:shadow-green-600 hover:z-40 duration-300 mx-3">
            {
                props.img !== undefined ?
                    (
                        <img src={props.img} className='object-cover w-full' alt="" />
                    )
                    :
                    (
                        <div className=' h-96 w-96 bg-gray-700 object-cover  justify-center flex items-center' alt="" >
                            <h1>LOADING IMAGE...</h1>
                        </div>
                    )
            }

            <div className="post-text p-4 text-lg font-mono items-start flex justify-between  duration-[150ms]">
                <div className="">
                    <h1>{props.title}</h1>
                    <h2>{props.date}</h2>
                    <button className={`underline cursor-pointer ${showMore && "text-green-400"} hover:text-green-300 select-none`} onClick={() => setShowMore(!showMore)}>See more</button>
                    {
                        showMore &&
                        <div className="flex flex-col">
                            <small><strong className='underline'>Camera Info:</strong></small>
                            <small><strong>Name:</strong> {props.cameraFullName} ({props.cameraName})</small>
                            <small><strong className='underline'>Rover Info:</strong></small>
                            <small><strong>Name:</strong> Curiosity</small>
                        </div>
                    }

                </div>
                <button onAnimationEnd={() => setLikeAnimation(false)} className={` transition-transform ${hasLiked ? "bg-cyan-900 hover:bg-cyan-600/25 ring-cyan-600 hover:text-cyan-500" : "bg-green-600 hover:bg-green-600/25 ring-green-600 hover:text-green-500"} px-5 py-3 rounded-lg uppercase  hover:ring-2 whitespace-nowrap  duration-[150ms]  font-semibold`} onClick={handleLikes}>{hasLiked ? "Unlike " : "Like "}<strong className={`${likeAnimation && "animate-likeClick"}`}>{hasLiked ? "💙" : "💚"}</strong></button>
            </div>
        </div >
    )
}

export default Post
