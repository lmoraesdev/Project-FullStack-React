import axios from 'axios';

const livrosAPi = axios.create({ baseURL: 'http://localhost:8000/livros' });

async function getLivros() {
  const response = await livrosAPi.get('/');

  return response.data;
}

export { getLivros };
