import React from 'react'

 function ItemsList( { items } ) {

function nullCheckItems () {
    if ( items === null) { return <h2>No Items</h2>}
    else {
    const viewItems = items.map((item) => {
        return (
            <li>{item}</li>
             )
        }
      )
      return viewItems;
    }
}

    

    return (
        <div>
            <h3> Needed </h3>
            {nullCheckItems()}
            
        </div>
    )
}

export default ItemsList;