### Show Me Lunch
A linebot to give lunch ideas in Mandarin

### Requirements
* [Node](https://nodejs.org/)
* [Ngrok](https://dashboard.ngrok.com/get-started/setup) (for developers)

### Getting Started
`npm install`\
`npm start`


### Local Development
Run Webhook locally using ngrok

* Download and unzip ngrok, go the the unzipped folder
* Run `./ngrok http 3000` to get a forwarding URL
* Copy/paste the forwarding URL in linebot settings
  - Channel Settings -> Use webhooks -> Enabled
  - Channel Settings -> Webhook URL -> {forwardingURL}/callback ('callback' is what app listens to in index.js) -> click the Verify button

---
### Demo
<img src="assets/qrCode.png" width="100">
