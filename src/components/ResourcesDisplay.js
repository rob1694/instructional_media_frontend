import React from 'react'
// import { useEffect, useState } from 'react'

function ResourcesDisplay( { references, post } ) {

    const filteredResources = references.filter(reference => reference.post_id === post.id)

    const viewResources = filteredResources.map((reference) => {
        return (
            reference.href.map((resourse) => <h3>{resourse}</h3>)
            
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