import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validateForm";
import { auth } from "../utils/firebase";
import { addUser } from "../redux/userSlice"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { BACKGROUND_IMG, PHOTO_URL } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState([]);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
    setErrorMessage([]);
  };

  const handleClick = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const nameValue = !isSignIn && name.current.value;
    const message = isSignIn
      ? checkValidData(emailValue, passwordValue)
      : checkValidData(emailValue, passwordValue, nameValue);
    setErrorMessage(message);
    if (errorMessage.length !== 0) return;
    if (isSignIn) {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage([errorMessage]);
        });
    } else {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: nameValue, photoURL: PHOTO_URL
          }).then(() => {
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid: uid, email: email, displayName: displayName,photoURL: photoURL}));
          }).catch((error) => {
            setErrorMessage([error.message]);
          });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage([errorMessage]);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={BACKGROUND_IMG}
          alt="background-image"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white">
        <div className="w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 bg-black py-6 px-8 sm:px-12 rounded-lg opacity-80">
          <form className="my-6" onSubmit={(e) => e.preventDefault()}>
            <h1 className="font-bold text-3xl py-4 m-4">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignIn && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="p-4 my-4 w-full bg-gray-600"
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="p-4 my-4 w-full bg-gray-600"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-4 my-4 w-full bg-gray-600"
            />
            {errorMessage.map((message, idx) => (
              <p key={idx} className="text-red-500 font-bold my-2">
                {message}
              </p>
            ))}
            <button
              className="py-4 my-6 bg-red-700 w-full"
              onClick={handleClick}
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <p
              className="py-6 cursor-pointer hover:text-red-500"
              onClick={toggleForm}
            >
              {isSignIn
                ? "New to Netflix? Sign Up Now"
                : "Already registered? Sign In Now."}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
