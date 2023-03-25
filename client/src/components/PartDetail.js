import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { PartContext } from '../App.js';

import ImageGallery from 'react-image-gallery';

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Button from "@mui/material/Button";


const PartDetail = () => {

  const navigate = useNavigate();
  const { part } = useContext(PartContext);

  const baseUrl = 'https://cricklewoodworks.com/photos/';

  const [images, setImages] = useState([]);

  useEffect(() => {
    const init = async () => {

      // Data format required by image gallery
      // {
      //  original: 'https://picsum.photos/id/1018/1000/600/',
      //  thumbnail: 'https://picsum.photos/id/1018/250/150/',
      // }
      
      const url = `${baseUrl}${part.category.toLowerCase()}/${part.type.toLowerCase().replace(' ','-')}/`

      setImages(part.photos.map(jpg => ({ original: `${url}${jpg}`, thumbnail: `${url}${jpg}` })))
    }

    init()
  }, [part])

  return (

    <div className="flex p-10">
      <div className="w-1/2">
        <ImageGallery items={ images } showBullets={ true }/>
      </div>
      <div className="">
        <div className="p-10">
          <p className="font-bold text-2xl mb-2">{part.marque} {part.title}</p>
          <p className="font-semibold text-xl mb-2">Original {part.manufacturer} part no: {part.partno}</p>
          <p className="font-semibold text-xl mb-2">{part.price}</p>
          <p className="text-gray-700 text-lg mb-2">{part.desc}</p>
          <div className="flex justify-start mt-10">
            <Button onClick={() => navigate(-1)} fontSize="large" variant="outlined" startIcon={<ArrowCircleLeftIcon />}>
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default PartDetail;