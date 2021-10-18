const sdk = require('node-appwrite');
const express = require('express');
const { json } = require('express/lib/response');
const cors = require('cors')

const app = express()
app.use(express.static('assets'))
app.use(cors())

// Init SDK
let client = new sdk.Client();
let database = new sdk.Database(client);

client
    .setEndpoint('[API_Endpoint]')
    .setProject('[PROJECT_ID]')
    .setKey('[API_KEY]') // Your secret API key
;

app.get('/', (req, res) => {
    res.send(index.html);
 });
 
app.get('/pokemon', async (req,res) => {
    let data = await database.listDocuments('[COLLECTION_ID]');
    res.send(data.documents);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App running on port ${ PORT }`);
});
