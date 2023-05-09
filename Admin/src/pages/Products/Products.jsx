import React, {useState, useEffect} from 'react';
import axios from "axios"
import { MdDelete } from 'react-icons/md';

import './styles.css';
import ClientForm from '../../components/ClientForm/ClientForm';

function Products () {
    const [search, setSearch] = useState('');
    const [products,setProducts] = useState([])
    const [toggleForm,setToggleForm] = useState(false);


    useEffect(()=>{
        const getProducts= async ()=>{
            try {
                const res = await axios.get("http://localhost/petit-plat-server/Server/Items/products")   
                 setProducts(res.data);
            } catch(err){
                console.log(err)
            }
        };
        getProducts();  
    },[])

    // Search
    const __handleSearch = (event) => {
        setSearch(event.target.value);
        if (event.target.value !== '') {
            let search_results = products.filter((item) =>
                item.names.toLowerCase().includes(search.toLowerCase()) ||
                item.descriptions.toLowerCase().includes(search.toLowerCase())
            );
            setProducts(search_results);
        }
    };

    const handleToggleForm = () => {
        setToggleForm(!toggleForm)
    }

    const deleteProduct = async(id) => {
        try {
            await axios.delete(`http://localhost/petit-plat-server/Server/Items/products/${id}`) 
        } catch(err){
            console.log(err)
        }
    }

    return(
        <div className='dashboard-content'>
            <div className='dashboard-content-container'>
                {toggleForm && 
                <div className='form-container'>
                    <ClientForm toggleForm={handleToggleForm} />
                </div>
                }
                <div className='dashboard-content-header'>
                    <button className='dashbord-header-btn' 
                      onClick={handleToggleForm}>
                        Add Produit
                    </button>
                    <div className='dashboard-content-search'>
                        <input
                            type='text'
                            value={search}
                            placeholder='Search..'
                            className='dashboard-content-input'
                            onChange={e => __handleSearch(e)} />
                    </div>
                </div>

                <table>
                    {products.length !== 0 ?
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th>DATE</th>
                                <th>PRODUCT</th>
                                <th>PRICE</th>
                                <th>OPERATE</th>
                            </tr>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td><span>{product.id}</span></td>
                                    <td><span>{product.postdate}</span></td>
                                    <td>
                                        <div>
                                            <img 
                                                src={product.imageURL}
                                                className='dashboard-content-avatar'
                                                alt={product.names} />
                                            <span>{product.names}</span>
                                        </div>
                                    </td>
                                    <td><span>Rwf {product.amount}</span></td>
                                    <td>
                                        <div className='operate-container'>
                                            <MdDelete
                                                style={{fontSize:'30px',cursor:'pointer',color:'red'}} 
                                                onClick={() => deleteProduct(product.id)}/>
                                            <span className='update-Btn'>
                                                Update
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    : null}
                </table>
            </div>
        </div>
    )
}

export default Products;