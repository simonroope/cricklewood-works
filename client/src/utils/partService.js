const baseURL = 'https://cricklewoodworks.com/partsXK.json';

const partsXK = require('../assets/partsXK.json')

//console.log('XK: ', partsXK)

export const getParts = async () => { return partsXK }

// export const getParts = async () => {
//   try {
//     const result = await fetch(`${baseURL}/parts`);
//     const resultData = await result.json();
//     return resultData;
//   } catch (error) {
//     console.log('Error: Service - getParts: ', error);
//   }
// };

export const updatePartWishStatus = (partId, status) => {  
  console.log('Service - updatePartWishStatus: ', partId, status)
  return fetch(`${baseURL}/parts/${partId}/${status}`, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ id: partId, wish_status: status })
  }).then((result) => result.json())
    .catch(error => console.log('Error: Service - postPart: ', partId, ' - ', status))
};

export const postPart = (part) => {  
  console.log('Service - postPart: ', part)
  return fetch(`${baseURL}/parts`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(part)
  }).then((result) => result.json())
    .catch(error => console.log('Error: Service - postPart: ', part))
};

//export const sortParts = (arr) => arr.sort((a, b) => new Date(a.date) - new Date(b.date));
export const sortParts = (arr) => arr.sort((a, b) => a.part_short_desc - b.part_short_desc);