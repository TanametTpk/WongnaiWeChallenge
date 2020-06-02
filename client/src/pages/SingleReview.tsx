import React, { useState, useEffect, ChangeEvent } from 'react'
import Nav from '../layouts/Nav'
import {RouteComponentProps} from "react-router-dom"
import Review from '../interfaces/Review'
import axios from 'axios'
import config from '../configs/network'
import { Card, Button } from 'antd'

interface ReviewProps {

    id: string

}

const SingleReview:React.FC<RouteComponentProps<ReviewProps>> = ({ match }) => {

    const [review, setReview] = useState<Review | null>(null)
    const [ isEditing, setIsEditing ] = useState<boolean>(false)
    const [editedReview, setEditedReview] = useState<string>("")

    useEffect(() => {

        const searchById = async() => {

            let res = await axios.get<Review>(`${config.SERVER_ENDPOINT}/reviews/${match.params.id}`)
            setReview(res.data)
            setEditedReview(res.data.review)
    
        }

        searchById()

    }, [match.params.id])

    const onChangeReview = (event: ChangeEvent<HTMLInputElement>) => {

        setEditedReview(event.target.value)
        
    }

    const editReview = async() => {

        let res = await axios.put<Review>(`${config.SERVER_ENDPOINT}/reviews/${match.params.id}`, { review: editedReview })
        setReview(res.data)
        setIsEditing(false)

    }

    return (
        <Nav>
            <div>
                <h2>Review</h2>

                {
                    review ?
                        <Card>
                            <h3>id : {review?._id}</h3>
                            {
                                isEditing ?
                                    <div>
                                        <input value={editedReview} onChange={onChangeReview} placeholder="write review here" />
                                        <Button onClick={() => setIsEditing(false)}>Cancel</Button>
                                        <Button type="primary" onClick={editReview}>Edit Review</Button>
                                    </div>
                                :
                                    <div>
                                        <p> review : {review?.review} </p>
                                        <Button onClick={() => setIsEditing(true)}>Edit</Button>
                                    </div>
                            }
                        </Card>
                    :
                        <div>
                            not found review
                        </div>
                }

            </div>
        </Nav>
    )
}

export default SingleReview
