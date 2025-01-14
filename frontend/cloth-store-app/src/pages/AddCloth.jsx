import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function AddCloth() {
    const [clothData, setClothData] = useState({})
    const navigate = useNavigate()

    const onHandleChange = (e) => {
        let val = (e.target.name === 'size') ? e.target.value.split(",") : (e.target.name === 'file') ? e.target.files[0] : e.target.value
        setClothData(pre => ({ ...pre, [e.target.name]: val }))
    }

    const onHandleSubmit = async (e) => {
        e.preventDefault()
        console.log(clothData)
        await axios.post('http://localhost:5000/cloth', clothData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'authorization': 'bearer ' + localStorage.getItem('token')
                }
            }
        )
            .then(() => navigate('/'))
    }

    return (
        <>
            <div className='container'>
                <form className='form' onSubmit={onHandleSubmit}>
                    <div className='form-control'>
                        <label>Title</label>
                        <input type="text" className='input' name="title" placeholder='Enter Title' onChange={onHandleChange}></input>
                    </div>
                    <div className='form-control'>
                        <label>Price</label>
                        <input type="text" className='input' name="price" placeholder='Enter Price' onChange={onHandleChange}></input>
                    </div>
                    <div className='form-control'>
                        <label>Description</label>
                        <textarea type="text" className='input-textarea' name="description" rows="5" placeholder='Enter Description' onChange={onHandleChange}></textarea>
                    </div>
                    <div className='form-control'>
                        <label>Category</label>
                        <textarea type="text" className='input-textarea' name="category" rows="5" placeholder='Enter Category (Men, Women, Kids , Unisex) ' onChange={onHandleChange}></textarea>
                    </div>
                    <div className='form-control'>
                        <label>Size</label>
                        <textarea type="text" className='input-textarea' name="size" rows="5" placeholder='Enter Size (Xs, S, M, L, XL) (You can select many sizes) ' onChange={onHandleChange}></textarea>
                    </div>
                    <div className='form-control'>
                        <label>Cloth Image</label>
                        <input type="file" className='input' name="file" onChange={onHandleChange}></input>
                    </div>
                    <button type="submit">Add Cloth</button>
                </form>
            </div>
        </>
    )
}
