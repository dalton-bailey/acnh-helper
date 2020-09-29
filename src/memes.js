import React, { useEffect, useState } from "react";
import axios from "axios";
import LazyLoad from "react-lazyload";

const Memes = () => {
  const [memesData, setMemesData] = useState({
    memes: [],
  });

  const fetchMemes = () => {
    axios.get("https://api.imgflip.com/get_memes").then(function (response) {
      console.log(response);
      setMemesData({
        memes: response.data.data.memes,
      });
    });
  };

  useEffect(() => {
    fetchMemes();
  }, []);

//   console.log(memesData.memes)

  return (
    <div className="memes">
      <div>
        <h1>{memesData.memes.length} Memes</h1>
        {memesData.memes.map((meme) => {
          return (
            <LazyLoad>
              <img alt="" src={meme.url}></img>
            </LazyLoad>
          );
        })}
      </div>
    </div>
  );
};

export default Memes;
