const express = require('express');
const supabaseUserSession = require('./SupabaseClient').GetSupabaseUserSession;
const app = express();
const port = 3000;

app.use(express.json());

app.get('/GetStructures', require('./SB/GetStructures'));

app.get('/GetNode', require('./SB/GetNode'));

app.get('/GetArray', require('./SB/GetArray'));

app.get('/GetSampleCodeNode', require('./SB/GetSampleCodeNode'));

app.get('/GetNodeLearnPage', require('./SB/GetNodeLearnPage'));

app.get('/GetArrayLearnPage', require('./SB/GetArrayLearnPage'));

app.get('/GetSampleCodeArray', require('./SB/GetSampleCodeArray'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});