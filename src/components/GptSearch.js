import { BACKGROUND_IMG } from "../utils/constants"
import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"


const GptSearch = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src={BACKGROUND_IMG}
          alt="background-image"
        />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch
