const express = require('express');
const supabaseUserSession = require('./SupabaseClient').GetSupabaseUserSession;
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', async (req, res) => {
    try {

        const { data, error } = await supabaseUserSession()
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
