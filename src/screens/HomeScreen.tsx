import Select from "../components/Select";
import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect, useCallback } from "react";
import { country } from "../types";
import Countrys from "../components/Countrys";
import Spinner from "../components/Spinner";
import axios from "axios";
const HomeScreen = () => {
  const [region, setRegion] = useState<string | null>();
  const [countrys, setCountrys] = useState<Array<country>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string | null>(null);

  const select = (value: string) => {
    setRegion(value);
  };
  const selectItems = [
    { name: "Africa", value: "Africa" },
    { name: "Americas", value: "Americas" },
    { name: "Asia", value: "Asia" },
    { name: "Europe", value: "Europe" },
    { name: "Oceania", value: "Oceania" },
  ];
  const fetch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://restcountries.eu/rest/v2/all?fields=name;capital;population;region;flag;alpha3Code"
      );
      setCountrys(response.data);
      setLoading(false);
    } catch (err) {
      let result = err as Error;
      setLoading(false);
      console.log(result.message);
    }
  };
  const fetchByRegion = useCallback(async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://restcountries.eu/rest/v2/region/${region}?fields=name;capital;population;region;flag;alpha3Code`
      );
      setCountrys(response.data);
      setLoading(false);
    } catch (err) {
      let result = err as Error;
      setLoading(false);
      console.log(result.message);
    }
  }, [region]);
  const Search = useCallback(async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://restcountries.eu/rest/v2/name/${search}`
      );
      setCountrys(response.data);
      setLoading(false);
    } catch (err) {
      let result = err as Error;
      setLoading(false);
      setCountrys([]);
      console.log(result.message);
    }
  }, [search]);
  useEffect(() => {
    fetch();
  }, []);
  useEffect(() => {
    if (region != null) {
      fetchByRegion();
    } else {
      fetch();
    }
  }, [region, fetchByRegion]);

  useEffect(() => {
    if (search !== null && search !== "") {
      Search();
    } else {
      fetch();
    }
  }, [search, Search]);

  return (
    <div>
      <div
        id='filter'
        className='mt-10 flex md:flex-row flex-col justify-between md:items-center  '
      >
        <div className='relative  md:w-5/12 sm:w-11/12 w-full '>
          <AiOutlineSearch className='absolute top-4 sm:left-7 left-4' />
          <input
            type='search'
            className='bg-secondary  transition duration-200 outline-none py-3 sm:px-20 px-10 w-full rounded shadow focus:shadow-lg'
            placeholder='Search for a Country'
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div style={{ width: "200px" }} className='md:m-0 mt-7'>
          <Select
            title='Filter by Reigon'
            items={selectItems}
            select={select}
          />
        </div>
      </div>
      <div className='mt-8 '>
        {loading ? <Spinner /> : <Countrys countrys={countrys} />}
      </div>
    </div>
  );
};

export default HomeScreen;
