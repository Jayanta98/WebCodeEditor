import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div>
            <div id="footer"  style={{background:"linear-gradient(to right, #FF512F 0%, #F09819  51%, #FF512F  100%)"}}>
                    <h4 className="text-center mt-3 "> Design & Developed By - Jayanta Ghosh</h4>
                   <h6 className="text-center  m-2"> Contact : jayantaghoshnitdgp@gmail.com</h6>

                           <div className="container text-center">
                          
                            <a href="https://www.facebook.com/profile.php?id=100011674493350"><i class=" fa fab fa-facebook m-1 "></i></a>
                              <a href="https://www.linkedin.com/in/jayanta-ghosh-136830168/"><i class=" fa fab fa-linkedin m-1"></i></a>
                              <a href="https://www.youtube.com/watch?v=vhRjOkBeXiU&t=107s"><i class=" fa fa-youtube m-1"></i></a> 
                             <a href="https://github.com/Jayanta98"><i class=" fa fab fa-github"></i> </a> 
                           </div>   
                           
                           
                           
                    
            </div>

        </div>
    )
}

export default Footer
