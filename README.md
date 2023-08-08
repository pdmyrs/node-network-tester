# Node Network Tester

Utility to test node network connectivity issues like certificates and proxy settings.

## Proxy Agent 
When making HTTP calls, you need to use an agent so that the proxy settings from the environment are pulled through. Otherwise you will get connection error

Here is a typical agent:
https://www.npmjs.com/package/proxy-agent


### 1. use node built-in https request module + proxy-agent
index.js uses the node built https module so it does not requrie dependencies.
`node index.js`
### 2. uses axios + proxy-agent
axios-proxy-example.js has a dependency on axios.
`node axios-proxy-example.js`


