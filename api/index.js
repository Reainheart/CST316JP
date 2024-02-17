const express = require('express');
const supabase = require('./config')
const app = express();
const port = 3000;

app.use(express.json());
require('dotenv').config();

/*app.get('/api/Objects', async (req, res) => {
    try {
        const url = process.env.SupabaseURL;
        const key = process.env.SupabaseAnonKey;

        const response = await fetch(`${url}/objects?select=StructureName,StructureDescription`, {
            headers: {
                'apikey': key
            }
        });

        consolee.log(response);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});*/

app.get('/', async (req, res) => {
    try {

        const { data, error } = await supabase
            .from('Objects')
            .select('StructureName, StructureDescription');
        
        if (error) {
            throw new Error(error.message);
        }

        res.json(data);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
