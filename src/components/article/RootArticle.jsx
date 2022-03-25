import React from 'react'
import CreateArticle from "./CreateArticle"
import ListArticle from "./ListArticle"

const RootArticle = () => {
  return (
    <div className="row mt-5">
        <div className="col-md-4">
            <CreateArticle/>
        </div>
        <div className="col-md-8">
            <ListArticle/>
        </div>
    </div>
  )
}

export default RootArticle