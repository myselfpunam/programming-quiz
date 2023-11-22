
import './App.css';
import Header from './Components/Header/Header';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Main from './Layout/Main/Main';
import QuizHome from './Components/QuizHome/QuizHome';
import State from './Components/State/State';
import Blog from './Components/Blog/Blog';
import QuizPage from './Components/QuizPage/QuizPage';


function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element: <Main></Main> ,
      children : [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Header></Header>
        },
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <QuizHome></QuizHome>
        },
        {
          path: '/quiz/:quizId',
          loader: async({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <QuizPage></QuizPage>
        },
        {
          path: '/home',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Header></Header>
        },
        {
          path: '/quiz',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <QuizHome></QuizHome>
        },
        
        {
          path: '/statistic',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element : <State></State>
        },
          
        
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '*',
          element: <h1>HEY MAN WRONG DIRECTION</h1>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
