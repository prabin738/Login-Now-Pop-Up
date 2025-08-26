import React, { useState } from "react";
import "./index.css";

const App = () => {
  let [modalstatus, setModalstatus] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setModalstatus(!modalstatus)} className="en">
        Enquire Now
      </button>
      <div className={`modalOverlay ${modalstatus ? "modal-show" : ""} `}></div>
      <div className={`modal-div ${modalstatus ? "show-modal-div" : ""} `}>
        <h3>Enquiry Now</h3>
      </div>
    </div>
  );
};

export default App;
