import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";
const Tag = () => {
  const [val,setVal] = useState('car');
  const {gif,spinner,getData} = useGif(val)
  const changeHandler = (e)=>{
    setVal(e.target.value);
  }
  const clickHandler = ()=>{
    getData(val);
  }
  return (
    <div className="w-1/2 bg-blue-400 p-5 mt-10 rounded-xl border border-black flex flex-col items-center">
      <h1 className="font-bold underline text-2xl mb-5 uppercase">A RANDOM {val} GIF</h1>
      <div>
        {spinner ? <Spinner></Spinner> : <img src={gif} alt=""></img>}
      </div>
      <input 
        type="text"
        value={val}
        className="w-full flex items-center justify-center bg-white/70 rounded-[8px] font-medium text-center px-[12px] py-[8px] gap-x-2 mt-6" 
        onChange={changeHandler}
      >
      </input>
      <button onClick={clickHandler} className="w-full flex items-center justify-center bg-white/70 rounded-[8px] font-medium text-richblack-100 border-richblack-700 border px-[12px] py-[8px] gap-x-2 mt-6">
        GENERATE
      </button>
    </div>
  );
};

export default Tag;
