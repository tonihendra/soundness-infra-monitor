const express = require('express');
const app = express();
const port = 3001;

app.get('/status', (req, res) => {
  res.json({ status: 'ok', service: 'Soundness Infra Monitor Backend' });
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
