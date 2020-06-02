import React, { useState, useEffect } from 'react'
import Nav from '../layouts/Nav'
import { Card } from 'antd'
import { useHistory } from "react-router-dom"
import queryString from 'query-string'
import axios from 'axios'
import config from '../configs/network'
import Review from '../interfaces/Review'

const Reviews:React.FC = () => {

    const [reviews, setReviews] = useState<Review[]>([])
    const history = useHistory()

    useEffect(() => {

        const searchByKeyword = async () => {

            let { query } = queryString.parse(history.location.search)
            let res = await axios.get<Review[]>(`${config.SERVER_ENDPOINT}/reviews?query=${query}`)
            let results:Review[] = res.data
    
            setReviews(results)
    
        }

        searchByKeyword()

    }, [history.location.search])

    return (
        <Nav>
            <div>
                <h2>Reviews</h2>
                {
                    reviews.map((rev, index) => {
                        return (
                            <Card key={index}>

                                <h3>id: {rev._id}</h3>
                                <p> review: {rev.review} </p>

                            </Card>
                        )
                    })
                }
                {
                    reviews.length < 1 &&
                    <div>
                        not found any review that match with <b>{ queryString.parse(history.location.search).query }</b> keyword
                    </div>
                }
            </div>
        </Nav>
    )
}

export default Reviews
