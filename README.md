📌 README.md – Appium + WebdriverIO Mobile Automation
# 🚀 WebdriverIO + Appium Mobile Automation Monorepo
This monorepo sets up **WebdriverIO** with **Appium** to automate mobile applications on both **iOS** and **Android** devices. It uses npm workspaces to manage multiple packages for apps, tests, and shared code.
---
## 📌 Prerequisites
Before setting up WebdriverIO and Appium, ensure you have the following installed:
### 🔧 **1. System Requirements**
- macOS / Windows / Linux
- Node.js (>= 16.x)
- Java JDK (>= 11)
- Android SDK (for Android testing)
- Xcode (for iOS testing, macOS only)
- Homebrew (macOS users) → [Install Here](https://brew.sh/)
- Python (for WebDriverAgent on iOS)
### 🛠 **2. Install Required Dependencies**
#### ✅ Install Node.js & npm (if not installed)
Check if you have Node.js installed:
```sh
node -v
npm -v
If not installed, install it via Homebrew (macOS) or official site:
brew install node
# WebdriverIO + Appium Test Suite

This repository contains a WebdriverIO + Appium test suite for the Rethink mobile app. The configuration supports running tests locally (using a local Appium server) and on cloud providers such as BrowserStack and Bitbar.

## Monorepo Structure

```
apps/
	mobile/           # Mobile app code (if present)
packages/
	test/             # All test automation (specs, pages, helpers, features, scripts)
	shared/           # Shared code/types (if needed)
```

### What this repo includes
- WebdriverIO test setup (`packages/test/wdio.conf.ts`)
- Example tests in `packages/test/specs/`
- Page objects in `packages/test/pages/`
- Step definitions and features in `packages/test/features/`
- ESLint integration and lint scripts
- Commit message linting via Commitlint + Husky (Conventional Commits)

## Prerequisites
- Node.js (LTS recommended)
- npm
- For local runs: Appium and device/emulator configured

Install dependencies (from root):

```bash
npm install
```

## Environment variables
The configuration can be controlled via environment variables. Common variables:

- PROVIDER: `local` (default) | `browserstack` | `bitbar`
- PLATFORM: `android` | `ios` (if not specified both capabilities will be used)

App locations / ids (use local file paths for local runs or remote ids for cloud):
- ANDROID_APP — path to .apk or cloud app id (e.g. `bs://...`)
- IOS_APP — path to .app or cloud app id

BrowserStack credentials:
- BROWSERSTACK_USER
- BROWSERSTACK_KEY

Bitbar credentials:
- BITBAR_USER
- BITBAR_KEY
- BITBAR_HOSTNAME (optional, defaults to `cloud.bitbar.com`)
- BITBAR_PATH (optional, defaults to `/wd/hub`)

Other helpful env vars:
- BSTACK_PROJECT or BITBAR_PROJECT — used as project name in capabilities

## Running tests
### Local (Appium)
Start Appium (if not already running) or just run the npm script (the project includes Appium in devDependencies and `wdio` script will start Appium when PROVIDER=local):

```bash
# default local run (from root)
npm run wdio --workspace packages/test

# specify platform (optional)
export PLATFORM=android
npm run wdio --workspace packages/test
```

### BrowserStack
1. Upload your app to BrowserStack (see `packages/test/scripts/upload-to-browserstack.ts`) and get the `bs://...` app id.
2. Set env variables and run:

```bash
export PROVIDER=browserstack
export BROWSERSTACK_USER=<your_user>
export BROWSERSTACK_KEY=<your_key>
export ANDROID_APP=bs://<uploaded-android-id>
npm run wdio --workspace packages/test
```

### Bitbar
1. Upload your app to Bitbar or provide the expected app id/url.
2. Set env variables and run:

```bash
export PROVIDER=bitbar
export BITBAR_USER=<your_user>
export BITBAR_KEY=<your_key>
export ANDROID_APP=<bitbar-app-id-or-url>
npm run wdio --workspace packages/test
```

Notes on cloud runs:
- Cloud providers usually require apps to be uploaded first and referenced by an id (like `bs://...`).
- You may need to adjust capability options for specific device models and OS versions. Use `PROVIDER` plus `PLATFORM` to pick capabilities.

## Linting
- Run ESLint across the project (from root):

```bash
npm run lint
```

- Auto-fix fixable issues:

```bash
npm run lint:fix
```

## Commit messages
Commit messages are validated by Commitlint (Conventional Commits) via a Husky `commit-msg` hook. Use messages like:

- `feat: add login tests`
- `fix(wdio): adjust retry timeout`
- `chore(deps): bump eslint`

## Troubleshooting
- If BrowserStack/Bitbar fail to authenticate, confirm your env vars and that the app id is uploaded and accessible to your account.
- For local runs, ensure Appium is up and devices/emulators are available and visible via `adb devices` (Android) or `xcrun simctl list` (iOS).

## Next improvements (optional)
- Add `@wdio/browserstack-service` for managed BrowserStack integration.
- Add `lint-staged` + Husky `pre-commit` to lint staged files before commit.
- Add CI job to run lint + tests and verify commit messages on PRs.

---
## Monorepo Usage

- All test automation is now in `packages/test/`.
- Shared code can go in `packages/shared/`.
- App code (if present) goes in `apps/mobile/`.
- Use npm workspaces for dependency management and scripts.

---
If you'd like, I can add a `CONTRIBUTING.md` with commit message templates and a sample `.env.example` for easy local setup. Which would you prefer next?

---
If you'd like, I can add a `CONTRIBUTING.md` with commit message templates and a sample `.env.example` for easy local setup. Which would you prefer next?

