import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PartContext } from '../App.js';

import { updatePartWishStatus } from '../utils/partService.js';

import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Part = ({ singlePart }) => {

  const { part, setPart } = useContext(PartContext);
  const [ wishStatus, setWishStatus ] = useState(false);

  const baseUrl = 'https://ipfs.io/ipfs/';

  const navigate = useNavigate();

  const showPartDetailsHandler = () => {
    setPart(singlePart);
    navigate('/partdetail');
  }

  const wishListHandler = () => {
    updatePartWishStatus(singlePart.id, !singlePart.wish_status);
    setWishStatus(!wishStatus);
  }

  useEffect(() => {
    //const init = async () => {
      setWishStatus(singlePart.wish_status);
    //}
    //  init()
  }, [])

  return (

    <div className="rounded shadow-lg">

      <div className="relative aspect-square">
        <img className="block w-full h-full object-cover object-center hover:opacity-50 hover: cursor-pointer" 
             src={`${baseUrl}${singlePart.part_photo_1}`}
             alt={singlePart.part_short_name} title={singlePart.part_short_name} 
             onClick={showPartDetailsHandler}/>  

          <div className="absolute bottom-0 right-0">
          <IconButton
            onClick={wishListHandler}
            color={wishStatus ? "error" : "inherit"}
          >
            {wishStatus ? <FavoriteIcon fontSize="large"/> : <FavoriteBorderIcon fontSize="large"/>}
          </IconButton>
          </div>
      </div>
   
      <div className="">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{singlePart.part_short_name}</div>
          <p className="text-gray-700 text-base">
            {singlePart.part_long_name}
          </p>
        </div>
        <div className="flex justify-around px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{singlePart.part_category}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{singlePart.part_vehicle}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{singlePart.part_manufacturer}</span>
        </div>
        <div className="flex content-end justify-center px-6 pt-4 pb-2">
          <button className="bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={showPartDetailsHandler}>Show More</button>
          <button className="bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Buy</button>
        </div>
      </div>
  
    </div>
  
  )

}
  
export default Part;