const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

require('dotenv').config();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

