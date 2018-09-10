# react-lib-starter

[![CircleCI](https://circleci.com/gh/wayou/react-lib-starter.svg?style=svg)](https://circleci.com/gh/wayou/react-lib-starter)
[![MIT LICENSE](https://img.shields.io/github/license/wayou/react-lib-starter.svg)](./LICENSE)
[![npm package](https://img.shields.io/npm/v/react-lib-starter.svg)](https://www.npmjs.com/package/react-lib-starter)
[![npm package](https://img.shields.io/npm/dt/react-lib-starter.svg)](https://www.npmjs.com/package/react-lib-starter)

A react component boilerplate with tech stack of

- react: UI framework
- typescript: for type checking
- sass: for css processing
- jest: for tests
- tslint & stylelint: for lint
- storybook: for demo
- rollup: for bundling
- closure: for code comporession

### Setup

- clone repo
- remove `.git` directory
- alter README, rollup config files and others to meet your requirments
- `yarn install`
- `yarn start` to start development. this will start a local server and open http://localhost:3000 to see demo with live reload.


other available scripts:

- `yarn build` to generate dist output
- `yarn test` to run tests
- `yarn storybook` to start local storybook
- `yarn storybook:deploy` to deploy storybook to github pages


#### Circle CI configuration

Here we use a CI service to
- generate `dist` files
- run tests and lint
- deploy stories to github pages

Either Travis or Circle CI will do, in this boilerplate we use the latter.

To intergrate Circle CI and make it work

- update the username and email in [.circleci/config.yml](./.circleci/config.yml)
- setup `GH_TOKEN` environment variables in Circle CI for the project
  - generate a github personal access tokens from `https://github.com/settings/tokens`
  - add an environment variable called  `GH_TOKEN` in Circle CI project setting page `https://circleci.com/gh/<user_name>/<repo_name>/edit#env-vars` and it's value is the github personal access token above.
- give Circle CI write access for the repo by adding suer key at `https://circleci.com/gh/<user_name>/<repo_name>/edit#checkout`


**BELOW IS A TEMPLATE README FOR THE COMPONENT**
---


### Features

**List features as list.**

- feature one
- feature two
- ...


### Installing

Using command line:

```bash
$ yarn add <package_name>
# or
$ npm i -S <package_name>
```

Using cdn:

```html
<script src="//unpkg.com/<repo_name>/dist/MyComponent.umd.js"></script>
```

### Usage

**A simple usage demonstration with code goes here.**

```js
import YourComponent from '<package_name>';

class Example extends React.Component{
  public render(){
    return <YourComponent />
  }
}
```

### Options

**List and describe available options for your component.**

- `optoin`: description goes here
  - type: `string`
  - default: `the default value`
- `callback`: description goes here
  - type: `(event: Event) => void`


### Examples

**Publish stories to github pages for online demo.**

See the [examples](https://<user_name>.github.io/<package_name>/index.html).


#### Run the example at local

clone this repo then:

```bash
$ yarn install && yarn start
```

navigate to http://localhost:3000


### Development

**Describe how others can run the project local and contribute.**

For development, clone this repo then

```bash
$ yarn install && yarn start
```

this will start a local server then open browser and go to http://localhost:3000 to see examples in action.

available scripts:

- `build`: generate budnles that are ready to publish
- `dev`: start local server for local development
- `lint`: run tslint & stylelint
- `test`: test the component


### Acknowledgement

**Other infomation that may help**
