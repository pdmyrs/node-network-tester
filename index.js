const https = require("https");
const proxy = require("node-global-proxy").default;

/**
 * uses the built in https module.
 *
 * this starts a "global" proxy agent.
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

proxy.setConfig({
  http: "http://185.46.212.88:10302",
  https: "http://185.46.212.88:10302",
});

/**
 *
 * start the proxy agent
 * comment this out to see the error:
 * "Client network socket disconnected before secure TLS connection was established" 
 *
 */
proxy.start();

console.log(proxy);


let HTTPS_RESOURCE = "https://main--troweprice-rf--hlxsites.hlx.page/";
//let HTTPS_RESOURCE = "https://jsonplaceholder.typicode.com/users?_limit=2";


let request = https.get(
  HTTPS_RESOURCE,
  (res) => {
    if (res.statusCode !== 200) {
      console.error(
        `Did not get an OK from the server. Code: ${res.statusCode}`
      );
      res.resume();
      return;
    }

    let data = "";


    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("close", () => {
      console.log("Retrieved all data");
      // console.log(JSON.parse(data));
      console.log(data);
    });

  }
);
request.on("error", (err) => {
  console.error(
    `Encountered an error trying to make a request: ${err.message}`
  );
  console.log(proxy);
});


/**
 *  stop the global proxy agent.
 */
proxy.stop();
