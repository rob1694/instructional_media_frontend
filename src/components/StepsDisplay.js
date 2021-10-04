import React from 'react'

function StepsDisplay(  { steps } ) {

    const viewSteps = steps.map((step) => {
        return (
            <li>{step}</li>
             )
        }
      )

    return (
        <div>
            {viewSteps}
        </div>
    )
}

export default StepsDisplay;