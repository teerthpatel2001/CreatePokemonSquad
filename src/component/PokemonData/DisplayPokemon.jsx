import React from 'react'
import { useSelector } from 'react-redux'

export default function DisplayPokemon() {

    const pokyName = useSelector((name) =>name)
    // console.log('name',pokyName.todo.pokyDetail &&  pokyName.todo.pokyDetail[0].sprites.back_default)


  return (
    <div className='pokemon'>
    <h2>Selected Pokemon</h2>
    <div className='imageBackground'>
    <img src={pokyName.todo.pokyDetail.length &&  pokyName.todo.pokyDetail[0].sprites?.back_default} alt="" />
    </div>
    <h2>{pokyName.todo.pokyDetail.length &&  pokyName.todo.pokyDetail[0].name}</h2>
  </div>
  )
}
