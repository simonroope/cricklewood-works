import Part from './Part';

const PartList = ({ parts, setPart }) => {

  return (
 
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {parts.map((part) => <Part part={part} setPart={setPart} key={part.id} />)}
    </div>

  );

}

export default PartList;