import Random from './components/Random'
import Tag from './components/Tag';
export default function App() {
  return (
    <div className="background h-full flex flex-col items-center">
      <div className="bg-white w-11/12 text-center mt-10 p-4 font-bold text-3xl rounded-xl">
        RANDOM GIFS
      </div>
      <Random></Random>
      <Tag></Tag>
    </div>
  );
}
