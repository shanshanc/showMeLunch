'use strict';

require('dotenv').config();
const line = require('@line/bot-sdk');
const express = require('express');

const helper = require('./helper.js');

// create LINE SDK config from env variables
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

// create LINE SDK client
const client = new line.Client(config);

// create Express app
const app = express();

// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/callback', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then(result => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

// event handler
function handleEvent(event) {
  console.log('event: ', event.type);
  if (event.type !== 'message' || event.message.type !== 'text') {
    // ignore non-text-message event
    return Promise.resolve(null);
  }

  // create response message
  const defaultMessage = `O.o?`;
  const inputMessage = event.message.text;
  const isAskingForLunch = helper.checkIfAskingForLunch(inputMessage);
  const suggestion = helper.getRandomItem();

  const replymsg = isAskingForLunch ? suggestion : defaultMessage;

  // use reply API
  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: replymsg
  });
}

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});