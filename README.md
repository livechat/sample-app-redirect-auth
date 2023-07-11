# Sample Redirect App by the LiveChat Platform

> This project was bootstrapped using <a href="https://github.com/livechat/dps-cli" target="_blank">LiveChat Developer Console CLI.</a>

## 💡 About the app

The sample popup app was created to demonstrate how to implement the <a href="https://developers.livechat.com/docs/authorization/sign-in-with-livechat#redirect-1" target="_blank">redirect authorization flow</a> from the <a href="https://platform.text.com/docs/authorization/sign-in-with-livechat#accounts-sdk" target="_blank">LiveChat Accounts SDK</a> flow when building apps for <a href="https://livechat.com/" target="_blank">LiveChat</a>.

## 🚀 How to run the app

1. Create your app in <a href="https://developers.livechat.com/console" target="_blank">Developer Console</a>.
2. Add the App Authorization building block.
3. Add `http://localhost:3000` URL to the whitelist.
4. Add the `sessions--my:rw` scope.
5. Copy `client_id` from the Authorization block and paste it into the `livechat.config.json` configuration file.
6. Run the `npm install` command to install dependencies.
7. Run the `npm run dev` command to start the local development server.

## 🔗 Popup app

We've got a similar application for the <a href="https://platform.text.com/docs/authorization/sign-in-with-livechat#popup-1" target="_blank">popup auth flow</a>.

<a href="https://github.com/livechat/sample-app-popup-auth" target="_blank">See the sample popup app ></a>

## 🤔 Popup or redirect?

Not sure which flow to use in your application? <a href="https://developers.livechat.com/updates/learn-authorization-with-sample-apps/" target="_blank">Read our blog post.</a>

## <a href="https://platform.text.com/" target="_blank">Text Platform</a>: who are we?

Behind <a href="https://www.text.com/" target="_blank">Text</a>, there’s a <a href="https://www.text.com/team/" target="_blank">team of passionate people</a> building online customer service software with online chat, help desk software, chatbot, and web analytics capabilities.

With a suite of five products (<a href="https://www.livechat.com" target="_blank">LiveChat</a>, <a href="https://chatbot.com/" target="_blank">ChatBot</a>, <a href="https://helpdesk.com/" target="_blank">HelpDesk</a>, <a href="https://www.knowledgebase.com/" target="_blank">KnowledgeBase</a>, and <a href="https://openwidget.com/" target="_blank">OpenWidget</a>) and their powerful APIs, we power customer communication for 36,000 companies in 150 countries.

<a href="https://platform.text.com/" target="_blank">The Platform</a> is a range of products and services that can be used to build a variety of communication tools for businesses. Our <a href="https://platform.text.com/developer-program" target="_blank">Developer Program</a> and <a href="https://www.livechat.com/marketplace/" target="_blank">Marketplace</a> create an open ecosystem for developers, partners, and customers. With our <a href="https://platform.text.com/" target="_blank">advanced APIs</a> and comprehensive <a href="https://platform.text.com/docs" target="_blank">documentation</a>, you can shape the future of communication with us — starting today.
