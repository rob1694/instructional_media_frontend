import React from 'react'
import ItemsList from './ItemsList';
import StepsDisplay from './StepsDisplay';
import VisualsContainer from './VisualsContainer';
import ResourcesDisplay from './ResourcesDisplay';
import { useEffect, useState } from 'react'

function Post( { post } ) {

    const { title, description, imgs, steps, items } = post

    const [ references, setReferences] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/references')
          .then(r => r.json())
          .then((json) => setReferences(json))
        }, []);



    return (
        <div>
                <h2>{title}</h2>
                <p>Description: {description}</p>

                <ItemsList items = {items}/>
                <VisualsContainer imgs = {imgs}/>
                <StepsDisplay steps = {steps }/>
                <ResourcesDisplay references = {references}/>
        </div>
    )
}

export default Post;