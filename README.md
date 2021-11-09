# CDC React Starter Kit
This is a simple starter kit for creating [ReactJS](https://reactjs.org/) based projects at CDC. It comes with configurable support for older browsers, [ESLint](https://eslint.org/) rules plugged in, and comments where you can modify and adjust. It also avoids some of the overhead added by the traditional [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) initialization.

### Keep it Simple ([KISS](https://en.wikipedia.org/wiki/KISS_principle))
Goal of this template is to provide the basics for starting a React app. Where choices were made, they are commented in the configuration files.

## Getting Started

The only requirement is [NodeJS]() 14x or higher.

1. Click the **Use this template** green button at the top right on Github, or simply follow [this link](https://github.com/CDCgov/react-starter-kit/generate).
   - Make sure you select the appropriate organization. If this is for an internal project that will not be shared as open source, please select **`cdcent`** not `cdcgov`.
2. Clone the newly created repository
3. Run `npm install` to install the needed packages
4. Run `npm start` to start up the development server. It should open your system's default browser with the URL and refresh to reflect code changes you make upon save.

### Building

To build the project, run `npm run build` and it will compile everything into a `/dist/` folder. You will either have one `bundle.js` file or multiple that are chunked for performance.

Inside the `/dist/` folder is a dynamically generated `index.html` that uses `/src/index.html` as a base and injects the js files that were created in the process into it.

The `/dist/` folder is self contained so you could drop it onto a server and it will load the index.html or you can take the generated JavaScript file(s) and include them on a different page, as long as you have a container element with the same ID that is specified in `index.js` for React to lock onto and render inside of.

## High Level Setup Overview

This section describes the major underlying components of the project and how they all fit together.

**Webpack**
Similar to other build tools like [Gulp](https://gulpjs.com/) and [Grunt](https://gruntjs.com/), this is the main "task runner" for the project. It is responsible for the following:
* Locally, starting the dev server and auto refreshing when changes are saved
* Compiling SASS into CSS, and JS / TypeScript files into browser-ready, legacy browser-compatible JavaScript
* Handling the build process when the code is ready to be used in production

The configuration is stored in `webpack.config.js`. The one included has some default settings to begin, and you can check [Webpack documentation](https://webpack.js.org/configuration/) to see what options are available.

**Babel**
This parses the JavaScript in the project and transforms it into code that can be supported by older browsers. It lets you use newer ES6 style syntax and still support IE11. Notably, Babel is also the step in the process that turns the easy to read JSX into more traditional JavaScript objects.

Currently Babel is configured inside `webpack.config.js`, but can be configured separately in its own file if preferred.

**ESLint**
This tool helps maintain code style as well as finds potential issues in your code. Most IDEs can integrate with your config to check for mistakes and automatically fix on request.

The configuration file `.eslintrc.js` currently extends the ESLint ruleset `eslint-config-react-app`, which is not very *opinionated* (not many rules enforced). You can further refine the rules in the file down to the rules you want to enforce, or install and extend your own preferred rulesets.

### React Hooks, Context and functional components
This template is using [React Hooks](https://reactjs.org/docs/hooks-custom.html) for state management and [Context](https://reactjs.org/docs/context.html) for application state management / configuration. It's a good starting point for most projects.

You may find if your project is complex enough to benefit from [Redux](https://redux.js.org/). We feel it's better to err on the side of simplicity up front.

## Browser Support

Chrome | Firefox | IE | Safari | Edge
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | 11 ✔ | Latest ✔ | Latest ✔ |

## Open Sourcing

While a lot of the code used in this starter kit will be for internal code, we should attempt to open source when we can. If you plan on open sourcing code built off this project, be sure to use the `cdcgov` organization (the organization that this starter kit is hosted with) instead of the `cdcent` organization. You might have to request access to do this, and there are also policies and procedures that should be followed before open sourcing a project. [This repository](https://github.com/CDCgov/template) has a good starting point with a link to a form to get access to `cdcgov`, the process and additional information you need to add to your repository if you want to make it an open source project.

## Contributing

Contributions to this starter kit from outside users are welcome, though if they do not fit our specific team's needs they will likely be rejected. You are welcome to fork the project if that happens. If you are not an approved contributor, you will have to [fork this repository](https://help.github.com/articles/fork-a-repo) and submit a pull request that way.

All comments, messages, pull requests, and other submissions received through CDC including this GitHub page may be subject to applicable federal law, including but not limited to the Federal Records Act, and may be archived. Learn more at http://www.cdc.gov/other/privacy.html.

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