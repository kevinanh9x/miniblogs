import React from 'react';
import Lefthome from '../home/homepage/Lefthome';
import { useLocation, useHistory } from "react-router-dom";
import Contact from "../contact/index";
import { useCallback, useMemo } from "react";

const Index = () => {
    let location = useLocation(); 
  let history = useHistory(); 
 
  const endpoint = useMemo(() => location.pathname || "", [location]); 
 
  useMemo(() => { 
    switch (endpoint) { 
      case "/contact": 
        return <Contact></Contact>; 
      default: 
        break; 
    } 
  }, [endpoint]); 
 
  let HandelChangtab = useCallback( 
    (endpoint: any) => { 
      history.push(`/${endpoint}`); 
    }, 
    [history] 
  );

    return (
        <div className='container mt-20'>
            <div className='row'>
                <div className='col-md-3 home-left'>
                    <Lefthome></Lefthome>
                </div>

                <div className='col-md-8'>
                    <div className='about'>
                        <h2>About me</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis sed odio morbi quis.
                            Enim eu turpis egestas pretium aenean pharetra magna ac.
                            Vel quam elementum pulvinar etiam non quam lacus suspendisse. Tellus orci ac auctor augue mauris augue neque gravida in. 
                        </p>

                        <h4>Something else here</h4>
                        <p>
                            Google has an intelligent voice assistant now. Google offers this service by default on its Android devices and also on other platforms.
                            However, whether this facility is available or not depends on whether the user has installed Google Now on these devices or not.
                        </p>
                        <p>
                            Be sure to use an appropriate type attribute on all inputs (e.g., email for email address
                            or number for numerical information) to take advantage of newer input controls like email
                            verification, number selection, and more.
                        </p>
                        <button style={{color:"white",background:"#B2B1B1",border: '1px solid white',borderRadius: '5px', height:'50px', fontSize:'13pt'}} onClick={() => HandelChangtab("contact")}>Get in tounch</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;
