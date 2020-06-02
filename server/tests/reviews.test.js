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

})