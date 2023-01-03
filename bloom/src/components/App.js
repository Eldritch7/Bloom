
import "./App.css";
import react, { useState } from "react";
//images
import one from "../images/1.png";
import two from "../images/2.png";
import three from "../images/3.png";
import four from "../images/4.png";

function App() {
  const [image, setImage] = useState(0);
  const images = [one, two, three, four];
  const loopImage = function () {
    setImage(image === images.length - 1 ? 0 : image + 1);
  };
  return (
    <div className="App">
      <header className="Bloom-Header">
        <img src={images[image]} onClick={loopImage} className="image"></img>
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </header>
    </div>
  );
}

export default App;
