# Node Network Tester

Utility to test node network connectivity issues like certificates and proxy settings.

## Proxy Agent 
When making HTTP calls, you need to use an agent so that the proxy settings from the environment are pulled through. Otherwise you will get connection error

Here is a typical agent:
[proxy-agent](https://www.npmjs.com/package/proxy-agent)

Here is another one:
[node-global-proxy](https://github.com/wwwzbwcom/node-global-proxy)

<p>Examples of https get requests using various http implementations and proxy agents:</p>


1. node built-in **https** + **node-global-proxy"**<p>
`node index.js`


2. node built-in **https** + **proxy-agent"**<p>
`node index.mjs`


3. **axios**<p>
axios supplies it's own proxy agent that reads from env vars.<p>
`node axios-no-proxy-agent.js`


4. **axios** + **node-global-proxy"**<p>
axios doesn't need it but I added in node-global-proxy just for testing.<p>
`node axios-with-proxy-agent.js`
