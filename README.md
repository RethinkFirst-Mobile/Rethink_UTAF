# @rethink_UTAF - Rethink - Unified Test Automation Framework

@rethink_UTAF is `an e2e test automation framework for Web, Mobile and API's` that allows `SDET's` to build `automation with BDD style using Cucumber`.

The project is designed as a monorepo with modular architecture to scale the quality and business requirments at enterprise level.

[[_TOC_]]

## Pre-requisites

Before you begin, ensure you have met the following requirements:
- You should have a `Windows/Linux/Mac` machine
- IDE of users choice, preferrable `VS-Code`
- Required `extensions in VS-Code`
	- [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)
	- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
	- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
	- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
	- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)
	- [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)
	- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

- Install the latest (stable) version of `JRE (Java Runtime Environment)`
- Install the latest (stable) version of `Node (JavaScript Runtime Environment)`
- Install the latest (stable) version of `Volta.sh`
- Install the latest (stable) version of git

---
👉🏼 Mobile automation specific
---

```
#To work with Android

- Install Android Studio (For Android Virtual devices)
 # Add the ANDROID_HOME variable with the SDK installation path
 # update the existing Path variable with %ANDROID_HOME%\platform-tools

**Note:** Process varies with Windows and Mac, Please follow the required process.

Verify by running the commands **echo $ANDROID_HOME** for MAC and **echo %ANDROID_HOME** for windows, this returns the SDK path.
```
```
#To work with iOS
- Install XCode (For iOS Simulators)
```

--- 
👉🏼 Mandatory for Windows machine to support XRay and VS-Code Integration
---

- Install 7Zip utility and Add the location to your PATH environment variable. ex: (`C:\Program Files\7-Zip`)


## Install @rethink_UTAF

To install @rethink_utaf/<your_team_name>, follow these steps:

Linux, macOS and Windows:

- update the git config

```
# for Mac/Linux
$ git config --global core.autocrlf input 👈🏽

# for Windows
$ git config --global core.autocrlf true 👈🏽
```

- clone the monorepo. this will not download the content

```
$ git clone --no-checkout git@github.com:RethinkFirst-Mobile/Rethink_UTAF.git 👈🏽
```

- initialize the sparse checkout

```
$ cd Rethink_UTAF && git sparse-checkout init --cone 👈🏽
```

- downloads the root files

```
$ git checkout main 👈🏽
```

- downloads the working module

```
$ git sparse-checkout set packages/<your_team_name> .husky .vscode globals 👈🏽
```

- checkout to your feature/local branch

```
$ git checkout -b <local_branch_name> 👈🏽
```

- configure the dependencies

```
$ npm run setup 👈🏽
```

- Run Below command only for iOS Setup in MAC
```
$ npm run setup:appiumiOS

Note: If you see privileges error, please run below command and re-run the above command.

$ chmod +x globals/mobile/setup-appium-mac.sh
```
- run the lint check

```
$ npm run lint 👈🏽
```

- make sure the setup is successful

```
$ npm run hello 👈🏽
```

## Using @rethink_utaf

To use @rethink_utaf/<your_team_name>, follow these steps:

- To run mob app in local android device

--- 
👉🏼 For changing the devices/platforms/environments use the scripts in your package folder package.json file. and replace **mob:app:local:android** in the below sample commands.
---

```
$ npx lerna run --scope="@rethink_utaf/<your_team_name>" mob:app:local:android -- -- --cucumberOpts.tagExpression="""@smoke""" 👈🏽
```
OR

```
$ npx lerna run --scope="@rethink_utaf/<your_team_name>" mob:app:local:android -- -- --spec="""some.feature""" --cucumberOpts.tagExpression="""@smoke""" 👈🏽
```

- To launch inspector(mobile devices only). connect the device and run the below command and then add required capabilities to start the session

```
$ npx lerna run launch-inspector
```


- clean up your project [OPTIONAL]

```
$ npm run clean 👈🏽
```

- to download dependencies again after cleanup [OPTIONAL]

```
$ npm run setup 👈🏽
```

- to commit your work or changes

```
$ git add .
$ git commit -am 'test(<YOUR_TEAM_NAME>): provide a short summary about your changes' 👈🏽

EXAMPLE: git commit -am "test(rethink-bh-mobile): added new test for JIRA-12345"
```

- push you work/changes to remote branch

```
$ git push -u origin <remote_branch_name> 👈🏽
```

- create a merge request


## Setup Mobile Capabilities

- create a .env file with the below content into the UTAF folder. Modify the capability values as per the need.

