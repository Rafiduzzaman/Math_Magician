import React, { useState, useEffect } from 'react';

const QuoteDisplay = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const category = 'inspirational';

    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      headers: { 'X-Api-Key': 'KDLRK2IkWOKRDqcGQVidkg==SIYLCvHoYstGUJNg' },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setQuote(data[0].quote);
        } else {
          setQuote('No quotes found in this category.');
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
  }

  return (
    <div className="quote-display">
      <p>{quote}</p>
    </div>
  );
};

export default QuoteDisplay;
