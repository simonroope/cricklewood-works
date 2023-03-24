import Part from './Part';

const PartList = ({ parts }) => {

  return (
 
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {parts.map((singlePart, idx) => <Part singlePart={singlePart} key={idx} />)}
    </div>

  );

}

export default PartList;