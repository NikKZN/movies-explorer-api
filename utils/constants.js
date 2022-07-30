// ---Проверка URL
const regex = /^https?:\/\/(www\.)?[a-zA-Z\d-]+\.[\w\d\-._~:/?#[\]@!$&'()*+,;=]{2,}#?$/;

// ---Массив доменов, с которых разрешены кросс-доменные запросы
const allowedCors = [
  'https://filmoteka.nkzn.nomoredomains.xyz',
  'http://filmoteka.nkzn.nomoredomains.xyz',
  'localhost:3000',
  'http://localhost:3000',
];

// ---Адрес Mongo-сервера
const mongoAdress = 'mongodb://localhost:27017/filmsdb';

// ---Секретный ключ
const secretKey = 'dev-secret';

module.exports = {
  regex,
  allowedCors,
  mongoAdress,
  secretKey,
};
