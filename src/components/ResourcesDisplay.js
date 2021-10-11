import React from 'react'
import { useState } from 'react'

function ResourcesDisplay( { deleteReference, references, post, onAddReference, user} ) {

    const filteredResources = references.filter(reference => reference.post_id === post.id)

    const clearInput = () => { setReferenceInput({ href: "" })}   
    
    const [ referenceInput, setReferenceInput] = useState({ href: ""})
    
    function handleChange(e) {
      const value = e.target.value
      const name = [e.target.name]
      setReferenceInput({
        ...referenceInput,
        [name]: value
      });
    }
    
    function handleSubmit (e) {
      e.preventDefault();
    
      const newReference = { post_id: post.id ,href: referenceInput.href}

      fetch( 'http://localhost:3000/references', { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReference),
      })
      .then((r) => r.json())
      .then(onAddReference)
      .then(clearInput)
    }

    function userResourceProperties() {
      if ( user.id == post.user_id)
      return (
        <form onSubmit = {handleSubmit}>
                  <input name = "href" placeholder = "Link" value = {referenceInput.href} onChange = {handleChange}/>
                  <button className = "btn btn-info">Add reference</button>
              </form>
  
    )
  }

  
  const viewResources = filteredResources.map((reference) => {
    function handleDeleteReference() {
      deleteReference(reference.id)
    }
    function userRemoverProperty() {
      if ( user.id === post.user_id && post.id === reference.post_id)
      return ( <button className = "btn btn-warning" onClick = {handleDeleteReference} >Remove Resourcse Link</button> )
    }  
        return (
          <div>
            <h3>{reference.href}</h3>
            {userRemoverProperty()}
            
          </div>
     )
  }
)
    
    

return (
  <div >
            <h2>RESOURCES</h2>
            {userResourceProperties()}
            {viewResources}
        </div>
    )
}

export default ResourcesDisplay;