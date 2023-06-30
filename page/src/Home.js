import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
    return(   
        <div className="brand">
        Slowand<br/><br/>
          <div className="menu">
            <Link to="/best" style={{ textDecoration: 'none' , color: 'black'}}>BEST </Link> 
            <Link to="/top" style={{ textDecoration: 'none' , color: 'black'}}> TOP </Link>
            <Link to="/skirt" style={{ textDecoration: 'none' , color: 'black'}}> SKIRT </Link>
            <Link to="/bottom" style={{ textDecoration: 'none' , color: 'black'}}> BOTTOM </Link>
            <Link to="/outer" style={{ textDecoration: 'none', color: 'black'}}> OUTER </Link>
            <Link to="/acc" style={{ textDecoration: 'none' , color: 'black'}}> ACC </Link>
          </div>
        </div>
    );
}
export default Home;