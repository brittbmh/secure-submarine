const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
    const queryText = `SELECT * FROM "person" ORDER BY 'id' ASC';`;
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in person GET', error);
        res.sendStatus(500);
    });
    } else {
        res.sendStatus(403);
    }
})

module.exports = router;