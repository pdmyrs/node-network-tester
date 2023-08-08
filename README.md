# Node Network Tester

Utility to test node network connectivity issues like certificates and proxy settings.

## Proxy Agent 
When making HTTP calls, you need to use an agent so that the proxy settings from the environment are pulled through. Otherwise you will get connection error

Here is a typical agent:
https://www.npmjs.com/package/proxy-agent

<p>Examples of using the proxy-agaent pacakge:</p>


1. node built-in **https** request module + **proxy-agent**<p>
index.js uses the node built https module so it does not requrie dependencies.<p>
`node index.js`

2. **axios** + **proxy-agent**<p>
axios-proxy-example.js has a dependency on axios.<p>
`node axios-proxy-example.js`


