import * as chai from 'chai'
import * as supertest from 'supertest'
import { app } from '../../src/app'


export const expect = chai.expect
export const request = () => supertest(app)
