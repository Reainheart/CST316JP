const express = require("express");
const cors = require("cors"); // Import the CORS package
const app = express();
const port = 3000;

// Enable CORS for all requests
app.use(cors());

app.use(express.json());

// Define your API endpoints
app.get("/GetStructures", require("./SB/GetStructures"));
app.get("/GetNode", require("./SB/GetNode"));
app.get("/GetArray", require("./SB/GetArray"));
app.get("/GetSampleCodeNode", require("./SB/GetSampleCodeNode"));
app.get("/GetLearnPageInfo", require("./SB/GetLearnPageInfo"));
app.get("/GetNodeLearnPage", require("./SB/GetNodeLearnPage"));
app.get("/GetArrayLearnPage", require("./SB/GetArrayLearnPage"));
app.get("/GetSampleCodeArray", require("./SB/GetSampleCodeArray"));
app.get("/GetSampleCodeLinkedList", require("./SB/GetSampleCodeLinkedList"));
app.get("/GetSampleCodeDoublyLinkedList", require("./SB/GetSampleCodeDoublyLinkedList"));
app.get("/GetSampleCodeCircularLinkedList", require("./SB/GetSampleCodeCircularLinkedList"));

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
