import { useContext } from 'react';
import { PartContext } from '../App.js';

const Filter = () => {

    const { allParts, parts, setParts } = useContext(PartContext);

    let categoryParts = [];
    let vehicleParts = [];
    let manufacturerParts = [];

    const onClickHandler = (category, vehicle, manufacturer) => {

      if (category) {
        console.log(category)
        categoryParts = allParts.filter( part => part.part_category === category );
      }
      if (vehicle) {
        console.log(vehicle)
        vehicleParts = allParts.filter( part => part.part_vehicle === vehicle );
      }
      if (manufacturer) {
        console.log(manufacturer)
        manufacturerParts = allParts.filter( part => part.part_manufacturer === manufacturer );
      }

      setParts([...categoryParts, ...vehicleParts, ...manufacturerParts])
      console.log('parts filtered: ', parts);

    }

    const clearFilter = () => {
        // reset to full database set
        setParts(allParts)
      }

    return (
    
    <>

      <div className="max-w-4xl mx-auto">
        <nav className="border-gray-200 px-2 m-10">
          <div className="container mx-auto flex flex-wrap items-center justify-around">

            <div className="flex justify-between">
  
              <button className="bg-red-400 text-white font-semibold py-2 px-4 rounded inline-flex items-center mr-2" onClick={() => clearFilter()}>
                Clear Filters
              </button>
   
              <div className="dropdown inline-block relative mr-2">
                <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                  <span className="mr-1">Category</span>
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                  <li className=""><button className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => onClickHandler('Carburetter')}>Carburetter</button></li>
                  <li className=""><button className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => onClickHandler('Engine')}>Engine</button></li>
                  <li className=""><button className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => onClickHandler('Instrument')}>Instrument</button></li>
                  <li className=""><button className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => onClickHandler('Motif')}>Motif</button></li>
                  <li className=""><button className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => onClickHandler('Steering')}>Steering</button></li>
                </ul>
              </div>

              <div className="dropdown inline-block relative mr-2">
                <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                  <span className="mr-1">Vehicle</span>
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                  <li className=""><button className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => onClickHandler(null,'Aston Martin')}>Aston Martin</button></li>
                  <li className=""><button className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => onClickHandler(null,'Jaguar')}>Jaguar</button></li>
                  <li className=""><button className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => onClickHandler(null,'Lagonda')}>Lagonda</button></li>
                  <li className=""><button className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => onClickHandler(null,'MG')}>MG</button></li>
                </ul>
              </div>

              <div className="dropdown inline-block relative">
                <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                  <span className="mr-1">Manufacturer</span>
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                  <li className=""><button className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => onClickHandler(null,null,'Derrington')}>Derrington</button></li>
                  <li className=""><button className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => onClickHandler(null,null,'Fray')}>Fray</button></li>
                  <li className=""><button className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => onClickHandler(null,null,'Smiths')}>Smiths</button></li>
                  <li className=""><button className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => onClickHandler(null,null,'SU')}>SU</button></li>
                  <li className=""><button className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => onClickHandler(null,null,'SU')}>SU</button></li>
                </ul>
              </div>

            </div>

            <div className="relative mx-auto text-gray-600 lg:block hidden">
              <input
                  className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                  type="search" name="search" placeholder="Search..."/>
                  <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
                    <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512">
                      <path
                        d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/>
                    </svg>
                  </button>
            </div>
    
          </div>
        </nav>
      </div>
    
      <div className="flex justify-center">
        <div>Categories</div>
              <div>
              <form id="ChkBx-form">
                <label> <input type="checkbox" name="Carburetter" />Carburetter</label>
                <label> <input type="checkbox" name="Engine" />Engine</label>
                <label> <input type="checkbox" name="Instrument" />Instrument</label>
                <label> <input type="checkbox" name="Motif" />Motif</label>
                <label> <input type="checkbox" name="Steering" />Steering</label>
              </form>
              </div>
            </div>

</>

      );
    }
    
    export default Filter;