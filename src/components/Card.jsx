import React from 'react';

const Card = () => {
//윗부분은 자바스크립트 문법
  const myName = "김완재";


  return (<div className="card">
  {/* 아래부분은 html문법 */}
    <h5 className="card-title">Card title</h5>
    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button type="button" className="card-button">Go somewhere</button>
    
  </div>
  );
};

export default Card;