import React,{ useState } from 'react'
import axios from "axios"

import './index.css'
import { storage } from '../../Firebase/Firebase'

const ClientForm = ({toggleForm}) => {
    const [image,setImage] = useState()
    const [inputs,setInputs] = useState({
        name:'',
        price:'',
        description:'',
    })
    
    const handleChange = (e) => {
        setInputs({...inputs,[e.target.name]:e.target.value})
    }

    const postProduct= async (product)=>{
        try {
            const res = await axios.post("http://localhost/petit-plat-server/Server/Items/products",product)   
             console.log(res.data);
        } catch(err){
            console.log(err)
        }
    };

    const hanldeSubmit = (e) => {
        e.preventDefault()
        if(image && inputs.name !== "" && inputs.price !== "" && inputs.description !== ""){
            const uploadTask = storage.ref().child(`images/${image.name}`).put(image);
            uploadTask.on(
              'state_changed',
              snapshot => {},
              error => {
                console.log(error)
              },
              () => {
                storage
                .ref('images')
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                const updatedInputs = {...inputs,imageURL: url};
                postProduct(updatedInputs)
                setImage('')
                setInputs({
                    name:'',
                    price:'',
                    description:''
                })
                toggleForm()
                })
              }
              )
          } else {
            console.log('inputs all filds')
          }
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
                    <div className='input-container'>
                        <label htmlFor='price'>Image:</label>
                        <input name='image' type="file" accept='Image/*' placeholder='image' onChange={(e)=>setImage(e.target.files[0])} />
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