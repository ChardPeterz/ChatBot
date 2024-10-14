const express = require ("express");
const bodyParser = require ("body-parser");
const cors = require ("cors");

const {Configuration, OpenAiApi } = require ("openai");

const config = new Configuration ({
    apiKey: "#",
});


