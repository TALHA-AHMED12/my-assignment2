import React from 'react';

interface CountryCardProps {
  name: string;
  population: string;
  capital: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ name, population, capital }) => {
  return (
    <div style={cardStyle}>
      <h1><strong><em>{name}</em></strong></h1>
      <p><strong>Population:</strong> {population}</p>
      <p><strong>Capital:</strong> {capital}</p>
    </div>
  );
};

// Use React.CSSProperties to type the style object
const cardStyle: React.CSSProperties = {
  border: '1px solid #ccc',
  padding: '20px',
  borderRadius: '10px',
  width: '300px',
  margin: '20px auto',
  textAlign: 'center', // TypeScript now knows this is valid
};

export default CountryCard;
