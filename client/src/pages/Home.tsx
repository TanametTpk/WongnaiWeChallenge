import React, { useState, ChangeEvent } from 'react'
import { useHistory } from 'react-router-dom'

const Home:React.FC = () => {

    const [id, setId] = useState<string>("")
    const [keyword, setKeyword] = useState<string>("")
    const history = useHistory()

    const searchById = () => {

        if (id.trim().length < 1) return
        history.push(`/reviews/${id}`)

    }

    const searchByKeyword = () => {

        if (keyword.trim().length < 1) return
        history.push(`/reviews?query=${keyword}`)

    }

    const onIdChange = (event:ChangeEvent<HTMLInputElement>) => {
        setId(event.target.value)
    }

    const onKeywordChange = (event:ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value)
    }

    return (
        <div>
            <div>
                <h2>Search Reviews By Id</h2>
                <input
                    placeholder="Enter id here"
                    value={id}
                    onChange={onIdChange}
                />
                <button onClick={searchById} >Search by Id</button>
            </div>

            <div>
                <h2>Search Reviews By Keyword</h2>
                <input
                    placeholder="Enter keyword here"
                    value={keyword}
                    onChange={onKeywordChange}
                />
                <button onClick={searchByKeyword} >Search by Keyword</button>
            </div>

        </div>
    )
}

export default Home
