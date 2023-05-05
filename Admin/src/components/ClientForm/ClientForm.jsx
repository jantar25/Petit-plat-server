import React from 'react'

import './index.css'

const ClientForm = ({toggleForm}) => {
    
    const hanldeSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted...')
    }
  return (
    <div className='form-container'>
        <form onSubmit={hanldeSubmit}>
            <h3>REMPLIS LE FORMULAIRE CI DESSOUS</h3>
            <div className="divide-form">
                <div className='form-left'>
                    <h5>INFORMATION DU CLIENT</h5>
                    <div className='input-container'>
                        <label htmlFor='name'>Nom:</label>
                        <input name='name' type='text' placeholder='Nom' />
                    </div>
                    <div className='input-container'>
                        <label htmlFor='surname'>Post-Nom:</label>
                        <input name='surname' type='text' placeholder='Post nom' />
                    </div>
                    <div className='input-container'>
                        <label htmlFor='address'>Address:</label>
                        <input name='address' type='text' placeholder='Address' />
                    </div>
                    <div className='input-container'>
                        <label htmlFor='type'>Type:</label>
                        <select name='type' placeholder='Type'>
                            <option>Persone 1</option>
                            <option>Persone 2</option>
                            <option>Persone 3</option>
                            <option>Persone 4</option>
                        </select>
                    </div>
                </div>
                <div className='form-right'>
                    <h5>INFORMATION DE L'ENREGISTREUR</h5>
                    <div className='input-container'>
                        <label htmlFor='number'>Numero de l'agent:</label>
                        <input name='number' type='text' placeholder="Numero de l'agent" />
                    </div>
                </div>
            </div>
            <div className='form-bottom'>
                <input type='submit' value='Enregistrer' className='submit' />
                <button onClick={toggleForm} className='cancel'>Fermer</button>
            </div>
        </form>
    </div>
  )
}

export default ClientForm