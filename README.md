# Vital front-end test

This project is bootstrapped with Vite https://vitejs.dev/

Install instructions

`yarn`
`yarn start`

## The API issue

Unfortunately, the biomarker api [biomarker api](https://docs.tryvital.io/api-reference/lab-testing/biomarkers) has a CORS error when accessed from a browser.

Also, it does seem strange to access an api with a sensitive api key from the front-end. I'm looking forwards to finding out what the right way of integrating with it is, during the follow up call.

Therefore, in order to progress, I have mocked the api response, when the api errors (which it does in [CreatePanelModal, line 164](https://github.com/romanstan1/vital-front-end/blob/65361d49be6b2583bf55f0786b53715c703eb941/src/components/CreatePanelModal/CreatePanelModal.tsx#L165C1-L165C1)).

## Design decisions

Given that the task is an extension of the existing Vital platform, it only seemed right to extend much of the same branding and UI features into the task, such as the colours, fonts, the button and modal styling. I did consider re-branding Vital, but concluded that it felt out of scope for this tech test.

I re-created some of the existing UI, including some of the existing dashboard UI for the panel feature to sit in, to give it context and a place on the page.
