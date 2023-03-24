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

  const baseUrl = 'https://cricklewoodworks.com/';

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
            //  src={`${baseUrl}${singlePart.category}/${singlePart.type}/${singlePart.photos[0]}`}
             alt={singlePart.title} title={singlePart.title} 
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
   
      <div className="relative">
        <div className="text-center px-6 py-4">
          <p className="font-bold text-xl mb-2">{singlePart.title}</p>
          <p className="">{singlePart.price}</p>
        </div>
        <div className="">
          <div className="flex justify-around px-6 py-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{singlePart.marque}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{singlePart.category}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{singlePart.manufacturer}</span>
          </div>
          <div className="flex content-end justify-center px-6 pt-4 pb-2">
            <button className="bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={showPartDetailsHandler}>Show More</button>
          </div>
        </div>
      </div>
  
    </div>
  
  )
}
  
export default Part;