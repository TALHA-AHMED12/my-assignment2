"use client";  // Mark the component as a Client Component

import { useParams } from 'next/navigation'; // Import useParams from next/navigation
import { countries } from '../../data/countries'; // Adjust the import path
import CountryCard from '../../components/CountryCard'; // Import CountryCard

const CountryPage = () => {
  const { country } = useParams(); // Get the dynamic country parameter from the URL

  // Find the country by matching the URL parameter
  const countryData = countries.find((c) => c.name.toLowerCase() === country);

  // If the country is not found, display an error message
  if (!countryData) {
    return <h2>Invalid country!</h2>;  // Show error if country is not found
  }

  // Pass country data as props to CountryCard component
  return (
    <CountryCard 
      name={countryData.name} 
      population={countryData.population} 
      capital={countryData.capital} 
    />
  );
};

export default CountryPage;
