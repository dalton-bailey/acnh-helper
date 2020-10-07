import React, { useEffect, useState } from "react";
import axios from "axios";
import { GridList, GridListTile } from "@material-ui/core";

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

  console.log(memesData.memes)


  return (
    <div className="memes">
      <h1>{memesData.memes.length} Memes</h1>
        <GridList cellHeight={160} cols={5}>
          {memesData.memes.map((meme) => {
            return (
                <GridListTile key={meme.id} cols={meme.cols || 1}>
                  <img alt={meme.name} src={meme.url}/>
                </GridListTile>
            );
          })}
        </GridList>
    </div>
  );
};

export default Memes;
