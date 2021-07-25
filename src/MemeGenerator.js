import React, { useState, useEffect } from "react";

function MemeGenerator() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg");
  const [allImages,setAllImages] = useState([]);
  const handleTopText = (e) => {
      const {name,value} = e.target;
      setTopText(value);
  }
  const handleBottomText = (e) => {
    const {name,value} = e.target;
    setBottomText(value);
}
useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(res=>{
       const {memes} = res.data;
       setAllImages(memes);
    })
    .catch(err=>console.log(err))
}, []);
const handleSubmit = (e) => {
    e.preventDefault();
    const randomNum = Math.floor(Math.random()*allImages.length);
    console.log(randomNum);
    const randomImg = allImages[randomNum].url;
    console.log(randomImg);
    setRandomImg(randomImg);
}
  return (
    <div className="mainDiv">
      <form className="form-meme" onSubmit={(e)=>handleSubmit(e)}>
        <input
          type="text"
          name="toptext"
          placeholder="Top text"
          value={topText}
          onChange={(e) => handleTopText(e)}
        />
        <input
          type="text"
          name="bottomtext"
          placeholder="Bottom text"
          value={bottomText}
          onChange={(e) => handleBottomText(e)}
        />
        <button>Generate</button>
      </form>
      <div className="meme">
        <img src={randomImg} className="meme-img" />
        <h2 className="top">{topText}</h2>
        <h2 className="bottom">{bottomText}</h2>
      </div>
    </div>
  );
}

export default MemeGenerator;
