import { useState } from "react";



function App() {

  
  const images = [
    "https://tse4.mm.bing.net/th/id/OIP.Kgb00CppWEx3SyjucN8_JQHaEo?pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th/id/OIP.rFQ0FQRYju3WUf-Gfx75SQHaEK?pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th/id/OIP.0EOvrbSJTVbHm43rNbhU3wHaEK?pid=Api&P=0&h=180"
  ]
  
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);

  const next = () => setIndex((index + 1) % images.length);

  return (
    <>
      <div className="img-slider">
        <h1>Image Slider</h1>
        <img src={images[index]} alt="image-here" />
        <div className="slider-btn">
            <button onClick={prev}>left</button>
            <button onClick={next}>right</button>
        </div>
      </div>
    </>
  )
}

export default App