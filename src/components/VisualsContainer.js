import React from 'react'

function VisualsContainer( { imgs } ) {

    function nullCheckImags () {
        if ( imgs === null) { return <h2>No IMAGES provided this time</h2>}
        else {
            const viewImgs = imgs.map((img) => {
                return (
                    <p >{img}</p>
                     )
                }
              )
          
          return viewImgs;
        }
    }

    

    return (
        <div>
            {nullCheckImags()}
        </div>
    )
}

export default VisualsContainer;