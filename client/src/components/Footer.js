const Footer = () => {

  return (

    <div className=" bg-gray-900">
      <div className="max-w-2xl mx-auto text-white py-1">
        <div className="mt-4 mb-2 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; Fantastic Mr Roope, 2023. </p>
          <div className="order-1 md:order-2">
            <span className="px-2">About us</span>
            <span className="px-2 border-l">Contact us</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;