# request-header-parser-ms

An app that listens for a date param and returns a JSON object of that date in natural language and unix form.

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
