


const axios = require('axios');
const proxy = require('node-global-proxy').default;

/**
 *
 * This example uses Axios to make an HTTPS GET call.
 * It works fine with no proxy agent, but I am using node-global-proxy
 * just for testing with a proxy agent.
 */

//https://www.npmjs.com/package/https-proxy-agent?activeTab=readme




proxy.setConfig({
  http: "http://185.46.212.88:10302",
  https: "http://185.46.212.88:10302"
});

// let HTTPS_RESOURCE = "https://main--troweprice-rf--hlxsites.hlx.page/";
let HTTPS_RESOURCE = "https://jsonplaceholder.typicode.com/users?_limit=2";
const testOk = async () => {

/**
 * Stop the proxy if it was somehow running.
 */
  proxy.stop();
  res = await axios.get(HTTPS_RESOURCE, {
    timeout: 3000,
  });
  console.log(res.data);

  console.log(proxy);

};

testOk();



