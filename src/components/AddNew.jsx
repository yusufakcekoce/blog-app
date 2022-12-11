import React, { useState } from "react";
import CreateNew from "./CreateNew";

function AddNew() {
    const [showPopup, setShowPopup] = useState(false)
    const closePopup = () => setShowPopup(false)

  return (
    <div className="text-center">
      <button onClick={() => setShowPopup(true)} className="rounded-full text-lg ml-1 text-white bg-blue-700 hover:bg-blue-800 w-10 h-10 text-center">
        +
      </button>
      <CreateNew onClose={closePopup} visible={showPopup}/>
    </div>
  );
}

export default AddNew;
