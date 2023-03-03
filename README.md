# CDC React Starter Kit

This is a simple starter kit ("stub") for creating [ReactJS](https://reactjs.org/) based projects. There's a few different ways to start a React project if you haven't already; some teams prefer to use [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) command line tool. This approach uses WebPack and bakes in some starting setup for a standard JS app effort.

- [ESLint](https://eslint.org/) configuration
- [Prettier](https://prettier.io/docs/en/index.html) config
- [WebPack](https://webpack.js.org/) configuration for local development and building assets
- [Babel](https://babeljs.io/) translation for older browsers (IE11)
- Precommit hooks with lint checks

For CDC this also includes some information for supporting CDC.gov specific web tools.

## TL;DR:

Clone this repo, then run in command line:

```bash
npm install
npm run start
```

Browser will load a React app you can experiment with. See the files under `src`.

## Getting Started

Only requirement is [NodeJS](https://nodejs.org/en/) LTS version (currently v16).

You can clone this repo and work with it as a base set of files, or use the GitHub template feature.

1. Click the **Use this template** green button at the top right on Github, or simply follow [this link](https://github.com/CDCgov/react-starter-kit/generate).
   - Make sure you select the appropriate organization. If this is for an internal project that will not be shared as open source, please select **`cdcent`** not `cdcgov`.
2. Clone the newly created repository
3. Run `npm install` to install the needed packages
4. Run `npm start` to start up the development server. It should open your system's default browser with the URL and refresh to reflect code changes you make upon save.

## Building

Source JS files under `./src/` ultimately need to build built for public web use, so run:

```bash
npm run build
```

And built assets will update under the `./dist/` folder. There are used for the final output web project.

## Setup Overview

This section describes the major underlying components of the project and how they all fit together.

- **[Webpack](https://webpack.js.org/)**
    Similar to other build tools like [Gulp](https://gulpjs.com/) and [Grunt](https://gruntjs.com/), this is the main "task runner" for the project. It is responsible for the following:
    * Locally, starting the dev server and auto refreshing when changes are saved
    * Compiling SASS into CSS, and JS / TypeScript files into browser-ready, legacy browser-compatible JavaScript
    * Handling the build process when the code is ready to be used in production

    The configuration is stored in `webpack.config.js`. The one included has some default settings to begin, and you can check [Webpack documentation](https://webpack.js.org/configuration/) to see what options are available.

- **[Babel](https://babeljs.io/)**
    This parses the JavaScript in the project and transforms it into code that can be supported by older browsers. It lets you use newer ES6 style syntax and still support IE11. Notably, Babel is also the step in the process that turns the easy to read JSX into more traditional JavaScript objects.
    Currently Babel is configured inside `webpack.config.js`, but can be configured separately in its own file if preferred.

- **[ESLint](https://eslint.org/)**
    This tool helps maintain code style as well as finds potential issues in your code. Most IDEs can integrate with your config to check for mistakes and automatically fix on request.
    - [VSCode ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

    The configuration file `.eslintrc.js` currently extends the ESLint ruleset `eslint-config-react-app`, which is not very *opinionated* (not many rules enforced). You can further refine the rules in the file down to the rules you want to enforce, or install and extend your own preferred rulesets.

- **[Prettier](https://prettier.io/docs/en/index.html)**
    Prettier is a popular tool for keeping JS, JSX, CSS, SCSS, TS, and other web files formatted in a standardized way. Up front it says it's opinionated, which means it's simple. It's well received within the web community, and this repo includes a base setup. See their documentation on configuration options.
    - *Spaces versus Tabs:* This repo uses tabs, but update `.prettierrc` to fix this to your liking.

### Code Management Notes

If you use this for a project base, you'll want to clean out a lot of these documentation files and update them for your own purposes. A few notes on maintenance:

- The [NPM](https://www.npmjs.com/) online repository for NodeJS libraries will continue to evolve and release libraries updates to address features and security issues. Make sure to check your repo regularly for security issues:
  ```bash
  npm audit fix
  ```
- Libraries can quickly add to your output JS file weight. Be judicious in what you use. Most web users are using a mobile phone, often mobile data, so bandwidth counts. CDC's public health mission is to target all possible audiences, so web footprint / page weight is important.
  - Make sure your libraries are well supported (recently updated)
  - Make sure each library's file size fits its utility for your project
    - Example: [DayJS](https://www.npmjs.com/package/dayjs) vs [MomentJS](https://www.npmjs.com/package/moment) for date formatting and comparison
- JSX-A11y is part of ESLint config to check for accessibility issues in JSX / HTML output. All CDC apps are tested for [508 compliance](https://www.section508.gov/). Another good tool for checking page content for 508 compliance / web accessibility is the [Axe DevTools browser extension](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd).

### React Hooks, Context and functional components

This template is using [React Hooks](https://reactjs.org/docs/hooks-custom.html) for state management and [Context](https://reactjs.org/docs/context.html) for application state management / configuration. It's a good starting point for most projects.

You may find if your project is complex enough to benefit from [Redux](https://redux.js.org/). We feel it's better to err on the side of simplicity up front. You may also find need to use Class-based React components, or are more familiar with their format / structure.

## Browser Support

Chrome | Firefox | IE | Safari | Edge
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | 11 ✔ | Latest ✔ | Latest ✔ |

## Open Sourcing

While a lot of the code used in this starter kit will be for internal code, we should attempt to open source when we can. If you plan on open sourcing code built off this project, be sure to use the `cdcgov` organization (the organization that this starter kit is hosted with) instead of the `cdcent` organization. You might have to request access to do this, and there are also policies and procedures that should be followed before open sourcing a project. [This repository](https://github.com/CDCgov/template) has a good starting point with a link to a form to get access to `cdcgov`, the process and additional information you need to add to your repository if you want to make it an open source project.

## Contributing

We welcome issues and PRs from forks, just note all comments, messages, pull requests, and other submissions received through CDC including this GitHub page may be subject to applicable federal law, including but not limited to the Federal Records Act, and may be archived. Learn more at http://www.cdc.gov/other/privacy.html. Otherwise, please, make this better. :)

## Notices

#### License

The repository utilizes code licensed under the terms of the Apache Software License and therefore is licensed under ASL v2 or later.

This source code in this repository is free: you can redistribute it and/or modify it under the terms of the Apache Software License version 2, or (at your option) any later version.

This source code in this repository is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the Apache Software License for more details.

The source code forked from other open source projects will inherit its license.

#### Public Domain

This repository constitutes a work of the United States Government and is not subject to domestic copyright protection under 17 USC § 105. This repository is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/). All contributions to this repository will be released under the CC0 dedication. By submitting a pull request you are agreeing to comply with this waiver of copyright interest.

#### Records Management

This repository is not a source of government records, but is a copy to increase collaboration and collaborative potential. All government records will be published through the [CDC web site](https://www.cdc.gov/).

#### Privacy

This repository contains only non-sensitive, publicly available data and information. All material and community participation is covered by the [Disclaimer](https://github.com/CDCgov/template/blob/master/DISCLAIMER.md) and [Code of Conduct](https://github.com/CDCgov/template/blob/master/code-of-conduct.md). For more information about CDC's privacy policy, please visit http://www.cdc.gov/other/privacy.html.
