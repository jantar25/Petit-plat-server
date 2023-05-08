import React, {useState, useEffect} from 'react';
import axios from "axios"
import { MdDelete } from 'react-icons/md';

import all_orders from '../../constants/orders';
import {calculateRange, sliceData} from '../../utils/table-pagination';

import './styles.css';
import ClientForm from '../../components/ClientForm/ClientForm';

function Products () {
    const [search, setSearch] = useState('');
    const [orders, setOrders] = useState(all_orders);
    const [products,setProducts] = useState([])
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);
    const [toggleForm,setToggleForm] = useState(false);

    useEffect(() => {
        setPagination(calculateRange(all_orders, 5));
        setOrders(sliceData(all_orders, page, 5));
    }, [page]);

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
            let search_results = orders.filter((item) =>
                item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                item.product.toLowerCase().includes(search.toLowerCase())
            );
            setOrders(search_results);
        }
        else {
            __handleChangePage(1);
        }
    };

    // Change Page 
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        setOrders(sliceData(all_orders, new_page, 5));
    }

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
                                    <td><span>${product.amount}</span></td>
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

                {orders.length !== 0 ?
                    <div className='dashboard-content-footer'>
                        {pagination.map((item, index) => (
                            <span 
                                key={index} 
                                className={item === page ? 'active-pagination' : 'pagination'}
                                onClick={() => __handleChangePage(item)}>
                                    {item}
                            </span>
                        ))}
                    </div>
                : 
                    <div className='dashboard-content-footer'>
                        <span className='empty-table'>No data</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Products;