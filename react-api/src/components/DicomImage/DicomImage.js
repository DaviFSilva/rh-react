import './DicomImage.css';
import { React, useEffect, useState } from "react";
import setupIL from "helpers/setupImageLoader";
import setupCS from "helpers/setupCornerStone";
import createImage from "helpers/createImage";
import { rotateImage, toggleCrosshair } from "helpers/commands";
import 'materialize-css';
import { Button } from 'react-materialize';

export default function DicomImage() {
  const [imageState, setimageState] = useState(false);

  async function handleImage(){
    await createImage()
    setimageState(true)
  }

  useEffect(() => {
    setupCS()
    setupIL()
  }, []);

  return (
    <>
        <div className="container">
          <div id="buttonsContainer">
            <Button disabled={imageState} node="button" style={{ marginRight: '5px' }} id="imageButton" onClick={handleImage}>Select image</Button>
            <Button disabled={!imageState} node="button" style={{ marginRight: '5px' }} id="rotateButton" onClick={rotateImage}>Rotate image</Button>
            <Button disabled={!imageState} node="button" style={{ marginRight: '5px' }} id="crosshairButton" onClick={toggleCrosshair}>crosshair</Button>
          </div>
          <div id="imageContainer" style={{ width: '512px', height: '512px', backgroundColor: 'black' }}>
          </div>
        </div>
    </>
  );
}