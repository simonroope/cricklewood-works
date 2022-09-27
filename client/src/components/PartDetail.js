import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { PartContext } from '../App.js';

import { getPartDetails } from '../utils/partService.js';

import ImageGallery from 'react-image-gallery';

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Button from "@mui/material/Button";


const PartDetail = () => {

  const navigate = useNavigate();
  const { part } = useContext(PartContext);

  const baseUrl = 'https://ipfs.io/ipfs/';

  const [images, setImages] = useState([]);

  useEffect(() => {
    const init = async () => {

      // Retrive additional details of part from db
      const details = await getPartDetails(part.id);
      
      // Unpack image hashes from db column
      const detailImages = details[0].part_photos.split(',')
     
      // Data format required by image gallery
      // {
      //  original: 'https://picsum.photos/id/1018/1000/600/',
      //  thumbnail: 'https://picsum.photos/id/1018/250/150/',
      // },
      // Requires assignment to local variable as useState state variable is not updated before div is rendered => undefined 
      // setImages( detailImages.map(url => ({ original: `${baseUrl}${url}`, thumbnail: `${baseUrl}${url}` })))
      const galleryImages = detailImages.map(url => ({ original: `${baseUrl}${url}`, thumbnail: `${baseUrl}${url}` }));
    
      setImages(galleryImages)
     
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
          <div className="font-bold text-2xl mb-2">{part.part_short_name}</div>
          <p className="text-gray-700 text-lg mb-2">
            {part.part_long_name}
          </p>
          <div className="flex justify-start">
            <div className="mt-10">
              <Button onClick={() => navigate(-1)} fontSize="large" variant="outlined" startIcon={<ArrowCircleLeftIcon />}>
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );

}

export default PartDetail;