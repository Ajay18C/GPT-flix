

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-full aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-2/4 hidden md:inline-block">{overview}</p>
        <div className="my-4 md:m-0">
            <button className="bg-white text-black py-1 md:py-4 px-2 md:px-12 mx-2 text-xl rounded-md hover:opacity-80">▶️Play</button>
            <button className="bg-gray-500 text-white p-4 px-12 mx-2 my-2 text-xl opacity-50 rounded-md hidden md:inline-block">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
