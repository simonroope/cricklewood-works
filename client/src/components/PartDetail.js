import { useState, useEffect, useContext } from 'react';
import { PartContext } from '../App.js';

import { getPartDetails } from '../utils/partService.js';

import ImageGallery from 'react-image-gallery';


const PartDetail = () => {

  const { part } = useContext(PartContext);

  const baseUrl = 'https://ipfs.io/ipfs/';

  const [images, setImages] = useState([]);

  console.log('PartDetails part: ', part.part_short_name);

  useEffect(() => {
    const init = async () => {

      // Retrive details of part from db
      const details = await getPartDetails(part.id);
      console.log('details: ', details);
      
      // Unpack image hashes from db column
      const detailImages = details[0].part_photos.split(',')
      //console.log('detailImages: ', detailImages);
     
      // Format data required by image gallery
      // {
      //  original: 'https://picsum.photos/id/1018/1000/600/',
      //  thumbnail: 'https://picsum.photos/id/1018/250/150/',
      // },
      // Requires assignment to local variable as useState state variable is not updated before div is rendered => undefined 
      // setImages( detailImages.map(url => ({ original: `${baseUrl}${url}`, thumbnail: `${baseUrl}${url}` })))
      const galleryImages = detailImages.map(url => ({ original: `${baseUrl}${url}`, thumbnail: `${baseUrl}${url}` }));
    
      setImages(galleryImages) 
      //console.log('images: ', images);
     
    }

    init()
  }, [part])

  return (

    <div className="flex p-10">
      <div className="w-1/2">
        <ImageGallery items={ images } />
      </div>
      <div className="w-1/3 m-5">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{part.part_short_name}</div>
          <p className="text-gray-700 text-base">
            {part.part_long_name}
          </p>
        </div>
      </div>
    </div>

  );

}

export default PartDetail;






