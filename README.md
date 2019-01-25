<p align="center">
  <img src="https://user-images.githubusercontent.com/4269260/51730243-965ef980-202b-11e9-9e32-a45d059de6ca.png" height="250" width="350">
  <img src="https://user-images.githubusercontent.com/4269260/51730245-9828bd00-202b-11e9-9280-f6988eec0afd.png" height="250" width="350">
</p>

# Request Header Parser Micro-service

An app that reads your browser and returns a JSON object with your ip-address, language and software.

```shell
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

```shell
$ npm install
$ npm start
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
| ------- | ----------- |
| npm install | Install dependencies in package.json |
| node server.js | Start server @ **localhost:8000** |
