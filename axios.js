/**
 *
 * This example uses Axios to make an HTTPS GET call.
 * It works fine with no proxy agent.
 * 
 * 
 *  testOk is a basic function
 *  testAdobe is something I used to troubleshoot the Adobe App Builder network errors.
 * 
 */

//https://www.npmjs.com/package/https-proxy-agent?activeTab=readme

const axios = require("axios");


// let HTTPS_RESOURCE = "https://main--troweprice-rf--hlxsites.hlx.page/";
let HTTPS_URL = "https://jsonplaceholder.typicode.com/users?_limit=2";
let HTTP_URL = "http://ip-api.com/json";

const testOk = async () => {

  res = await axios.get(HTTPS_URL, {
    timeout: 3000,
  });
  console.log(res.data);
};

testOk();














const ADOBE_PROJECT_ACCESS_TOKEN =
  "eyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LWF0LTEuY2VyIiwia2lkIjoiaW1zX25hMS1rZXktYXQtMSIsIml0dCI6ImF0In0.eyJpZCI6IjE3MDA1MDMzOTc1NTFfZTY1ODIwMzktYTNhMC00YTM4LWIzNTAtNjQxZmM3ZjVmMWIxX3VlMSIsIm9yZyI6IkQxNUQxNUYzNTRGNjQ3NzcwQTRDOThBNEBBZG9iZU9yZyIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiIzNGVjODRkMDNlZDE0MjM5YjE3ZGQ4OGMwNzA3YjExYiIsInVzZXJfaWQiOiI1RDIzN0I2QTY1NTY3NDVDMEE0OTVDQzdAdGVjaGFjY3QuYWRvYmUuY29tIiwiYXMiOiJpbXMtbmExIiwiYWFfaWQiOiI1RDIzN0I2QTY1NTY3NDVDMEE0OTVDQzdAdGVjaGFjY3QuYWRvYmUuY29tIiwiY3RwIjozLCJtb2kiOiI0ZmQyODUwZCIsImV4cGlyZXNfaW4iOiI4NjQwMDAwMCIsImNyZWF0ZWRfYXQiOiIxNzAwNTAzMzk3NTUxIiwic2NvcGUiOiJyZWFkX3BjLmRtYV9hZW1fYW1zLG9wZW5pZCxBZG9iZUlELHJlYWRfb3JnYW5pemF0aW9ucyxhZGRpdGlvbmFsX2luZm8ucHJvamVjdGVkUHJvZHVjdENvbnRleHQifQ.fKOSQ-UNJzEA_BPD7tnEIp7jXOlSosSD2Ms2jTniMDz6uaxedMoalua3y_TazusYwLfryHk8T5zWJKyg6CR1hTe0-N8-8Ya9Hg7596HStxT540oblQWsiHrYQXz7j4C2C7AbU7jIrjW9ppZUfJE9LgnDvMjy43I9GojPKn9Eiu8ejBnd66khIPmQgk1SD7XkEwb3b-sUSEy80rUL_dPaiUA3vaNB0RsjeEVoHsoR-ueY_QXAMLeWWA9jndKHhCuegXpfjLMqGJQI2KKvGBrPg1CUv_zwJnqKkyGnYn6ffFhsSF2putD-Tbr3-tdhANk-2fciAQMTYXHVZ0l83XBzog";
const ADOBE_APP_BUILDER_TEMPLATES_URL =
  "https://360030-templateregistryapi.adobeioruntime.net/apis/v1/templates";

const testAdobe = async () => {
  try {
    const response = await axios.get(ADOBE_APP_BUILDER_TEMPLATES_URL, {
      timeout: 30000,
      headers: { Authorization: `Bearer ${ADOBE_PROJECT_ACCESS_TOKEN}` },
    });
    console.log(response);
  } catch (error) {

    // this catch error code is from axios docs
    // see https://axios-http.com/docs/handling_errors

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    }

    console.log("Error", error.message);
  }
};

//testAdobe();

console.log("ready...");
