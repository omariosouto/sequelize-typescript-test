import * as express from 'express'
import {sequelize} from './infra/database/sequelize'
import { Person } from './domain/Person';

const app = express()


app.get('/', (req, res) => {
    res.send('alo')
})

const port = 3000;

(async () => {
    await sequelize.sync();

    // active record
    const person = new Person({ birthday: new Date(), name: 'Mario', surname: 'Souto' })
    person.save()

    app.listen(port, () => {
        console.log(`Server up and running at ${port}`)
    })
})()

