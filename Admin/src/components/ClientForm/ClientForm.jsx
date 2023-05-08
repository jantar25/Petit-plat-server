import React,{ useState } from 'react'

import './index.css'

const ClientForm = ({toggleForm}) => {
    const [inputs,setInputs] = useState({
        name:'',
        price:'',
        description:''
    })
    
    const handleChange = (e) => {
        setInputs({...inputs,[e.target.name]:e.target.value})
    }

    const hanldeSubmit = (e) => {
        e.preventDefault()
        console.log(inputs)
        setInputs({
            name:'',
            price:'',
            description:''
        })
    }
  return (
    <div className='form-container'>
        <form onSubmit={hanldeSubmit}>
            <h3>REMPLIS LE FORMULAIRE CI DESSOUS</h3>
            <div className="divide-form">
                <div className='form-left'>
                    <h5>INFORMATION DU MENU</h5>
                    <div className='input-container'>
                        <label htmlFor='name'>Nom:</label>
                        <input name='name' value={inputs.name} type='text' placeholder='Nom' onChange={handleChange} />
                    </div>
                    <div className='input-container'>
                        <label htmlFor='price'>Prix:</label>
                        <input name='price' value={inputs.price} type='text' placeholder='price' onChange={handleChange} />
                    </div>
                    <div className='input-container'>
                        <label htmlFor='description'>Description:</label>
                        <textarea name='description' value={inputs.description}  type='text' placeholder='description' onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className='form-bottom'>
                <input type='submit' value='Save' className='submit' />
                <button onClick={toggleForm} className='cancel'>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default ClientForm