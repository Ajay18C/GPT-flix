import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearch } from "../redux/gptSlice";
import { changeLanguage } from "../redux/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const user = useSelector((store) => store.user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handleSignout = () => {
    signOut(auth).catch((error) => {
      navigate("/error");
    });
  };
  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute top-0 left-0 w-full px-4 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between">
      <img className="w-32 sm:w-40 md:w-52" src={LOGO} alt="logo" />
      {user !== null && (
        <div className="flex">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-600 text-white rounded-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lan, idx) => (
                <option key={idx} value={lan.identifier}>
                  {lan.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 my-2 mx-4 bg-purple-800 text-white rounded-xl"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img alt="user icon" className="w-8 m-2" src={user?.photoURL} />
          <button
            onClick={handleSignout}
            className="font-bold text-white hover:text-red-500"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
