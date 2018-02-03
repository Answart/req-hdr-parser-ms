# request-header-parser-ms

An app that reads your browser and returns a JSON object with your ip-address, language and software.

## User Stories

- I can get the IP address, language and operating system for my browser.

## Install

### Local
```
npm install
node server.js
```

```
http://localhost:8000/
http://localhost:8000/api/whoami
```

### Production

```
https://answart-rqp-ms.herokuapp.com
https://answart-rqp-ms.herokuapp.com/api/whoami
```

## Output

```
{"ipaddress":"xxx.xxx.xxx.xxx","language":"en-US","software":""Macintosh; Intel Mac OS X 10.13; rv:58.0""}
```
