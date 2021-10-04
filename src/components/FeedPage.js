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
                <h2>USER---------------------------------------------Create a post Box</h2>
                <ItemsList/>
                <VisualsContainer/>
                <StepsDisplay/>
                <ResourcesDisplay/>
            </div>
        </div>
    )
}

export default FeedPage;