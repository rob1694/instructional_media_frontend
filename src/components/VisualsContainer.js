import React from 'react'

function VisualsContainer( { imgs } ) {

    const viewImgs = imgs.map((img) => {
        return (
            <p >{img}</p>
             )
        }
      )

    return (
        <div>
            {viewImgs}
        </div>
    )
}

export default VisualsContainer;