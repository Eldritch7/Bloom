//imports
import react, {useState} from "react";

//images
import one from "../images/Resizing.jpg";
import two from "../images/Resizing 2.jpg";
import three from "../images/Resizing 3.jpg";
import four from "../images/Resizing 4.jpg";
import five from "../images/Resizing 5.jpg";


//Component swaps through images on click
export default function Plant1() {
  const getImageArray = function () {
    let images = [];
    return images;
  }
  
  const [image, setImage] = useState(0);
  const images = [one, two, three, four, five];
  //fuction to loop the image
  const loopImage = function () {
    setImage(image === images.length - 1 ? 0 : image + 1);
  };
return (
  <img src={images[image]} onClick={loopImage} className="image"></img>

);

}