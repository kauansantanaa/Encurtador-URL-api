const express = require('express');
const router = express.Router();
const { nanoid } = require('nanoid');
const validUrl = require('valid-url');

const Url = require('../models/Url');


router.post('/encurtar', async (req, res) => {
  const { urlOriginal } = req.body;
  const baseUrl = 'http://localhost:3000'; 

  if (!validUrl.isUri(urlOriginal)) {
    return res.status(400).json('URL inválida');
  }

  try {
    let url = await Url.findOne({ urlOriginal });

    if (url) {
      res.json(url);
    } else {
      const codigo = nanoid(7);
      
      url = new Url({
        urlOriginal,
        codigo,
        dataCriacao: new Date(),
      });
      
      await url.save();
      const urlCurta = `${baseUrl}/${codigo}`;
      res.status(201).json({ ...url.toObject(), urlCurta });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Erro do servidor');
  }
});


router.get('/:codigo', async (req, res) => {
  try {
    const url = await Url.findOne({ codigo: req.params.codigo });

    if (url) {
      url.cliques++;
      await url.save();
      return res.redirect(url.urlOriginal);
    } else {
      return res.status(404).json('Nenhuma URL encontrada');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Erro do servidor');
  }
});

module.exports = router;