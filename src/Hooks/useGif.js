import { useEffect, useState } from "react";
import axios from 'axios';

const useGif = (tag) => {
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  const [gif, setGif] = useState('');
  const [spinner, setSpinner] = useState(false);

  const getData = async (tag) => {
    try {
      setSpinner(true);
      const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
    } catch (error) {
      console.error("Error fetching GIF: ", error);
    } finally {
      setSpinner(false);
    }
  };

  useEffect(() => {
    getData(tag); // initial load with tag
  }, []);

  return { gif, spinner, getData };
};

export default useGif;
