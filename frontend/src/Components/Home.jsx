import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom';

const Home = () => {
    const location = useLocation();


  return ( 
    <div>
        <h1>Hello {location.state.id} and Welcome the home</h1>







    </div>
  )
}

export default Home