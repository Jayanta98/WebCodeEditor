import React,{useState,useEffect} from 'react';
import './codesection.css';
import {Link} from 'react-router-dom';


function CodingSection() {

const [HTMLCode, setHTMLCode] = useState('<div class="container"> <h1>Write Your HTML</h1> <h3>Here You can directly Use Bootstrap & Font-Awesome  <i class="fab fa-angellist"></i> </h3><button type="button" class="btn btn-danger">Lets Start !!</button></div>');
const [CSSCode, setCSSCode] = useState('h3{color:blue}');
const [JSCode, setJSCode] = useState('/*JavaScript Code */ document.body.style.background="orange"');
const [srcDoc, setSrcDoc] = useState('');

useEffect(()=>{
    const timeout=setTimeout(()=>{
      
        setSrcDoc(
           `<html>
           <style>${CSSCode}</style>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />  
        <body>${HTMLCode}
       
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
           <script>${JSCode}</script>
           </body>
           </html>`
        )

    },200)
    return ()=>clearTimeout(timeout)
},[HTMLCode,CSSCode,JSCode]);


    return (
       <>
               
      <div className="row " style={{background:"linear-gradient(to right, #FF512F 0%, #F09819  51%, #FF512F  100%)"}}>

      <div className="col-md-10 justify-content-between align-content-center d-flex">
                 <Link to="/WebCodeEditor">
                    <button className="btn-gradRun" ><b>Web Code Editor</b></button>
                    </Link>
                      <h2 className="text-center">Design Your ❤️Awesome❤️ Website💻 </h2>
      </div>

      </div>

<div className="main">
<div class="container text-center ">
    <div class="row">
        <div class="col-md">
             <textarea name="" id="html" cols="46" rows="10" value={HTMLCode}  onChange={(e)=>setHTMLCode(e.target.value)}></textarea>
        </div>
        <div class="col-md">
              <textarea name="" id="css" cols="46" rows="10" value={CSSCode}  onChange={(e)=>setCSSCode(e.target.value)}></textarea>
        </div>
        <div class="col-md">
              <textarea name="" id="js" cols="46" rows="10" value={JSCode}  onChange={(e)=>setJSCode(e.target.value)}></textarea>
        </div>
    </div>
</div>
 

<div class="row">
    <div class="col-md container-fluid bg-blue">            
 <iframe title="output" sandbox="allow-scripts"  id="output"
      srcDoc={srcDoc}
       frameBorder="10"
          width="100%"
          height="100%"
 />
    </div>
</div>

</div>

        
     </>
    )
}

export default CodingSection;
