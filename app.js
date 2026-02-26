const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Notre CI/CD est opérationnel !    '   );  
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

app.listen(port, () => {
    console.log(`L'application est en cours d'exécution sur http://localhost:${port}`);
});

