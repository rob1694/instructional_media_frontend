import React from 'react'

function StepsDisplay(  { steps } ) {

    function nullCheckSteps () {
        if ( steps === null) { return <h2>No Steps</h2>}
        else {
            const viewSteps = steps.map((step) => {
                return (
                    <li>{step}</li>
                     )
                }
              )
          
          return viewSteps;
        }
    }

    

    return (
        <div>
           <h3> Steps For Success </h3>
            {nullCheckSteps()}
        </div>
    )
}

export default StepsDisplay;