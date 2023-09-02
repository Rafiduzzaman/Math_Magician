import React, { useState, useEffect } from 'react';

const QuoteDisplay = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
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
          setAuthor(data[0].author); // Set the author's name
        } else {
          setQuote('No quotes found in this category.');
          setAuthor('');
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
      <p className="quote-text">{quote}</p>
      {author && (
      <p className="author-text">
        -
        {author}
      </p>
      )}
      {' '}
      {/* Display author if available */}
    </div>
  );
};

export default QuoteDisplay;
