# Rolling with Alexa

This repo is the source code for the talk `Voice User Interfaces with Alexa and Node.js` presented at the [Rolling Scopes #49 Kraków edition](https://krakow.rollingscopes.com/).

Checkout [the slides](https://slides.com/ricardocasares/voice-user-interfaces-with-amazon-alexa)!

## Local development

### Clone and install

```sh
> git clone https://github.com/ricardocasares/rolling-with-alexa.git
> cd rolling-with-alexa
> npm install # or npm install
```

### Alexa console

1.  Signup for an Amazon developer account if you haven't one
2.  Go to the [Alexa Console](https://developer.amazon.com/alexa/console/ask) and create a new Skill
3.  Choose the skill Name, and select Custom Skill
4.  Under the `Interaction Model` sidebar menu, click on `JSON Editor` and copy/paste the JSON under `/model/en-US.json`

### Local server tunneling

In order to develop locally and see your changes reflected instantly, you will need to create an SSH tunnel or expose somehow your local development server. There are several services that allow you to do this, for example `ngrok.io` or `serveo.net`.

### Using serveo.net

1.  You need to have an SSH client installed, then simply run

```sh
> ssh -R 80:localhost:3000 serveo.net
Forwarding HTTP traffic from [https://YOUR_URL]
Press g to start a GUI session and ctrl-c to quit.
```

2.  Once you see the URL, copy it and go to your Skill console.
3.  Open the `Endpoint` menu and select `HTTPS`
4.  Under `Default Region` paste the previous URL you copied.
5.  On the select box choose: `My development endpoint is a sub-domain of a domain that has a wildcard certificate from a certificate authority`.
6.  You are done! Just run `npm run dev` or `yarn dev` to start the local server and begin testing the skill.
