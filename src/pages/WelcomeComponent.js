import React from 'react';
import '../styles/WelcomeStyle.css';
import NavBar from '../components/NavBarComponent';
import TextWelcome from '../components/TextWelcomeComponent';
class Welcome extends React.Component {

    render() { 
        return ( 
            <div> 
            <NavBar />
        
            <div className='container'> 
                <div className='row'> 
                    <div className='col-9'>   
                    <TextWelcome/>
                    </div>
                
                </div> 
            </div>



           

           
           </div>

         );
    }
}
 
export default Welcome;

