import { country } from "../types";
import Country from "./Country";

interface props {
  countrys: Array<country>;
}
const Countrys = ({ countrys }: props) => {
  return (
    <div>
      {countrys.length > 0 ? (
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-10  transition duration-200  '>
          {countrys.map((country, index) => {
            return (
              <Country
                key={index}
                name={country.name}
                capital={country.capital}
                population={country.population}
                flag={country.flag}
                region={country.region}
                alpha3Code={country.alpha3Code}
              />
            );
          })}
        </div>
      ) : (
        <div className='text-center text-gray-600 text-xl'>No Items Found</div>
      )}
    </div>
  );
};

export default Countrys;
