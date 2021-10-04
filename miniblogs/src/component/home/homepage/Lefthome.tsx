import React from 'react';
import author from '../../../images/author.jpg';

const Lefthome = () => {
    return (
        <div style={{fontSize:'20px'}}>
            <img src={author} className='img-circle' alt="author" />
            <p>
               Denali is a simple responsive
               blog template.Easily add 
               new posts using the Editor or
                change layout and design
                using the Designer.
            </p>
            <hr style={{backgroundColor:"gray"}} />
            <div>
                <h5>Featured post:</h5>
                <p className='text-secondary'>
                    According a funnily uni pre-set or
                    arrogant well cheeful Overlaid the jeepers
                    uselessly much excluding
                </p>
            </div>
            <hr style={{backgroundColor:"gray"}} />
            <div>
                <ul className='d-flex flex-pd'>
                    <li className='list-unstyled'>
                        <i className="fab fa-facebook-square"></i>
                    </li>

                    <li className='list-unstyled'>
                        <i className="fab fa-instagram"></i>
                    </li>

                    <li className='list-unstyled'>
                        <i className="fab fa-twitter"></i>
                    </li>

                    <li className='list-unstyled'>
                        <i className="fab fa-linkedin-in"></i>
                    </li>
                </ul>
                <p className='text-secondary'>BUILT WITH WEBFLOW</p>
            </div>
        </div>
    )
}

export default Lefthome;
