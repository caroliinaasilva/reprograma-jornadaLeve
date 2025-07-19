const app = require('./src/app.js');

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log('Server running on port', PORT);
});
