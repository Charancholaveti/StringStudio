
import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Home = (props) => {
  const navigate = useNavigate(); // Hook for navigation
  const emojis = useMemo(() => ['🔠', '🔡','🐪🔤' ,'📝', '❌','🏷️🔠','🔄🔤','📋'], []);

  const transformations = useMemo(
    () => [
      'uppercase',
      'lowercase',
      'camelcase',
      'clear text',
      'remove extra spaces',
      'titlecase',
      'alternatingcase',
      'copy text',
    ],
    []
  );

  const fonts = useMemo(
    () => ['italian', 'Arial', 'Courier New', 'Georgia', 'Comic Sans MS', 'Times New Roman', 'Verdana', 'Lucida Console'],
    []
  );

  const [currentTransformation, setCurrentTransformation] = useState(0);
  const [currentFont, setCurrentFont] = useState(0);

  const applyTransformation = (text, transformation) => {
    switch (transformation) {
      case 'uppercase':
        return text.toUpperCase();
      case 'lowercase':
        return text.toLowerCase();
      case 'camelcase':
        return text
          .split(' ')
          .map((word, index) =>
            index === 0
              ? word.toLowerCase()
              : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join('');
      case 'clear text':
        return ''; // Clear text transformation
      case 'remove extra spaces':
        return text.replace(/\s+/g, ' ').trim(); // Remove extra spaces
      case 'titlecase':
        return text
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(' ');
      case 'alternatingcase':
        return text
          .split('')
          .map((char, index) => (index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()))
          .join('');
      case 'copy text':
        return text; // Copy text is no visual transformation
      default:
        return text;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTransformation((prev) => (prev + 1) % transformations.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [transformations.length]);

  useEffect(() => {
    const fontInterval = setInterval(() => {
      setCurrentFont((prev) => (prev + 1) % fonts.length);
    }, 2000);

    return () => clearInterval(fontInterval);
  }, [fonts.length]);

  // Dynamic transformation
  const phrase = 'You can transform your text info into';
  const transformedPhrase = applyTransformation(phrase, transformations[currentTransformation]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        color: 'black',
        position: 'relative',
        paddingTop: '8rem',
      }}
    >
      <h2
        style={{
          fontSize: '6rem',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {emojis[currentTransformation]}
      </h2>

      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>WELCOME TO</h1>

      <h1
        style={{
          fontSize: '3rem',
          fontFamily: fonts[currentFont],
          fontWeight: 'bold',
          margin: '0',
        }}
      >
        &quot;StringStudio&quot;
      </h1>

      <h2 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
        <span style={{ color: 'black' }}>{transformedPhrase}</span>{' '}
        <span
          style={{
            fontWeight: 'bold',
            color: 'white',
            textTransform: 'capitalize',
            marginLeft: '0.5rem',
          }}
        >
          {transformations[currentTransformation]}
        </span>
        <span
          style={{
            fontWeight: 'bold',
            marginLeft: '0.2rem',
            animation: 'blink 1s step-start infinite',
          }}
        >
          !!!
        </span>
      </h2>

      {/* Get Started Button */}
      <button
        style={{
          marginTop: '2rem',
          backgroundColor:'black',
          color:'white',
          border: 'none',
          padding: '1rem 2rem',
          borderRadius: '8px',
          fontSize: '1.2rem',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/textform')} // Navigate to the Tools page
      >
        Use the Tools
      </button>
    </div>
  );
};

export default Home;
