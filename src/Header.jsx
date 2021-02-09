import React from 'react'
import './header.css';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div>
            <header>
            <div>
                <h1  id="heading">Designe your Website here !!</h1>
                  <h6 style={{position:"absolute", marginTop:"350px" ,padding:"5px"}} >You can design your website with HTML, CSS ,
                   JavaScript also with 🥰 Bootstrap & Font-Awesome 🥰 </h6>
                  
                <Link to="/CodeEditor">
                    <button id="btn" className="btn-grad" >Get Started</button>
                </Link>
                
            </div>
             
            </header>
        </div>
    )
}

export default Header
