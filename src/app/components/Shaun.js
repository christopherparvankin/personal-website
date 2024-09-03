import React, { useState, useEffect } from 'react';
import '../styles/Shaun.css';
import Song from '../assets/proffygad.mp3';
import Sheep from '../assets/dancing-icegif-1.gif';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';

function Shaun() {
  const [shaunBool, setShaunBool] = useState(false);
  const [audio] = useState(new Audio(Song));

  useEffect(() => {
    if (shaunBool) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0; 
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [shaunBool, audio]);

  const handleButtonClick = () => {
    setShaunBool(prevShaunBool => !prevShaunBool); 
  };

  return (
    <div className='sbody'>

      
      <div onClick={handleButtonClick} className="click">
        {shaunBool ? <PauseCircleOutlineIcon className="s_b"/> : <PlayCircleOutlineIcon className="s_b"/>}
        {shaunBool}
      </div>
      {shaunBool && <img src={Sheep} alt="Dancing Sheep" className="dancingShaun" />}
    </div>
  );
}

export default Shaun;
