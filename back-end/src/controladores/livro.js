function getLivros(req, res) {
  try {
    res.send('Olá mundo da alura do Brasil');
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getLivros,
};
