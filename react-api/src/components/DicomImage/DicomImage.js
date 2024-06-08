import './DicomImage.css';
import { React, useState } from "react";
import createImage from "helpers/createImage";
import { rotateImage, toggleCrosshair } from "helpers/commands";
import 'materialize-css';
import { Button } from 'react-materialize';

export default function DicomImage() {
  const [imageState, setimageState] = useState(false);

  async function handleImage(){
    setimageState(true)
    createImage()
  }

  return (
    <>
      <div id="contentContainer">
        <div id="buttonsContainer">
          <Button disabled={imageState} node="button" style={{ marginRight: '5px' }} id="imageButton" onClick={handleImage}>Select image</Button>

          <Button disabled={!imageState} node="button" style={{ marginRight: '5px' }} id="rotateButton" 
          onClick={() => {try{rotateImage()} catch(error){console.log('Espere a imagem carregar!')}}}>
            Rotate image
          </Button>
          
          <Button disabled={!imageState} node="button" style={{ marginRight: '5px' }} id="crosshairButton" 
          onClick={() => {try{toggleCrosshair()} catch(error){console.log('Espere a imagem carregar!')}}}>
            crosshair
          </Button>
        </div>
        <div id="imageContainer" style={{ width: '512px', height: '512px', backgroundColor: 'black' }}></div>
      </div>
    </>
  );
}