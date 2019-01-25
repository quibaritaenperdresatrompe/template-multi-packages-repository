# template-multi-packages-repositiory

Template for multi-packages repository.

## Contribution

Run `commit` script to create a git commit.
It uses [`git-cz`](https://github.com/streamich/git-cz) and respect [Conventional Commit specification](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#specification).

## Build the packages

Run `build` script to build packages.
It uses [`lerna`](https://github.com/lerna/lerna) and [`rollup`](https://github.com/rollup/rollup) to build simultaneously all packages in `/packages`.
