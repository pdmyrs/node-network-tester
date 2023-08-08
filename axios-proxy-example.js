const axios = require('axios');
const proxy = require('node-global-proxy').default;

/** 
 * 
 * This example uses Axios to make Http GET requests.
 * line 35 is run after the proxy agent has stopped so it shows you
 * the kinds of errors you can expect without a proxy if you are 
 * behind a corporate firewall
 * 
 */

let PROXY_URL = "http://185.46.212.88:10302";

const test = async () => {


    proxy.setConfig(PROXY_URL);
    console.log(proxy.getConfig());

    proxy.start();
    res = await axios.get("http://ip-api.com/json", {
        timeout: 3000
    });
    console.log(res.data);

}

test();