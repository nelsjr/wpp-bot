const app = require('express')();
const fetch = require('node-fetch');
const {json} = require("express");

async function get() {
    let url = 'https://restcountries.com/v3.1/name/brazil';
    const response = await fetch(url);
    return await response.json();
}


module.exports = {get};