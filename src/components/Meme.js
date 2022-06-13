import React from 'react';
import memesData from '../data/memesData';

const Meme = () => {
  const [memeImage, setMemeImage] = React.useState("")

  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomNumber].url)
  }

  return (
    <main>
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
      <img src={memeImage} alt='a generated meme' id='meme--img' />
    </main>
  )
}

export default Meme;