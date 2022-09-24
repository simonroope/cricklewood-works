import { useState, useEffect } from 'react';

import { getPartDetails } from '../utils/partService.js';

import ImageGallery from 'react-image-gallery';


const PartDetail = ({ part, setPart }) => {

  const baseUrl = 'https://ipfs.io/ipfs/';

  const [images, setImages] = useState([]);

  console.log('part: ', part);

  useEffect(() => {
    const init = async () => {

      const details = await getPartDetails(9);
      //console.log('details: ', details);
      
      const detailImages = details[0].part_photos.split(',')
      //console.log('detailImages: ', detailImages);
     
      // Requires assignment to local variable as useState state variable is not updated before div is rendered => undefined 
      // setImages( detailImages.map(url => ({ original: `${baseUrl}${url}`, thumbnail: `${baseUrl}${url}` })))
      const galleryImages = detailImages.map(url => ({ original: `${baseUrl}${url}`, thumbnail: `${baseUrl}${url}` }));
    
      setImages(galleryImages) 
      //console.log('images: ', images);
     
    }

    init()
  }, [])

  return (

    <div className="flex p-10">
      <div className="w-1/2">
        <ImageGallery items={ images } />
      </div>
      <div className="w-1/3 m-5">
        PartDetail Text
      </div>
    </div>

  );

}

export default PartDetail;






