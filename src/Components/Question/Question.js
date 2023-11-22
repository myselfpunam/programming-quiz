import React, { useState } from 'react';
import './Question.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye , faEyeSlash} from '@fortawesome/free-solid-svg-icons'

import 'react-toastify/dist/ReactToastify.css';

import 'react-toastify/dist/ReactToastify.css';

const Question = ({q}) => {
    
   const [answer , setAnswer] =useState();
   const [open,setOpen] =useState(false)

   let message ;
   
   if(answer !== q.correctAnswer ){
    message = <p></p>
   }
   else{
    message= <p>Your Answer Is Correct</p>
   }

  return (
    
    <div className="modal-dialog p-4">
        <div className="modal-content">
            <div className=" modal-heade text-center pb-4">
            
                <h3 className='text-light'>Q. {q.question}  </h3>
                {
                    open ?  <FontAwesomeIcon  onClick={() => setOpen(!open)} className='text-light' icon={faEyeSlash} /> :<FontAwesomeIcon onClick={() => setOpen(!open)} className='text-light' icon={faEye} />
                }
               
                

            </div>
            {   open 
                ?
                    <div className='text-light bg-success'>
                        <h2>Correct answer is : <span className='text-warning'> {q.correctAnswer}</span></h2>
                    </div>
                : 
                    <div className="modal-body">
                    <div className="col-xs-3 5"></div>
                    <div className="quiz pb-4" id="quiz" data-toggle="buttons">
                      <button className='btn btn-primary text-light' value={q.options[0]}   onClick={e=>setAnswer(e.target.value)}>(A) {q.options[0]}</button>
                      <button className='btn btn-primary text-light' value={q.options[1]}   onClick={e=>setAnswer(e.target.value)}>(B) {q.options[1]}</button>
                      <button className='btn btn-primary text-light' value={q.options[2]}   onClick={e=>setAnswer(e.target.value)}>(C) {q.options[2]}</button>
                      <button className='btn btn-primary text-light' value={q.options[3]}   onClick={e=>setAnswer(e.target.value)}>(D) {q.options[3]}</button>
                    </div>
                   {
                    <div className='text-light bg-success'>
                       { message}
                    </div>
                   }
                
            </div> 
            
            }
            
        </div>
    </div>

  );
};

export default Question;