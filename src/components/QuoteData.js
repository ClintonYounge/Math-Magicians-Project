import { useState, useEffect } from 'react';
import '../App.css';

function Quote() {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const category = 'happiness';
    const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
    setIsLoading(true);

    fetch(url, {
      method: 'GET',
      headers: {
        'X-Api-Key': 'PkqVAH5d4n204SaOGxDg5g==du09bh3RLTEmWABS',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data[0]);
        setIsLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setIsLoading(false);
      });
  }, [setData]);

  if (hasError) return <div>Something went wrong!</div>;
  if (isLoading) return <div>Loading Quote...</div>;

  return (
    <div className="quote-container">
      <p>{data.quote}</p>
      <p>{`By: ${data.author}`}</p>
    </div>
  );
}

export default Quote;
