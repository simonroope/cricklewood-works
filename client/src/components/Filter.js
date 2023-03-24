import { useState, useContext } from 'react';
import { PartContext } from '../App.js';

const Filter = () => {

    const { allParts, setParts } = useContext(PartContext);

    const [ selectedCategory, setSelectedCategory ] = useState('select a Category')
    const [ selectedVehicle, setSelectedVehicle ] = useState('select a Vehicle')
    const [ selectedManufacturer, setSelectedManufacturer ] = useState('select a Manufacturer')

    const handleSelect = (event, category, vehicle, manufacturer) => {
 
      // Filters by category, vehicle or manufacturer. Future work would combine the three
      // selection crierias and also allow selection of multiple options from critera.

      event.preventDefault()
    
      if (category) {
        setParts(allParts.filter( part => part.part_category === event.target.value ))
        setSelectedCategory(event.target.value)
      }
      if (vehicle) {
        setParts(allParts.filter( part => part.part_vehicle === event.target.value ))
        setSelectedVehicle(event.target.value)
      }
      if (manufacturer) {
        setParts(allParts.filter( part => part.part_manufacturer === event.target.value ))
        setSelectedManufacturer(event.target.value)
      }
    }

    const clearFilter = () => {
        // reset filter selections and full database dataset
        setSelectedCategory('select a Category')
        setSelectedVehicle('select a Vehicle')
        setSelectedManufacturer('select a Manufacturer')
        setParts(allParts)
      }

    return (
  
      <div className="max-w-6xl mx-auto">
        <nav className="border-gray-200 px-2 mt-10 mb-5">
          <div className="container mx-auto flex flex-wrap items-center justify-between">

            <div className="flex justify-between">
  
              <button className="bg-red-400 text-white font-semibold py-1 px-4 rounded inline-flex items-center mr-2" onClick={() => clearFilter()}>
                Clear Filters
              </button>
   
              <div>
                <select name='categoryOptions' onChange={event => handleSelect(event, 'category')} value={selectedCategory} required className="mr-2 bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                  <option value=''>select a Category</option>
                  <option value="Carburetter">Carburetter</option>
                  <option value="Engine">Engine</option>
                  <option value="Instrument">Instrument</option>
                  <option value="Fittings">Fittings</option>
                  <option value="Steering">Steering</option>
                </select>
              </div>

              <div>
                <select name='vehicleOptions' onChange={event => handleSelect(event, null, 'vehicle')} value={selectedVehicle} required className="mr-2 bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                  <option value=''>select a Vehicle</option>
                  <option value="Bentley">Bentley</option>
                  <option value="Jaguar">Jaguar</option>
                  <option value="Lagonda">Lagonda</option>
                  <option value="MG">MG</option>
                </select>
              </div>

              <div>
                <select name='manufacturerOptions' onChange={event => handleSelect(event, null, null, 'manufacturer')} value={selectedManufacturer} required className="mr-2 bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                  <option value=''>select a Manufacturer</option>
                  <option value="Burmen">Burmen</option>
                  <option value="Fray">Fray</option>
                  <option value="Smiths">Smiths</option>
                  <option value="SU">SU</option>
                </select>
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

    );
  }
    
  export default Filter;