const supertest = require('supertest')
const express = require('../src/configs/express')
const Models = require('./models/fakeModel')
const server = express(Models).server;

describe('Server Working', () => {

    const request = supertest(server)

    it('server is runable', (done) => {

        request
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .end(res => {
                done()
            })

    })

})

describe('Review routes', () => {

    const request = supertest(server)

    describe('Get Review by id', () => {
    
        it('found id equal to 1', (done) => {
    
            request
                .get('/reviews/1')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .then((res) => {

                    expect(res.body._id).toEqual(1)
                    done()
    
                })
                .catch((error) => {
                    done(error)
                })
    
        })

        it('found id equal to 2', (done) => {
    
            request
                .get('/reviews/2')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .then((res) => {

                    expect(res.body._id).toEqual(2)
                    done()
    
                })
                .catch((error) => {
                    done(error)
                })
    
        })

        it('Response null when review id is not a number', (done) => {
    
            request
                .get('/reviews/notanumber')
                .send({ review: "     \n     " })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .then((res) => {

                    expect(res.body).toEqual(null)
                    done()
    
                })
                .catch((error) => {
                    done(error)
                })
    
        })
    
    })

    describe('Get Review by keyword', () => {
    
        it('Response Error when have no query sent', (done) => {
    
            request
                .get('/reviews')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(412)
                .then((res) => {

                    expect(res.body.error).toEqual("Not Found Query")
                    done()
    
                })
                .catch((error) => {
                    done(error)
                })
    
        })

        it('Response empty array when have no found', (done) => {
    
            request
                .get(encodeURI('/reviews?query=ไม่หรอกคำนี้อะ'))
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .then((res) => {

                    expect(res.body.length).toEqual(0)
                    done()
    
                })
                .catch((error) => {
                    done(error)
                })
    
        })

        it('found a review', (done) => {
    
            request
                .get(encodeURI('/reviews?query=ตำร้อยเอ็ด'))
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .then((res) => {

                    expect(res.body.length).toEqual(1)
                    done()
    
                })
                .catch((error) => {
                    done(error)
                })
    
        })

        it('found more than 5 reviews', (done) => {
    
            request
                .get(encodeURI('/reviews?query=โรตีทุเรียน'))
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .then((res) => {

                    expect(res.body.length).toEqual(5)
                    done()
    
                })
                .catch((error) => {
                    done(error)
                })
    
        })
    
    })

    describe('Edit Review', () => {
    
        it('Response Error when review not exist in database', (done) => {
    
            request
                .put('/reviews/500')
                .send({ review: "edited" })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(412)
                .then((res) => {

                    expect(res.body.error).toEqual("Not Found Review")
                    done()
    
                })
                .catch((error) => {
                    done(error)
                })
    
        })

        it('Response Error when review not exist in request body', (done) => {
    
            request
                .put('/reviews/1')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(412)
                .then((res) => {

                    expect(res.body.error).toEqual("Not Found Review in Request Body")
                    done()
    
                })
                .catch((error) => {
                    done(error)
                })
    
        })

        it('Response Error when review is empty', (done) => {
    
            request
                .put('/reviews/1')
                .send({ review: "     \n     " })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(412)
                .then((res) => {

                    expect(res.body.error).toEqual("Not Found Review in Request Body")
                    done()
    
                })
                .catch((error) => {
                    done(error)
                })
    
        })

        it('can edit reviews', (done) => {
    
            request
                .put('/reviews/1')
                .send({ review: "edited" })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .then((res) => {

                    expect(res.body.review).toEqual("edited")
                    done()
    
                })
                .catch((error) => {
                    done(error)
                })
    
        })

    })

})