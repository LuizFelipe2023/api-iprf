import express from 'express';
import { retornaInss, retornaIPRF } from './funcoes/calculo.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3000;

app.get('/calcular', (req, res) => {
    const salarioBruto = parseFloat(req.query.salarioBruto);
    const inss = retornaInss(salarioBruto);
    const iprf = retornaIPRF(salarioBruto);

    const salarioLiquido = salarioBruto - inss - iprf;

    if (inss.error) {
        return res.status(400).json({ error: inss.error });
    }

    if (iprf.error) {
        return res.status(400).json({ error: iprf.error });
    }

    res.json({ inss, iprf, salarioLiquido });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
