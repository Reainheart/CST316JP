const express = require('express');
const GetSampleCodeSLinkedList = require('./SB/GetSampleCodeSLinkedList');
const supabaseUserSession = require('./SupabaseClient').GetSupabaseUserSession;
const app = express();
const port = 3000;

app.use(express.json());

app.get('/GetStructures', require('./SB/GetStructures'));

app.get('/GetNode', require('./SB/GetNode'));

app.get('/GetArray', require('./SB/GetArray'));

app.get('/GetSLinkedList', require('./SB/GetSLinkedList'));

app.get('/GetSampleCodeNode', require('./SB/GetSampleCodeNode'));

app.get('/GetSampleCodeArray', require('./SB/GetSampleCodeArray'));

app.get('/GetSampleCodeSLinkedList', require('./SB/GetSampleCodeSLinkedList'));

app.get('/GetNodeLearnPage', require('./SB/GetNodeLearnPage'));

app.get('/GetArrayLearnPage', require('./SB/GetArrayLearnPage'));

app.get('/GetSLinkedListLearnPage', require('./SB/GetSLinkedListLearnPage'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});