# template-multi-packages-repositiory

Template for multi-packages repository.

## Contribution

Run `commit` script to create a git commit.

It uses [`git-cz`](https://github.com/streamich/git-cz) and respect [Conventional Commit specification](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#specification).

n.b. [`lint-staged`](https://github.com/okonet/lint-staged) run linters (cf. `.lintstagedrc` file) on `pre-commit` hook (cf. `precommit` script).

## Linting

### Prettier

Run `prettier` script to format all files.

It uses [`prettier`](https://github.com/prettier/prettier) and rules specified in the `.prettierrc` file.

Besides, use the [Prettier editor integration](https://prettier.io/docs/en/editors.html).

e.g. For Visual Studio Code :

> Search for `Prettier - Code formatter`.

### ESLint

Run `lint` script to lint all files.

It uses [`eslint`](https://github.com/eslint/eslint) and config from :

- [`eslint-config-airbnb`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier)

## Build the packages

Run `build` script to build packages.

It uses [`lerna`](https://github.com/lerna/lerna) and [`rollup`](https://github.com/rollup/rollup) to build simultaneously all packages in `packages/` folder.

## Browse Storybook

1. Run `storybook` script
2. Browse `localhost:9001/`
