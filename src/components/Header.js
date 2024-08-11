import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react"
import { addUser, removeUser } from "../redux/userSlice"
import { useDispatch } from "react-redux"
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid, email, displayName, photoURL} = user;
            dispatch(addUser({uid: uid, email: email, displayName: displayName,photoURL: photoURL}));
            navigate('/browse');
        } else {
            dispatch(removeUser());
            navigate('/');
        }
      });
      return () => unsubscribe();
},[]);
  const handleSignout = () => {
    signOut(auth).catch((error) => {
      navigate('/error');
    });
  }
  return (
    <div className="absolute top-0 left-0 w-full px-4 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between">
      <img
        className="w-32 sm:w-40 md:w-52"
        src={LOGO}
        alt="logo"
      />
      { user !== null &&
      <div className="flex">
        <img alt="user icon" className="w-8 m-2" src={user?.photoURL}/>
        <button onClick={handleSignout} className="font-bold text-white hover:text-red-500">(Sign Out)</button>
      </div>
      }
    </div>
  );
};

export default Header;
