import React from 'react'





const DisplayApi = ({charac}) => {
   
    
        return(
              <div>
          
            <ul>
                <li>Gender :{[charac.gender]}</li>

                <li>  Name : {[charac.name]} </li>
                
                <li> height : {[charac.height]}</li>

                 <li>eyeColor : {charac.eyeColor}</li>

                 <li> species : {charac.species}</li>

                 <li>skinColor : {charac.skinColor} </li>

                 <li>photo :<img src= {charac.image}/></li>
               
            </ul>
        </div>
        )
    }


export default DisplayApi