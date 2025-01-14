import React from 'react'
import { useLoaderData } from 'react-router-dom'
import profileImg from '../assets/profile.png'


export default function ClothDetails() {
    const cloth = useLoaderData()
    console.log(cloth);

    return (
        <>
            <div className='outer-container'>
                <div className='profile'>
                    <img src={profileImg} width="50px" height="50px"></img>
                    <h5>{cloth.email}</h5>
                </div>
                <h3 className='title'>{cloth.title}</h3>
                <img src={`http://localhost:5000/images/${cloth.coverImage}`} width="220px" height="200px"></img>
                <div className='cloth-details'>
                    <div className='category'><h4>Category</h4><ul>{cloth.category.map(item => (<li>{item}</li>))}</ul></div>
                    <div className='description'><h4>Description</h4><span>{cloth.description}</span></div>
                </div>
            </div>
        </>
    )
}
