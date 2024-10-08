/* eslint-disable react/prop-types */
import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { url, geoApiOptions } from "../../api";
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${url}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((Response) => Response.json())
      .then((Response) => {
        return {
            options:Response.data.map((city)=>{
                return {
                    value: `${city.latitude} ${city.longitude}` ,
                    label:`${city.name}, ${city.countryCode}` ,
                }

            })
        }
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    ></AsyncPaginate>
  );
};

export default Search;
