import React from 'react';


import './Header.css'
import QuizHome from '../QuizHome/QuizHome';


const Header = () => {
  return (
    <div>
      
      <div className='header-container img-fuild text-start '>
        <h1 className='text-light px-5 pt-5 '>PROGRAMMING QUIZ</h1>
        <p className='text-light px-5 w-50 '>Welcome to our programming test quiz website, the ultimate platform for honing your coding skills and knowledge! Whether you're a beginner eager to learn or a seasoned developer looking to challenge yourself, our platform offers a diverse range of programming quizzes designed to cater to different skill levels and languages.</p>
        
        
      </div>
      <QuizHome></QuizHome>
    </div>
    
  );
};

export default Header;