const express = require('express');

const app = express;
const router = express.Router();
const todosRouter = require('./nproutes/todos.router.js');

app.listen(3000, () => {
  console.log('서버 실행');
});
