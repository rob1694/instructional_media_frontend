import React from 'react'

 function ItemsList( { items } ) {

    const viewItems = items.map((item) => {
        return (
            <li>{item}</li>
             )
        }
      )

    return (
        <div>
            Items List
            {viewItems}
            
        </div>
    )
}

export default ItemsList;