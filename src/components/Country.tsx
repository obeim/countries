import { country } from "../types";
import { Link } from "react-router-dom";
const Country = ({
  name,
  capital,
  population,
  flag,
  region,
  alpha3Code,
}: country) => {
  return (
    <Link
      to={`/${alpha3Code}`}
      className='h-96 bg-secondary sm:w-full w-10/12 shadow-lg  rounded-lg overflow-hidden transition duration-200'
      style={{ maxWidth: "300px" }}
    >
      <div className='h-3/6'>
        <img src={flag} alt='' className=' w-full h-full object-cover ' />
      </div>
      <div className='p-5'>
        <h1 className=' font-bold text-lg mb-4'>{name}</h1>
        <h2 className='text-sm mt-1  text-xs '>
          <span className='font-semibold '>Population : </span>
          {population}
        </h2>
        <h2 className='text-sm mt-1 text-xs'>
          <span className='font-semibold'>Region : </span>
          {region}
        </h2>
        <h2 className='text-sm mt-1 text-xs'>
          <span className='font-semibold'>Captial : </span>
          {capital}
        </h2>
      </div>
    </Link>
  );
};

export default Country;
