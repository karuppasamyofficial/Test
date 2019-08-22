import React from "react";
import ImagelistCSS from '../ImagelistCSS.css';

const ImageList=(props)=>{
    const images = props.images.map(({ description, id, urls})=>{
       return <img alt={description} key={id} src={urls.regular} />;

    });
    return (
      <div>
          Imagelist
        <div  className="image-list">{images}</div>
      </div>
    );
}

export default ImageList;