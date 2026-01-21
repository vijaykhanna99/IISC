#!/usr/bin/env node
const { spawnSync } = require('node:child_process');

const args = process.argv.slice(2);

const isVersion = args[0] === '--version' || args[0] === '-v';
if (isVersion) {
  console.log('0.0.0-proxy');
  process.exit(0);
}

const command = args[0];
const forwarded = command === 'run' ? args.slice(1) : args;

const npmArgs = command === 'install'
  ? ['install', ...args.slice(1)]
  : ['run', ...forwarded];

const result = spawnSync('npm', npmArgs, { stdio: 'inherit' });
process.exit(result.status ?? 1);
