const express = require('express');
const supabaseUserSession = require('./SupabaseClient').GetSupabaseUserSession;
const app = express();
const port = 3000;

app.use(express.json());

app.get('/GetStructures', require('./SB/GetStructures'));

app.get('/GetNode', require('./SB/GetNode'));

app.get('/GetSampleCodeNode', require('./SB/GetSampleCodeNode'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

