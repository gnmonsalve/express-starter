'use strict'

const request = require('supertest')
const expect = require('chai').expect


const app = require('../app')


describe('loading express', function () {
  it('responds to /', done => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        expect(res.body.status).to.equal('on')
        done()
      })
  })
  it('404 everything else', done => {
    request(app)
      .get('/foo/bar')
      .expect(404, done)
  })

  it('entregar mensaje',done =>{
    request(app)
      .post('/add?a=Hola')
      .expect(200)
      .end((err, res) => done())
  })
  it('entregar mensaje',done =>{
    request(app)
      .post('/add?a=MiPrimerMensaje')
      .expect(200)
      .end((err, res) => done())
  })
  it('pedir mensajes',done =>{
    request(app)
      .get('/messages')
      .expect(200)
      .end((err, res) => {
        const m = res.body.messages;
        console.log(m);
        done()
      })
  })
})

// TIP: To send query params use:
//  .send({ key: 'value' })
