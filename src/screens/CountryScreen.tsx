import { Link, RouteComponentProps } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BsArrowLeft } from "react-icons/bs";
import { country } from "../types";
import Spinner from "../components/Spinner";
interface Params {
  code: string;
}

const CountryScreen = ({ match, history }: RouteComponentProps<Params>) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [country, setCountry] = useState<country | null>(null);

  useEffect(() => {
    async function fetchCountry() {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://restcountries.eu/rest/v2/alpha/${match.params.code}?fields=name;nativeName;population;flag;region;subregion;capital;borders;topLevelDomain;currencies;languages`
        );
        setCountry(response.data);
        setLoading(false);
      } catch (err) {
        let result = err as Error;
        setLoading(false);
        setCountry(null);
        console.log(result.message);
      }
    }
    fetchCountry();
  }, [match.params.code]);

  return (
    <div className='mt-10'>
      <button
        onClick={() => history.goBack()}
        className='px-4 py-1 shadow-lg  bg-secondary flex items-center gap-2 rounded'
      >
        <BsArrowLeft />
        <span>Back</span>
      </button>
      {loading ? (
        <Spinner />
      ) : (
        <div className='mt-5 flex md:flex-row flex-col  gap-10 items-start '>
          <img
            src={country?.flag}
            alt=''
            className='md:w-5/12 w-full h-full object-cover'
          />
          <div className='flex flex-col gap-5'>
            <div className='flex sm:flex-row flex-col  md:items-center sm:gap-20 align-self-start'>
              <div>
                <h1 className='md:text-4xl text-xl font-bold mb-10'>
                  {country?.name}
                </h1>
                <h2 className='md:text-base text-xs my-2'>
                  <span className='font-semibold '>Native Name: </span>
                  {country?.nativeName}
                </h2>
                <h2 className='md:text-base text-xs my-2'>
                  <span className='font-semibold'>Population: </span>
                  {country?.population}
                </h2>
                <h2 className='md:text-base text-xs my-2'>
                  <span className='font-semibold'>Region: </span>
                  {country?.region}
                </h2>
                <h2 className='md:text-base text-xs my-2'>
                  <span className='font-semibold'>Sub Region: </span>
                  {country?.subregion}
                </h2>
                <h2 className='md:text-base text-xs my-2'>
                  <span className='font-semibold'>Capital: </span>
                  {country?.capital}
                </h2>
              </div>
              <div className='mt-4'>
                <h2 className='md:text-base text-xs my-2'>
                  <span className='font-semibold'>Top level Domain: </span>
                  {country?.topLevelDomain}
                </h2>
                <h2 className='md:text-base text-xs my-2'>
                  <span className='font-semibold'>currencies: </span>
                  {country?.currencies?.map((currencie) => (
                    <span>{currencie.name} ,</span>
                  ))}
                </h2>
                <h2>
                  <span className='font-semibold'>languages: </span>
                  {country?.languages?.map((language) => (
                    <span>{language.name},</span>
                  ))}
                </h2>
              </div>
            </div>
            <div>
              {" "}
              <h1 className='inline-block'>Borders Countries :</h1>{" "}
              <div className='flex flex-wrap gap-2'>
                {country?.borders?.map((border) => {
                  return (
                    <Link
                      to={`/${border}`}
                      className='px-6  shadow-lg  bg-secondary  inline-block  rounded'
                    >
                      {border}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryScreen;
