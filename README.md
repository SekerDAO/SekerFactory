# SekerFactory Landing Page
[![Netlify Status](https://api.netlify.com/api/v1/badges/c62a4b71-c791-49b9-a846-d5529b559267/deploy-status)](https://app.netlify.com/sites/boring-swanson-bd03b1/deploys)

## Mailchimp integration
To connect Subscribe form to the Mailchimp - you need to do following:

1. Create new Signup form -> Embedded form in the Mailchim dashboard
   1. No need to configure it anyhow. Only thing we need is to create classic Embedded Form
   2. Then click on Generate Embed Code
   3. Then grab `"action"` from the `<form>` tag. It should look like `action="https://xxx.xx.list-manage.com/subscribe/post?u=<VALUE_OF_U_VARIABLE>&amp;id=<VALUE_OF_ID_VARIABLE>"`
2. Copy `.env.sample` file and rename it to be just `.env`
3. Fill in values. 
   1.  `REACT_APP_SUBSCRIBE_FORM_DOMAIN` corresponds to `xxx.xx.list-manage.com`
   2.  `REACT_APP_SUBSCRIBE_FORM_U` corresponds to `VALUE_OF_U_VARIABLE`
   3.  `REACT_APP_SUBSCRIBE_FORM_ID` corresponds to `VALUE_OF_ID_VARIABLE`
4. For deploying anywhere - you just need to pass expected content of `.env` file as Environment Variables.

That's it!
Subscribe form connected, from now on - you can collect mail addresses.