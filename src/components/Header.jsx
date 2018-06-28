import React from 'react';
import { Link } from 'react-router-dom';
import reallyAdorablePuppy from '../assets/images/cutestpuppy.jpg';

function Header(){
  var puppyStyle = {
    width: '100px'
  };
  return (
    <div>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
      <img style={puppyStyle} src={reallyAdorablePuppy}/>
    </div>
  );
}

export default Header;
