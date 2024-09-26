import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
function App() {
  return (
    <>
      <Navbar />
      <div>
        <h1
          className="text-center mt-8 text-[36px] font-bold text-[#3764F2]"
          style={{
            textShadow: " 8px 4px 3px rgba(192, 192, 192, 1)",
          }}
        >
          Admission Form
        </h1>
        <Form />
      </div>
    </>
  );
}

export default App;
