
import Spinner from './Spinner'
import useGif from '../Hooks/useGif'
const Random = () => {
  const {gif,spinner,getData} = useGif();
  const clickHandler = ()=>{
    getData();
  }

  return (
    <div className="w-1/2 bg-green-400 p-5 mt-10 rounded-xl border border-black flex flex-col items-center">
      <h1 className="font-bold underline text-2xl mb-5">A RANDOM GIF</h1>
      <div>
        {spinner ? <Spinner></Spinner> : <img src={gif} alt=""></img>}
      </div>
      <button onClick={clickHandler} className="w-full flex items-center justify-center bg-white/70 rounded-[8px] font-medium text-richblack-100 border-richblack-700 border px-[12px] py-[8px] gap-x-2 mt-6">
        GENERATE
      </button>
    </div>
  );
};

export default Random;
