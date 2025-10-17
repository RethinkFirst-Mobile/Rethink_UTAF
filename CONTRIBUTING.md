# Contributing

Thanks for contributing! This file describes recommended commit message style and how to run tests locally.

## Commit message format
We use Conventional Commits. Examples:

- feat: add new login tests
- fix(wdio): fix retry timeout
- chore(deps): bump eslint

Keep messages concise and describe the why, not only the what.

## Running tests locally
1. Install dependencies:

```bash
npm install
```

2. Start Appium and emulator/simulator.
3. Run tests:

```bash
npm run wdio
```

## Coding style
- ESLint is configured for basic checks. Run `npm run lint` before opening a PR.
- Use `npm run lint:fix` to automatically fix trivial issues.
