# What is this?

This project is a static website built using Vite and, currently, hosted on CloudFlare Pages.

## [Vite](https://vitejs.dev/)

Vite is a build tool for web projects. In a sense, it's a little helper that takes all the different bits and bobs needed for your website to work and assembles them into a complete product that's ready to be shipped.

This project uses Vite. If you want to run it locally, you must install Vite. See the setup section.

## [Cloudflare Pages](https://pages.cloudflare.com/)

Cloudflare Pages is a web hosting service aimed at smaller projects with minimal server-side logic (read interactivity).

Like many <i>Pages-like</i> services out there, Cf Pages keeps an eye on your repository and automatically updates your website when changes are made to the code.

This project is redeployed every time a new commit is made to `main`, so don't work directly on that branch.

<br>

# Setup

For various reasons, you might want to host this website on your own computer. This requires a few extra steps.

## [Node.js](https://nodejs.org/)

Node.js is a web server. A great deal of modern web frameworks run on Node.js, including Vite.

Therefore, to host this project locally, you must first [install Node.js](https://nodejs.org/en/download/package-manager). Specifically, you need a version newer than `16.5.0` for compatibility reasons.

Make sure you also install the [npm package manager](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager) when installing Node.

## Packages

Node.js is also part of an expansive ecosystem of packages and libraries.

Vite is one such package that is required for this project. To install Vite and other dependencies, open a terminal in this folder and run the following command:

```
npm ci
```

## Development Server

With all dependencies installed, you can start tinkering on this project.

To host the project, open a terminal in this folder and run the following command:

```
npm run dev -- --host
```

This starts a web server which shows you a preview of what the website would look like once deployed.

You can access it by opening a browser and going to one of the addresses shown in the terminal. This generally includes the following address:

```
localhost:8080
```

Any changes you make to the code will be shown in real-time.

<br>

# Deployment

This project is automatically deployed to Cloudflare Pages every time a new commit is made on the `main` branch.

Each deployment causes some work to occur on Cloudflare's servers, a process which they call the `build`.

For financial reasons, this project is limited to `500` builds per month, so commit to `main` sparingly.
