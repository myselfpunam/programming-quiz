import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizPage = () => {
  const quiz = useLoaderData();
  console.log(quiz)
  return (
    <div>
      <h1 className=''>Question of {quiz.data.name}</h1>
      {
        quiz.data.questions.map(q => <Question key={q.id}
        q={q}></Question>)
      }
    </div>
  );
};

export default QuizPage;
