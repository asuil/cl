const express = require('express');
const db = require('../utils/DB');

const router = express.Router();
router.get('/', (req, res) => {
  db({
    onSuccess: () => { res.send('Conectado!'); },
    onFailure: (err) => { res.send(`:(\n${err}`); },
  });
});

module.exports = router;
