import * as https from 'https';
import { ProxyAgent } from 'proxy-agent';


/**
 * uses the built in https module.
 *
 * uses the 
 *
 * the proxy.start() function starts the proxy and it keeps running until
 * proxy.stop() is called.
 *
 * see https://github.com/wwwzbwcom/node-global-proxy
 *
 *
 * NOTE: if you run this and then comment out proxy.start() and proxy.stop() it
 * still works on the next run !!!
 *
 */

// The correct proxy `Agent` implementation to use will be determined
// via the `http_proxy` / `https_proxy` / `no_proxy` / etc. env vars
const agent = new ProxyAgent();



function testOk () {
  // The rest works just like any other normal HTTP request
  https.get('https://jsonip.com', { agent }, (res) => {
    console.log(res.statusCode, res.headers);
    res.pipe(process.stdout);
  });
  }
  
  testOk();


function testBad () {
// remove the agent will cause an error.
https.get('https://jsonip.com', /*{ agent },*/ (res) => {
  console.log(res.statusCode, res.headers);
  res.pipe(process.stdout);
});
}

//testBad();