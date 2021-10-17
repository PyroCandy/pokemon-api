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
    .setEndpoint('http://localhost/v1')
    .setProject('616c1002bde30')
    .setKey('e38d9d4e7dadf7d913adb83aaaba3614ebdbb5b5c9001fc3133259895763583d7ebc260c456b849ea3a2a685645c427b85fc8eab201cb72696d07cc4a0a5952b5e337b08155227058d00b25aca63771ec8c7bee90125ef3466fb9ef3dad1fc2fc67e88ba6dd0827990fbb43c74b26cd651539e6d7230cc79f67ec08fa67cdd16') // Your secret API key
;

app.get('/', (req, res) => {
    res.send(index.html);
 });
 
app.get('/pokemon', async (req,res) => {
    let data = await database.listDocuments('616c1330d96ee');
    res.send(data.documents);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App running on port ${ PORT }`);
});