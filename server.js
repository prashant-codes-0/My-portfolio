const app = require('./app');

const PORT = process.env.PORT || 3999;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
