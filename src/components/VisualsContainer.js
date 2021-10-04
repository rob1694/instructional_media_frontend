import React from 'react'

function VisualsContainer( { imgs } ) {

    const viewImgs = imgs.map((img) => {
        return (
            <a>{img}</a>
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