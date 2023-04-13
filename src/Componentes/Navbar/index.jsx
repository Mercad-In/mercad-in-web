import * as React from 'react';
import './index.css';
import Avatar from '@mui/material/Avatar';

export default function Home() {
  return (
    <nav className='navbar-supermarket'>
        <div><p>Mercad-In</p></div>
        <div className='profile'>
            <p>dsadasdas</p>
            <Avatar alt="Cindy Baker" />
        </div>
    </nav>
  );
}