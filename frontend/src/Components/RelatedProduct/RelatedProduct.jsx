import React from 'react'
import "./RelatedProduct.css"
import dataProduct from "../Assets/data"
import Item from "../Items/Item"

function RelatedProduct() {
  return (
    <div className='relatedProduct'>
        <h1> Related Product</h1><hr />
        <div className="relatedProduct-item">
            {dataProduct.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            
            })}

        </div>
    </div>
  )
}

export default RelatedProduct