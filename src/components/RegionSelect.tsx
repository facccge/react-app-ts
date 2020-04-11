import React, { ChangeEvent } from 'react';

interface Props {
  regions: { provience: string, cities: string[] }[],
  provience: string,
  handleChangeProvince: (event: ChangeEvent<HTMLSelectElement>) => void,
  handleChangeCity: (event: ChangeEvent<HTMLSelectElement>) => void
}
const RegionSelect = (props: Props) => {
  const { regions, provience, handleChangeProvince, handleChangeCity } = props;
  return (
    <div>
      <label>Provience:</label>
      <select onChange={handleChangeProvince}>
        {regions.map(item => item.provience).map(provience => <option value={provience}>{provience}</option>)}
      </select>
      <label>City:</label>
      <select onChange={handleChangeCity}>
        {regions
          .filter(item => item.provience === provience)
          .flatMap(item => item.cities, [])
          .map(city => <option value={city}>{city}</option>)}
      </select>
    </div>
  );
};

export default RegionSelect;
