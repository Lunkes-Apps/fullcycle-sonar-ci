# fullcycle-sonar-ci

## commitlint

- npm install --save-dev @commitlint/{cli,config-conventional}
- echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
- npm install husky --save-dev
- npx husky install
- npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'



