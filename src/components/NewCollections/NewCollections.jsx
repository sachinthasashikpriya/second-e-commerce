import React from 'react'
import './NewCollections.css'
import new_collection from '../assets/Assets/Frontend_Assets/new_collections'
import {Item} from '../Item/Item'

export const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS<hr /></h1>

      <div className="collections">
        {new_collection.map((item,i)=>{return<Item key={i} id={item.id} name={item.name} image={item.image}/>})}
      </div>
    </div>
  )
}
