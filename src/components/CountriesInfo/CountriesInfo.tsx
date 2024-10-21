import { useEffect, useState } from "react";
import { APIOneCountry } from "../../types";
import * as React from "react";
import axios from "axios";
import "./CountriesInfo.css";

interface Props {
  alphaCode: string;
}

const CountriesInfo: React.FC<Props> = ({ alphaCode }) => {
  const [countries, setCountries] = useState<APIOneCountry | null>(null);
  const [borders, setBorders] = useState<APIOneCountry[]>([]);

  useEffect(() => {
    const getCountryByCode = async () => {
      const promise: { data: APIOneCountry } = await axios<APIOneCountry>(
        `https://restcountries.com/v2/alpha/${alphaCode}`,
      );
      const countryRes = promise.data;

      const countryBorder = countryRes.borders;

      setCountries(countryRes);
      if (countryBorder) {
        const borderPromise = countryBorder.map(async (alphaCode) => {
          const axiosResponse: { data: APIOneCountry } = await axios.get(
            `https://restcountries.com/v2/alpha/${alphaCode}`,
          );
          return axiosResponse.data;
        });

        const borderRes = await Promise.all(borderPromise);
        setBorders(borderRes);
      } else {
        setBorders([]);
      }
    };

    if (alphaCode !== "") void getCountryByCode();
  }, [alphaCode]);

  return (
    countries && (
      <div>
        <div className="countryHeader">
          <h2>{countries.name}</h2>
          <img
            style={{ width: "200px" }}
            src={countries.flag}
            alt={countries.name}
          />
        </div>
        <div className="countryBody">
          <p>Capital: {countries.capital ? countries.capital : 'No capital'}</p>
          <p>Population: {countries.population}</p>
          <p>Region: {countries.region}</p>
          <p>Subregion: {countries.subregion}</p>
        </div>
        <div className="countryFooter">
          <h3>Borders with:</h3>
          <ul>
            {borders.length > 0 ? (
              borders.map((borderCountry) => (
                <li key={crypto.randomUUID()}>{borderCountry.name}</li>
              ))
            ) : (
              <li>No borders</li>
            )}
          </ul>
        </div>
      </div>
    )
  );
};

export default CountriesInfo;
