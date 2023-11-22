import React from 'react';
import './Quiz.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Quiz = ({product}) => {
  
  return (
    <div className='col col-md-3 col-sm-6'>
      <div class="card rounded-5" >
  <img src={product.logo} className="card-img-top " alt="..."/>
  <div className="card-body text-light bg-success rounded-bottom-5 ">
    <h5 class="card-title">{product.name}</h5>
    <p class="card-text">Total Quiz : {product.total}</p>
    <button className='btn btn-primary text-light' ><Link className='link text-light text' to={`/quiz/${product.id}`}>Start Quiz <FontAwesomeIcon icon={faArrowRight} /></Link></button>
  </div>
</div>
    </div>
  );
};

export default Quiz;