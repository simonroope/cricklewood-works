const baseURL = 'http://localhost:3001';

export const getParts = async () => {
  try {
    const result = await fetch(`${baseURL}/parts`);
    const resultData = await result.json();
    return resultData;
  } catch (error) {
    console.log('Error: Service - getParts: ', error);
  }
};

export const getPartDetails = async (partId) => {
    try {
      const result = await fetch(`${baseURL}/partdetails/${partId}`);
      const resultData = await result.json();
      //console.log('result: ', resultData);
      return resultData;
    } catch (error) {
      console.log('Error: Service - getPartDetails: ', error);
    }
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