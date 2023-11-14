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


// let HTTPS_RESOURCE = "https://main--troweprice-rf--hlxsites.hlx.page/";
//let HTTPS_RESOURCE = "https://jsonplaceholder.typicode.com/users?_limit=2";
let HTTPS_RESOURCE = "https://developers.adobe.io/console/organizations";

let TOKEN = "eyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LWF0LTEuY2VyIiwia2lkIjoiaW1zX25hMS1rZXktYXQtMSIsIml0dCI6ImF0In0.eyJpZCI6IjE2OTk1NTUwMzcyNzdfZGJmMmEzOGUtZjNkMC00YzQwLWIzMTEtNGNhZjIwYWYyMmM3X3VlMSIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiJhaW8tY2xpLWNvbnNvbGUtYXV0aCIsInVzZXJfaWQiOiI0ODRDM0ZFNzU5NzBBM0FDMEE0OTVFRUNAdHJvd2VwcmljZS5jb20iLCJzdGF0ZSI6IntcImlkXCI6XCJkZWQzNmZkZVwiLFwiY29kZV90eXBlXCI6XCJhY2Nlc3NfdG9rZW5cIixcImNsaWVudF9pZFwiOlwiYWlvLWNsaS1jb25zb2xlLWF1dGhcIixcInBvcnRcIjpcIjY1MDUxXCIsXCJlbnZcIjpcInByb2RcIn0iLCJhcyI6Imltcy1uYTEiLCJhYV9pZCI6IjQ4NEMzRkU3NTk3MEEzQUMwQTQ5NUVFQ0B0cm93ZXByaWNlLmNvbSIsImN0cCI6MCwiZmciOiJYNTNQWFBEWUZQUDVNSFVLRk1RVllIQUFUUSIsInNpZCI6IjE2OTQ1NDIxNjg1MTdfNmUyMTBhNzEtYmJhOC00NzQ2LWFkYzctYTdmZTg1Y2Y1MjY4X3VlMSIsInJ0aWQiOiIxNjk5NTU1MDM3Mjc3X2ZmMjgzOGRmLTQzN2MtNDMyMC05ZTZhLTIzYjFkYzViY2JmM191ZTEiLCJtb2kiOiJhZjE0MDMzOCIsInBiYSI6Ik9SRyxNZWRTZWNOb0VWLExvd1NlYyIsInJ0ZWEiOiIxNzAwNzY0NjM3Mjc3IiwiZXhwaXJlc19pbiI6Ijg2NDAwMDAwIiwic2NvcGUiOiJzZXJ2aWNlX3ByaW5jaXBhbHMucmVhZCxvcGVuaWQsQWRvYmVJRCxyZWFkX29yZ2FuaXphdGlvbnMsZ25hdix1bmlmaWVkX2Rldl9wb3J0YWwscmVhZF9wYy5kbWFfYnVsbHNleWUsYWRvYmVpb19hcGksc2VydmljZV9wcmluY2lwYWxzLndyaXRlLHJlYWRfY2xpZW50X3NlY3JldCxhZGRpdGlvbmFsX2luZm8ucm9sZXMsbWFuYWdlX2NsaWVudF9zZWNyZXRzLGFkZGl0aW9uYWxfaW5mby5wcm9qZWN0ZWRQcm9kdWN0Q29udGV4dCIsImNyZWF0ZWRfYXQiOiIxNjk5NTU1MDM3Mjc3In0.OhF7CVRw7KqHH1yZOa5qMUb54E8YB58ZoMS8JGgWco05k2tcom0sx_rVJoljOMvxgHCv90i2pZLTdSk9TfwlYQXp7LKH25YemNJSd_TD9Fo6oCFm4qYPfry_5VejLc-hy2Ku5XAlq9tPmPz8uXENA6mImmbKUpjpsvX8_1LLF12KsElzu7yfQS6FuMwQHwfL6_y5RqLkBUIE66ClRf0G2YaeNfku_FtwNESpCuHgQZzrNMpj6eOnTzPGjNPfxDWGZZpNCJ50jBg0TDrnV0Q9cM284mjaVMEfwog_ZGNjycMV0eNt6ujgQj7A_r0oV9ByPx4mFoWwV18Wj_zYt1wglw"; 



let request = https.get(
  HTTPS_RESOURCE,
  {
    headers: { Authorization: `Bearer ${TOKEN}` }
  },
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
// proxy.stop();
