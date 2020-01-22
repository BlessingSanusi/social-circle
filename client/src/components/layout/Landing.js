import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='landing-h1'> Social Circle</h1>
          <p className='lead'>
            Create a developer social circle profile/portfolio, share posts and
            get help from other developers
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-dark'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
