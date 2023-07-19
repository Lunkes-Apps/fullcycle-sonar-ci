# fullcycle-sonar-ci

## commitlint

- npm install --save-dev @commitlint/{cli,config-conventional}
- npm install husky --save-dev
- npx husky install
- npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'