```
# Environment variables for the project

#--------------------------------------------
# BrowserStack Credentials - Do not change/push to repository
#--------------------------------------------
BROWSERSTACK_USERNAME=
BROWSERSTACK_ACCESS_KEY=
# DEVICE_NAME='Google Pixel 9 Pro'

#--------------------------------------------
# Device Capabilities
#--------------------------------------------

# #---------Sample iOS Device Configuration---------
DEVICE_NAME='iPhone 16 Pro'
PLATFORM_VERSION = '18.5'
# APP_PATH=
# APP_PACKAGE='com.google.android.calculator'
# APP_BUNDLEID='com.android.calculator2.Calculator'

#---------Sample Android Device Configuration---------
# DEVICE_NAME='emulator-5554'
# APP_PATH='D:/Rethink/UTAF/packages/rethink-bh-mobile/resources/calculator_test.apk'
# APP_PACKAGE='com.google.android.calculator'
# APP_ACTIVITY='com.android.calculator2.Calculator'
```


## Contributing

Before contributing make sure you're onboarded to the project by one of the teammates. Use the above steps to setup the local development.

Follow the below practices when contributing:

- **kebab-case** for cucumber tags, folder, and filename
- **Feature:** Should have some descriptive message about the feature
- **Scenario Tags:** at the minimum, you should have a Jira ticket number and release version as tags
- Please keep the gherkin Scenarios as **declarative** rather imperative
- Follow the Gherkin Reference (https://cucumber.io/docs/gherkin/reference/) while writing the steps
- Keep the cucumber scenarios `declarative`. Refer (https://cucumber.io/docs/bdd/better-gherkin/) for examples
- **Sensitive information** should be read from `.env` file and should not track in git
- **Avoid** using static and implicit waits
- Step_definitions **shouldn't expose native WebdriverIO commands** like the browser. PageObject and helpers could be used instead.
- Keep scenarios independent
- **Test data setup** should be part of the scenarios - use hooks if required
- Limit the usage of locators which traverse multiple nodes.
- Every step should have **at least one checkpoint**, and the more, the better as per acceptance criteria
- **Prefer `type-inference`** over explicit type assignment for variables, functions as applicable
- **Avoid `:any`** type. It disables all further type checking
- Custom type definitions goes under `/types` folder
- Prefer **generic style declaration** like `Array<number>` over `number[]`
- Prefer **`Interface` over `Type Alias`** for defining object structure
- Prefer **combining literals into unions,** for example, functions that only accept a certain set of known values `printText(s: string, alignment: "left" | "right" | "center")`

## Tech-Stack

- Node
- TypeScript (Superset of JavaScript)
- Cucumber
- Docker
- Appium
- WebDriverIo
- Supertest
- Allure reports

## Features

---

### Automation Style

> Scope of the `@rethink_utaf` is to support only BDD style of automation.

|     | Style | Framework |
| :-- | :---: | :-------: |
| BDD |  ✅   | Cucumber  |

### Features(epics) Execution Mode

> Features will run in series since we use one wdio instance.
> In `CICD`, Features can schedule to run in parallel

|          | Features | Framework |
| :------- | :------: | :-------: |
| Series   |    ✅    | Cucumber  |
| Parallel |   ❗️    | Cucumber  |

### Scenarios(stories) Execution Mode

> With in a feature, Scenarios will run in series.

|          | Scenarios | Framework |
| :------- | :-------: | :-------: |
| Series   |    ✅     | Cucumber  |
| Parallel |    ❌     | Cucumber  |

### Local reporting format

> `Spec`, `json` & `allure` style of report will be shown per feature.

|      | Features | Scenarios | Framework |
| :--- | :------: | :-------: | :-------: |
| Json |    ✅    |    ✅     | Cucumber  |
| Spec |    ✅    |    ✅     | Cucumber  |
| allure | ✅    |    ✅     | Cucumber  |

### Browser Automation

|         | Local | Container | BrowserStack |
| :------ | :---: | :-------: | :----------: |
| Chrome  |  ✅   |    ✅     |      ✅      |
| Firefox |  ✅   |    ✅     |      ✅      |
| Edge    |  ✅   |    ✅     |      ✅      |
| Safari  |  ✅   |    ❗️    |      ✅      |

### Mobile Automation

|                | Si(E)mulator | BrowserStack |
| :------------- | :----------: | :----------: |
| iOS Native     |      ✅      |      ✅      |
| iOS Hybrid     |      ✅      |      ✅      |
| iOS Safari     |      ✅      |      ✅      |
| Android Native |      ✅      |      ✅      |
| Android Hybrid |      ✅      |      ✅      |
| Android Chrome |      ✅      |      ✅      |

### API Automation

|     | Rest | GraphQL | Framework |
| :-- | :--: | :-----: | :-------: |
| API |  ✅  |   ✅    | SuperTest |

### Static & Build Checks

|                   | Status | Framework    |
| :---------------- | :----: | :----------- |
| Gherkin Lint      |   ✅   | Gherkin-Lint |
| Code Lint         |   ✅   | ESLint       |
| Code Commit Lint  |   ✅   | CommitLint   |
| Code Formatter    |   ✅   | Prettier     |
| Code Type Checked |   ✅   | TypeScript   |


## Contact

If you want to learn more or questions ? send a note to <nikil.gunda@rethinkfirst.com> 

## License

This project uses the following license: UNLICENSE (internal).