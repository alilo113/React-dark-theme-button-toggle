import { useState } from "react"

function App() {
  const [color, setColor] = useState("white");

  function toggleBtn() {
    setColor(prevColor => (prevColor === "white" ? "black" : "white"));
  }
  
  return (
    <body style={{
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       height: '100vh',
       backgroundColor: color
       }}>
      <div>
        <button 
           className="border border-solid border-black p-3 bg-sky-800 text-white hover:bg-sky-500"
           onClick={toggleBtn}
        >
          Toggle
        </button>
      </div>
    </body>
  )
}

export default App