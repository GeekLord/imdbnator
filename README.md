# IMDbnator

IMDBnator is a free, simple and easy web app to manage movies. Movies of any format like `[FOO.AgS]Batman.Begins.DVDRip.2005.www_ganool.ag` can be loaded from the computer or from a webpage and after a few seconds of processing, it catalog the entire movies collection in a beautiful and organized manner.

You can sort, search, filter, watch trailers before your next movie and more! :)

![Home Page Screenshot](./images/screenshot.jpg)

# Requirements

You will need to have [Node.js](https://nodejs.org/) installed. We recommend Node.js v18+.

# Install

```sh
$ git clone git@github.com:GeekLord/imdbnator.git
$ cd imdbnator
$ npm install --legacy-peer-deps
$ npm run dev
```

That's it! You're all setup to develop on the imdbnator client end. Note that for running locally, you can pass `API_HOST` parameter to change the backend endpoint, otherwise it defaults to a local backend at localhost:8081. For example, to use the production backend test URL run `API_HOST=api.imdbnator.com npm run dev`.
