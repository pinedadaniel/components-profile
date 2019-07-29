import React from 'react';

class TextWelcome extends React.Component{
    render(){
        return (
         
            <div className='contWelcome'> 
              <h1 className='textoBienvenida'> Esta es nuestra Super Conferencia Geek! Bienvenidos O.O </h1>
              

            
             <button type='submit' className='btn-iniciar' > Iniciar  </button>
              
            </div>

           
        );
    }
}

export default TextWelcome;