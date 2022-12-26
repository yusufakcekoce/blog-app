import React, { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../context/AuthContext.jsx";
import CreateNew from "./CreateNew";

function AddNew() {
  const { user } = useContext(UserContext);
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    if (user) {
      setShowPopup(true);
    } else {
      toast.warn("Please login to add new blog", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const closePopup = () => setShowPopup(false);

  return (
    <div className="text-center">
      <button
        onClick={openPopup}
        className="rounded-full text-lg ml-1 text-white bg-blue-700 hover:bg-blue-800 w-10 h-10 text-center"
      >
        +
      </button>
      <ToastContainer />
      <CreateNew onClose={closePopup} visible={showPopup} />
    </div>
  );
}

export default AddNew;
