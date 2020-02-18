import React from 'react';
import { routes } from 'react-router-dom'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="æth€r">
    <h1>Help Queue</h1>
    <Link to="/" style={{position:'relative', zIndex:'500'}}>Home</Link> | <Link to="/NewPost" style={{position:'relative', zIndex:'500'}}>Create New Post</Link>
    </div>
  )
}
export default Navbar;
