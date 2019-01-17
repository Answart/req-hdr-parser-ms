# req-hdr-parser-ms AKA Request Header Parser Micro-service

An app that reads your browser and returns a JSON object with your ip-address, language and software.

```
{
  "ipaddress": "xxx.xxx.xxx.xxx",
  "language": "en-US",
  "software": "Macintosh; Intel Mac OS X 10.13; rv:58.0"
}
```

User Stories
------------

- I can get the IP address, language and operating system for my browser.

Tech Stack and Key Packages
---------------------------

* [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for node

Getting Started
---------------

Install dependencies then launch app @ [localhost:8000](http://localhost:8000)
```
$ npm install
$ node server.js
```

Example routes:
```
http://localhost:8000/
http://localhost:8000/api/whoami
```

View [app in production](https://answart-rqp-ms.herokuapp.com) (if still active)

```
https://answart-rqp-ms.herokuapp.com
https://answart-rqp-ms.herokuapp.com/api/whoami
```

NPM Commands
------------

| Command | Description |
|---------|-------------|
|npm install|Install dependencies in package.json|
|node server.js|Start server port @ **localhost:8000**|
