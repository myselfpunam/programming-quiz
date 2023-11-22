import React from 'react';

import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './QuizHome.css'


const QuizHome = () => {
  const products = useLoaderData();
  
  return (
    <div className='row p-5 '>
      {
        products.data.map(product => <Quiz 
        key={product.id}
        product={product}></Quiz>)
      }
    </div>
  );
};

export default QuizHome;