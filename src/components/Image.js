import React from 'react';
import reactImage from '../assets/images/react.png';

// storing details of image in an object
const imageDetails={
    imageUrl: reactImage,
    imageHeight: 200,
    imageWidth: 300
};

const Image = () => {
  return (
    <div>
        {/* getting details of image through JSX rendering*/}
        <img 
            src={imageDetails.imageUrl} 
            alt="react"  
            style={
                {
                    height: imageDetails.imageHeight, 
                    width: imageDetails.imageWidth
                }
            }
        />
    </div>
  )
};

export default Image;