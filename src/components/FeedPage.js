import React from 'react'
import ItemsList from './ItemsList';
import StepsDisplay from './StepsDisplay';
import VisualsContainer from './VisualsContainer';
import ResourcesDisplay from './ResourcesDisplay';


function FeedPage() {

    


    return (
        <div>
            <h1>LIVE FEED</h1>
            <div>
                <ItemsList/>
                <VisualsContainer/>
                <StepsDisplay/>
                <ResourcesDisplay/>
            </div>
        </div>
    )
}

export default FeedPage;