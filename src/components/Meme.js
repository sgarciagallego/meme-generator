import React from 'react';
import memesData from '../data/memesData';

const Meme = () => {
  let url;

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    
    console.log(url);
  }

  return (
    <main>
      <p>{url}</p>
      <div className='form'>
        <input 
          type='text'
          placeholder='top text'
          className='form--input'
        />
        <input 
          type='text'
          placeholder='bottom text'       
          className='form--input'
        />
        <button 
          className='form--button'
          onClick={getMemeImage}
        >
          Get a new image 🌠
        </button>
      </div>
      <div className='meme--container'>
        <img src='' alt='a generate meme' id='meme--img' />
      </div>
    </main>
  )
}

export default Meme;