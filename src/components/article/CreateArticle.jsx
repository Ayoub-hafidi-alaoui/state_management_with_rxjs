import {useRef} from "react"
import { addArticle } from "../../app/store"
import {v4 as uuid} from "uuid"

const CreateArticle = () => {

    const title = useRef("")
    const body = useRef("")

    const articleForm = (e) => {
        e.preventDefault()
        let newArticle = {
            id: uuid(),
            title: title.current.value,
            body: title.current.value
        }
        addArticle(newArticle)
        title.current.value = ""
        body.current.value = ""
    }

  return (
    <div>
        <div className="card text-white bg-primary mb-3">
        <div className="card-header">Header</div>
        <div className="card-body">
         <h4 className="card-title">Primary card title</h4>
            <form onSubmit={articleForm}>
                <div className="form-group">
                    <label htmlFor="title" className="form-label">
                        </label>
                    <input ref={title} id="title" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="body" className="form-label">
                        </label>
                    <textarea ref={body} rows="4" className="form-control" id="body" type="text"  />
                </div>
                <button className="btn btn-success">Create</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default CreateArticle