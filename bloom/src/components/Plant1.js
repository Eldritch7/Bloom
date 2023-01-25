//imports
import react, {useState} from "react";

//images
import one from "../images/1.png";
import two from "../images/2.png";
import three from "../images/3.png";
import four from "../images/4.png";

//Component swaps through images on click
export default function Plant1() {
  const [image, setImage] = useState(0);
  const images = [one, two, three, four];
  //fuction to loop the image
  const loopImage = function () {
    setImage(image === images.length - 1 ? 0 : image + 1);
  };
return (
  <img src={images[image]} onClick={loopImage} className="image"></img>

);

}