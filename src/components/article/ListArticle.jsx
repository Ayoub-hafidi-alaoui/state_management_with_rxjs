import React from 'react'
import {articles_observable} from '../../app/store'
import {useEffect, useState} from "react"
import {deleteArticle} from "../../app/store"

const ListArticle = () => {

    const [articles, setArticles] = useState([])

    useEffect(() =>{
        articles_observable.subscribe(listArticle => setArticles(listArticle))
    },[])
  return (
    <>
            <h1 className="display-4">List of articles </h1>
            {
                articles && articles.map(article => (
                
                    <div className="card" key={article.id}>
                        <div className="card-body" >
                            <h4 className="card-title">{article.title}</h4>
                            <div className="card-text">
                                {article.body}
                                <div className="text-end">
                                    <button onClick={()=>{deleteArticle(article.id)}} className="btn btn-danger" >Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
    </>
  )
}

export default ListArticle