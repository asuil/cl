const express = require('express');
const db = require('../utils/DB');

const router = express.Router();
router.get('/', (req, res) => {
  /*
  db({
    onSuccess: () => { res.send('Conectado!'); },
    onFailure: (err) => { res.send(`:(\n${err}`); },
  });
  */
  res.send(`Body: ${JSON.stringify(req.body)}\nQuery: ${JSON.stringify(req.query)}`);
});

module.exports = router;
