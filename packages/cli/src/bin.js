#!/usr/bin/env node
// @presencing/cli — early preview placeholder
//
// Real commands (presencing init / presencing register-stream / etc.) ship
// with v0.1. This stub exists to claim the npm name and let early adopters
// install something that doesn't crash.

const args = process.argv.slice(2);

if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
  console.log(`presencing — a framework for AI agents that are present, not just reactive

  Status: early preview (placeholder).

  Real CLI commands ship with v0.1. Star the repo to be notified:
    https://github.com/presencing/presencing

  Try:
    presencing version    Print version

  Read more:
    https://github.com/presencing/presencing
`);
  process.exit(0);
}

if (args[0] === 'version' || args[0] === '--version' || args[0] === '-v') {
  const { VERSION } = require('@presencing/core');
  console.log(VERSION);
  process.exit(0);
}

console.error(`presencing: unknown command "${args[0]}"`);
console.error('Run "presencing --help" for usage.');
process.exit(1);
