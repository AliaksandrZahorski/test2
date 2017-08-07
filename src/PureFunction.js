import React from 'react';

const PureFunction = ( { text } ) => {

  const isPrime = x => {
    for (let i = 2; i < x; i++) {
      if (x%i === 0) {
        return false
      }
    }
    return true
  };

  const result = isPrime(text);

  return (
    <div>
      PureFunction: {text} is {result ? 'prime' : 'not prime'}
    </div>
  );
}

export default PureFunction;
