import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-success">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">PROGRAMMING QUIZ</a>
    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto px-5">
        <li className="nav-item">
          <Link className="nav-link text-light" aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light"  to="quiz">Quiz</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="Statistic">Statistic</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light"  to="blog">Blog</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Nav;