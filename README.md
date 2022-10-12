# Front-End Challenge

My solution for the current Challenge was developed in a few days.

The challenge consists of building a list of contacts in Vue. Need to
create tabs, where each tab has a list of sorted users.

#### Behavior 
- The contacts should be grouped in tabs.
- When clicking, for example on B tab, it should render the users whose name
starts with a B, sorted based on their last name.
- When clicking on a contact, a card should be displayed with some information
of the selected user.
- When clicking on the close button of a card, it should disappear.
- While a contact card is being displayed, if another contact is clicked, the first
clicked contact card should disappear.
- The contacts of your application have to be retrieved from the
http://randomuser.me API.
- The app should be usable on both small and large screens.

#### Accessibility tested by Lighthouse, results in the Accessibility test.pdf.

#### The project was built and deployed to the firebase - https://contacts-e3711.web.app/.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```
