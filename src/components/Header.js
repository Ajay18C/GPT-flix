import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignout = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      navigate('/error');
    });
  }
  return (
    <div className="absolute top-0 left-0 w-full px-4 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between">
      <img
        className="w-32 sm:w-40 md:w-52"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      { user !== null &&
      <div className="flex">
        <img alt="user icon" className="w-8 m-2" src={user?.photoURL}/>
        <button onClick={handleSignout} className="font-bold text-white">(Sign Out)</button>
      </div>
      }
    </div>
  );
};

export default Header;
