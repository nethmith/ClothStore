import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditCloth() {
    const [clothData, setClothData] = useState({})
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        const getData = async () => {
            await axios.get(`http://localhost:5000/cloth/${id}`)
                .then(response => {
                    let res = response.data
                    setClothData({
                        title: res.title,
                        price: res.price,
                        description: res.description,
                        category: res.category,
                        size: res.size.join(",")
                    })
                })
        }
        getData()
    }, [])

    const onHandleChange = (e) => {
        let val = (e.target.name === 'size') ? e.target.value.split(",") : (e.target.name === 'file') ? e.target.files[0] : e.target.value
        setClothData(pre => ({ ...pre, [e.target.name]: val }))
    }

    const onHandleSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:5000/cloth/${id}`, clothData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'authorization': 'bearer ' + localStorage.getItem('token')
                }
            }
        )
            .then(() => navigate('/myCloth'))
    }

    return (
        <>
            <div className='container'>
                <form className='form' onSubmit={onHandleSubmit}>
                    <div className='form-control'>
                        <label>Title</label>
                        <input type="text" className='input' name="title" placeholder='Enter Title' onChange={onHandleChange} value={clothData.title}></input>
                    </div>
                    <div className='form-control'>
                        <label>Price</label>
                        <input type="text" className='input' name="price" placeholder='Enter Price' onChange={onHandleChange} value={clothData.price}></input>
                    </div>
                    <div className='form-control'>
                        <label>Description</label>
                        <textarea type="text" className='input-textarea' name="description" rows="5" placeholder='Enter Description' onChange={onHandleChange} value={clothData.description}></textarea>
                    </div>
                    <div className='form-control'>
                        <label>Category</label>
                        <textarea type="text" className='input-textarea' name="category" rows="5" placeholder='Enter Category (Men, Women, Kids , Unisex) ' onChange={onHandleChange} value={clothData.category}></textarea>
                    </div>
                    <div className='form-control'>
                        <label>Size</label>
                        <textarea type="text" className='input-textarea' name="size" rows="5" placeholder='Enter Size (Xs, S, M, L, XL) (You can select many sizes) ' onChange={onHandleChange} value={clothData.size}></textarea>
                    </div>
                    <div className='form-control'>
                        <label>Cloth Image</label>
                        <input type="file" className='input' name="file" onChange={onHandleChange}></input>
                    </div>
                    <button type="submit">Edit Cloth</button>
                </form>
            </div>
        </>
    )
}
