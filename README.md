# Sample Redirect App by the LiveChat Platform

> This project was bootstrapped using <a href="https://github.com/livechat/dps-cli" target="_blank">LiveChat Developer Console CLI.</a>

## 💡 About the app

The sample popup app was created to demonstrate how to implement the <a href="https://developers.livechat.com/docs/authorization/sign-in-with-livechat#redirect-1" target="_blank">redirect authorization flow</a> from the LiveChat Accounts SDK flow when building apps for LiveChat.

## 🚀 How to run the app

1. Create your app in <a href="https://developers.livechat.com/console" target="_blank">Developer Console</a>.
2. Add the App Authorization building block.
3. Add `http://localhost:3000` URL to the whitelist.
4. Add the `sessions--my:rw` scope.
5. Copy `client_id` from the Authorization block and paste it into the `livechat.config.json` configuration file.
6. Run the `npm install` command to install dependencies.
7. Run the `npm run dev` command to start the local development server.

## 🔗 Popup app

We've got a similar application for the redirect auth flow.

<a href="https://github.com/livechat/sample-app-popup-auth" target="_blank">See the sample popup app ></a>

## 🤔 Popup or redirect?

Not sure which flow to use in your application? <a href="https://developers.livechat.com/updates/learn-authorization-with-sample-apps/" target="_blank">Read our blog post.</a>
