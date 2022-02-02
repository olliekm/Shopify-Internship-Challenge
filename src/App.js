import axios from 'axios';
import { useState, useEffect } from 'react'
import Post from './components/Post';
import './index.css'
function App() {

  const [retrievedPosts, setRetrievedPosts] = useState([])
  const [sol, setSol] = useState(2602)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&page=1&api_key=3TY27WJzrTxGGxWbH2IFbFl3OLHADmyC3v9sacAZ`)
      .then(function (response) {
        setRetrievedPosts(response.data.photos);
        setLoading(false)
        console.log(response.data);
      })
      .catch(function (err) {
        console.log("ERROR")
      })

  }, [sol])



  return (
    <div className="bg-gray-900 pb-40 text-slate-50 min-h-screen h-auto flex flex-col items-center font-mono px-3">
      <a href="https://github.com/olliekm/Shopify-Internship-Challenge" target="_blank"><i className="fab fa-github fixed right-0 m-10 z-[60]"></i></a>
      <div className="w-full h-7 bg-green-600 absolute text-gray-100 text-center flex justify-center items-center"><small>Created by Oliver Kwun-Morfitt - <a href={'https://www.olliekm.com/'} className=' mr-2 underline' target="_blank">olliekm.com</a></small></div>
      <div className="my-5 mt-10 px-3 z-10">
        <h1 className='text-3xl font-bold text-slate-300 '>Mars Curiosity Rover Images 🚀</h1>
        <h2 className='text-xl text-slate-400'>Images from sol {sol}</h2>
      </div>
      <div className=" bottom-0 w-screen h-36 fixed text-center flex flex-col justify-center items-center z-50 ">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 shadow-lg flex flex-col mx-4 mb-4">
          <label>Sol: {sol}/3373 (Current date)</label>
          <input type="range" name="" max={3373} min={1} step={1} value={sol} onChange={(e) => setSol(e.target.value)} id="" />
          <h1 className='text-2xl font-bold text-slate-300'>Go back in time and see images from the Curiosity rover </h1>
        </div>
      </div>
      <div className="bg-gray-900 flex flex-col justify-center w-full items-center">
        <div className="flex justify-between text-left z-20 mb-4">
          <button className='mr-5 hover:underline text-green-600' onClick={() => setSol(sol - 1)}>{`<- Go to sol ${sol - 1}`}</button>
          <button className='hover:underline text-cyan-600' onClick={() => setSol(sol - -1)}>{`Go to sol ${sol - -1} ->`}</button>
        </div>
        {
          loading === false && retrievedPosts.length > 0 ? (
            retrievedPosts.map((post) => (
              <Post key={post.id} date={post.earth_date} cameraFullName={post.camera.full_name} cameraName={post.camera.name} title={post.rover.name} img={post.img_src} />
            ))
          ) : (
            <div className="h-screen -mt-52 flex justify-center items-center flex-col ping">
              <div className="bg-gray-800 max-w-[30rem] min-w-[20rem] rounded-md shadow-md my-2 overflow-hidden hover:shadow-2xl transition-all group   duration-300 mx-3">
                <div className=' h-96 w-96 bg-gray-700 object-cover  justify-center flex items-center' alt="" >
                  <h1>LOADING IMAGE...</h1>
                </div>
                <div className="post-text p-4 text-lg font-mono items-start flex justify-between  duration-[150ms]">
                  <div className="">
                    <h1>Loading</h1>
                    <h2>...</h2>
                    {/* <button className={`underline cursor-pointer ${showMore && "text-green-400"} hover:text-green-300 select-none`} onClick={() => setShowMore(!showMore)}>See more</button> */}

                  </div>
                  <button disabled className={`bg-gray-500 px-5 py-3 rounded-lg uppercase  hover:ring-2  duration-[150ms]  font-semibold`} onClick={loading}>{loading ? "Unlike" : "Like"}</button>
                </div>
              </div>

              {/* <h1 className='text-4xl text-center bg-red-800 text-red-400  p-5 rounded-2xl'>It seems like there are not any photos at this date</h1> */}
            </div>
          )
        }
        <div className="flex justify-between text-left mt-4">
          <button className='mr-5 hover:underline text-green-600' onClick={() => setSol(sol - 1)}>{`<- Go to sol ${sol - 1}`}</button>
          <button className='hover:underline text-cyan-600' onClick={() => setSol(sol - -1)}>{`Go to sol ${sol + 1} ->`}</button>
        </div>
      </div>
      <div className="w-96 h-36 p-5 bg-gray-800 mt-10 shadow-xl rounded-md flex">
        <div className="flex flex-col text-sm justify-between">
          <h1 className='text-green-300 text-lg'>Thank you for making it this far!</h1>
          <p>I had a lot of fun making this website and I found the images amazing. I hope you enjoy it too.</p>
          <div className="flex">
            <a href="https://github.com/olliekm/Shopify-Internship-Challenge" className='mr-2 underline text-green-300' target="_blank">Source Code</a>
            <a href="https://www.olliekm.com/" className='underline text-cyan-300' target="_blank">My personal website</a>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
