import React, { useEffect, useState } from 'react';
import { BsStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import { Link, useLoaderData, useNavigate } from 'react-router-dom'

export default function ClothItems() {
  const clothes = useLoaderData()
  const [allClothes, setAllClothes] = useState()
  let path = window.location.pathname === '/myCloth' ? true : false
  let favItems = JSON.parse(localStorage.getItem('fav')) ?? []
  const [isFavCloth, setIsFavCloth] = useState(false)
  const navigate = useNavigate()
  console.log(allClothes)

  useEffect(() => {
    setAllClothes(clothes)
  }, [clothes])

  const onDelete = async (id) => {
    await axios.delete(`http://localhost:5000/cloth/${id}`)
      .then((res) => console.log(res))
    setAllClothes(clothes => clothes.filter(cloth => cloth._id !== id))
    let filterItem = favItems.filter(cloth => cloth._id !== id)
    localStorage.setItem('fav', JSON.stringify(filterItem))
  }

  const favRecipe = (item) => {
    let filterItem = favItems.filter(cloth => cloth._id === item._id)
    favItems = favItems.filter(cloth => cloth._id !== item._id).length === 0 ? [...favItems, item] : filterItem
    localStorage.setItem('fav', JSON.stringify(favItems))
    setIsFavCloth(pre => !pre)
  }

  return (
    <>
      <div className='card-container'>
        {
          allClothes?.map((item, index) => {
            return (
              <div key={index} className='card'>
                <img src={`http://localhost:5000/images/${item.coverImage}`} width='100px' height="100px" />
                <div className='card-body'>
                  <div className='title'>{item.title}</div>
                  <div className='icons'>
                    <div className='timer'><BsStopwatchFill />${item.price}</div>
                    {(!path) ? <FaHeart onClick={() => favRecipe(item)}
                      style={{ color: (favItems.some(res => res._id === item._id)) ? "red" : "" }} /> :
                      <div className='action'>
                        <Link to={`/editCloth/${item._id}`} className="editIcon"><FaEdit /></Link>
                        <MdDelete onClick={() => onDelete(item._id)} className='deleteIcon' />
                      </div>
                    }
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
