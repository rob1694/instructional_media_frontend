import React from 'react'
// import { useEffect, useState } from 'react'

function ResourcesDisplay( { references } ) {

    const viewResources = references.map((reference) => {
        return (
            <h3>{reference.href}</h3>
         )
    }
  )

    return (
        <div>
            <h2>RESOURCES</h2>
            {viewResources}
        </div>
    )
}

export default ResourcesDisplay;