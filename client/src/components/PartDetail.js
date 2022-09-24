import { useState, useEffect } from 'react';

import { getPartDetails } from '../utils/partService.js';

import ImageGallery from 'react-image-gallery';


const PartDetail = ({ part, setPart }) => {

  const baseUrl = 'https://ipfs.io/ipfs/';

  const [images, setImages] = useState([]);

  let xx;
  const imgDefault = [ { original: '', thumbnail: '' } ]

  const imgTest = [
    {
      original: `${baseUrl}bafkreibaap3gv7cx2pgqyvpz3ag556hki4nkdvgb2ma2zafsii3dwb4niy`,
      thumbnail: `${baseUrl}bafkreibaap3gv7cx2pgqyvpz3ag556hki4nkdvgb2ma2zafsii3dwb4niy`
    },
    {
      original: `${baseUrl}bafkreih7u5yo2ypqrficaa5tvujn7ni34g26jhav43w2avabrjchrk53dq`,
      thumbnail: `${baseUrl}bafkreih7u5yo2ypqrficaa5tvujn7ni34g26jhav43w2avabrjchrk53dq`
    },
    {
      original: `${baseUrl}bafkreiesxfgdcddmldtrfcl5c2oqo2gc6xgjrexspzllovhcwgafngo2qe`,
      thumbnail: `${baseUrl}bafkreiesxfgdcddmldtrfcl5c2oqo2gc6xgjrexspzllovhcwgafngo2qe`
    },
    {
      original: `${baseUrl}bafybeidn6jpu36o57k75vq354glhfk3a3iiawggvuwufxq26r6i65dxwim`,
      thumbnail: `${baseUrl}bafybeidn6jpu36o57k75vq354glhfk3a3iiawggvuwufxq26r6i65dxwim`
    },
    {
      original: `${baseUrl}bafkreig3mddorcfckcm77nywwaihyr3g2vn3vgjg3m5gsmyncrl55lsp7q`,
      thumbnail: `${baseUrl}bafkreig3mddorcfckcm77nywwaihyr3g2vn3vgjg3m5gsmyncrl55lsp7q`
    },
  ];
  console.log('imgTest: ', imgTest);

  console.log('part: ', part);

  useEffect(() => {
    const init = async () => {

      const details = await getPartDetails(12);
      //console.log('details: ', details);
      
      // const detailImages = details.map(e => e.part_photos); 
      const detailImages = details[0].part_photos.split(',')
      //console.log('detailImages: ', detailImages);
     
      xx = detailImages.map(url => ({ original: `${baseUrl}${url}`, thumbnail: `${baseUrl}${url}` }));
      console.log('xx: ', xx);
      
      setImages( detailImages.map(url => ({ original: `${baseUrl}${url}`, thumbnail: `${baseUrl}${url}` })))
      console.log('images: ', images);
    }

    init()
  }, [])

  return (

    <div className="flex p-10">
      <div className="w-1/2">
        <ImageGallery items={ imgTest } />
      </div>
      <div className="w-1/3 m-5">
        PartDetail Text
      </div>
    </div>

  );

}

export default PartDetail;






