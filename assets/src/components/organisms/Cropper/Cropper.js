import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import image from '../../../assets/images/super.jpg';
import { ViewWrapper } from '../../molecules/ViewWrapper/ViewWrapper';
import { Button } from '../../atoms/Button/Button';
function Cropper({ src }) {
  const [crop, setCrop] = useState({
    unit: 'px',
    x: 25,
    y: 25,
    width: 50,
    height: 50,
  });

  const setCropBox = (c) => {
    setCrop(c);
  };
  return (
    <ViewWrapper>
      <h1>Cropper</h1>
      <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
        <img src={image} />
      </ReactCrop>
      <Button
        isBig
        onClick={() =>
          setCropBox({
            unit: 'px',
            x: 25,
            y: 25,
            width: 300,
            height: 50,
          })
        }
      >
        Set
      </Button>
      <h2>
        width: {crop.width} - height: {crop.height} {crop.unit}
      </h2>
      <h2>
        x: {crop.x} - y: {crop.y}
      </h2>
    </ViewWrapper>
  );
}

export default Cropper;
