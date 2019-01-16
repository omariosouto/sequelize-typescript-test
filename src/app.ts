import * as express from 'express'

export const app = express()

app.get('/clients', (req, res) => {
    res.json({
        users: [
            {
                name: 'Alo alo w brazil'
            }
        ]
    })
})
