/**
 *
 * This example uses Axios to make an HTTPS GET call.
 * It works fine with no proxy agent.
 */

//https://www.npmjs.com/package/https-proxy-agent?activeTab=readme

const axios = require('axios');


// let HTTPS_RESOURCE = "https://main--troweprice-rf--hlxsites.hlx.page/";
let HTTPS_RESOURCE = "https://jsonplaceholder.typicode.com/users?_limit=2";
let HTTP_RESOURCE = "http://ip-api.com/json";

const testOk = async () => {

  res = await axios.get(HTTPS_RESOURCE, {
    timeout: 3000,
  });
  console.log(res.data);
};

testOk();


