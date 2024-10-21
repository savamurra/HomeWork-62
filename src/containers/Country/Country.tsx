import Countries from "../../components/Countries/Countries.tsx";
import "./Country.css";
import CountriesInfo from "../../components/CountriesInfo/CountriesInfo.tsx";
import { useCallback, useEffect, useState } from "react";
import { APICountry } from "../../types";
import axios from "axios";

const Country = () => {
  const [allCountries, setAllCountries] = useState<APICountry[]>([]);
  const [clickCountryCode, setClickCountryCode] = useState<string>("");

  const axiosData = useCallback(async () => {
    const promise: { data: APICountry[] } = await axios<APICountry[]>(
      "https://restcountries.com/v2/all",
    );
    const countryRes = promise.data;

    setAllCountries(countryRes);
  }, []);

  useEffect(() => {
    void axiosData();
  }, [axiosData]);

  return (
    <div className="countryBlock">
      <div className="countriesList">
        {allCountries.map((country) => (
          <Countries
            key={crypto.randomUUID()}
            name={country.name}
            onClick={() => setClickCountryCode(country.alpha3Code)}
          />
        ))}
      </div>
      <div className="countriesInfo">
        <CountriesInfo alphaCode={clickCountryCode} />
      </div>
    </div>
  );
};

export default Country;
