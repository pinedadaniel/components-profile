import React from 'react';
import { EEXIST } from 'constants';
class ProfileForm extends React.Component {
    state={
        firstName : '',
        lastName : '',
        email : '',
        jobTitle : '',
        twitter : ''

        
    }

    handleChange = e => {

        console.log({
            name: e.target.name,
            value: e.target.value

        });

        this.setState(
            {
                [e.target.name] : e.target.value
            }
        )
    }
    
    handleClick (e){
        return(
            console.log('el boton ah sido presionado')
        );
    }
    handleSubmit = e =>{
        e.preventDefault();
        console.log('el boton ah sido presionado')
    }


   
    render() { 
        return ( 
            <div>
                <h1>Nuevo asistente  </h1>

                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'> 
                    <label> Nombre </label>
                    <input 
                        onChange={this.handleChange}
                        className='form-control'
                        type='text'
                        name='firstName'
                        value={this.state.firtsName}
                    >
                    </input>

                    </div>
                    <div className='form-group'> 
                    <label> Apellido </label>
                    <input 
                      onChange={this.handleChange}
                        className='form-control'
                        type='text'
                        name='lastName'
                        value={this.state.lastName}
                    >
                    </input>

                    </div>
                    
                    <div className='form-group'> 
                    <label> Correo </label>
                    <input 
                      onChange={this.handleChange}
                        className='form-control'
                        type='email'
                        name='email'
                        value={this.state.email}
                    >
                    </input>

                    </div>
                    <div className='form-group'> 
                    <label> En que trabajas </label>
                    <input 
                      onChange={this.handleChange}
                        className='form-control'
                        type='text'
                        name='jobTitle'
                        value={this.state.jobTitle}
                    >
                    </input>

                    </div>
                    <div className='form-group'> 
                    <label> twitter </label>
                    <input 
                      onChange={this.handleChange} 
                        className='form-control'
                        type='text'
                        name='twitter'
                        value={this.state.twitter}
                    >
                    </input>

                    </div>
                    <button  onClick={this.handleClick} className='btn btn-primary'> Guardar </button>

                   

                </form>
            </div>
         );
    }
}
 
export default ProfileForm;