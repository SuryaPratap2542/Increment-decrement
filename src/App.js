import React, { useState } from 'react'
import './App.css';


function App() {

  const [count, setCount] = useState(0);

  const [color, setColor] = useState(" ")

  function decreaseHandler() {
    setCount(count - 1);
  }
  function increaseHandler() {
    setCount(count + 1);
  }
  function resetHandler() {
    setCount(0);
  }
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10'>
      <div className='text-[#0398d4] font-medium text-2xl'>Incerement && Decrement</div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={decreaseHandler} className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl'>
          -
        </button>

        <div className='font-bold gap-12 text-5xl'>
          {count}
        </div>

        <button onClick={increaseHandler} className='border-l-2 text-center w-20 border-[#bfbfbf] text-5xl'>
          +
        </button>
      </div>

      <div>

        <button onClick={resetHandler} className='bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg'>
          Reset
        </button>

      </div>
      <div className="bg-white h-px w-full my-4"></div>

      <div className="text-[#0398d4] font-medium text-2xl">
        <div className="text-[#0398d4] font-medium text-2xl mb-6 flex justify-center">Color Change</div>
        <div className="flex justify-center py-3 rounded-sm text-[25px] text-[#344151] flex-col bg-white">
          <div className="font-bold text-5xl p-6">
            Choose Your Favorite Color: <span style={{ color: color === "Red" ? "red" : color === "Blue" ? "blue" : color === "Yellow" ? "yellow" : "inherit" }}> {color}</span> 
          </div>
          <div className="flex justify-center space-x-6 p-10 bg-black">
            <button
              onClick={() => setColor("Red")}
              className="border-r-2 text-center w-auto border-[#bfbfbf] text-5xl text-red-500 hover:bg-red-500 hover:text-white px-4 py-2 transition duration-300"
            >
              Red
            </button>
            <button
              onClick={() => setColor("Blue")}
              className="border-r-2 text-center w-auto border-[#bfbfbf] text-5xl text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 transition duration-300"
            >
              Blue
            </button>
            <button
              onClick={() => setColor("Yellow")}
              className="text-center w-auto text-5xl text-yellow-500 hover:bg-yellow-500 hover:text-white px-4 py-2 transition duration-300"
            >
              Yellow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
