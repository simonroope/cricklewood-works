import { useContext } from 'react';
import { PartContext } from '../App.js';

const Part = ({ singlePart }) => {

  const { setPart, part } = useContext(PartContext);

  const baseUrl = 'https://ipfs.io/ipfs/';

  const showPartDetailsHandler = () => {
    console.log('Show Part Details Button part id:', singlePart.id);
    setPart(singlePart);
    console.log('PART: ', part)
  }

  return (

    <div className="rounded shadow-lg">

      <button className="aspect-square">
        <img className="w-full h-full object-cover object-center hover:opacity-50" 
             src={`${baseUrl}${singlePart.part_photo_1}`}
             alt={singlePart.part_short_name} title={singlePart.part_short_name} 
             onClick={showPartDetailsHandler}/>
      </button>
   
      <div className="">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{singlePart.part_short_name}</div>
          <p className="text-gray-700 text-base">
            {singlePart.part_long_name}
          </p>
        </div>
        <div className="flex justify-around px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
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