#!/usr/bin/env node
import * as commander from 'commander'
import { onCreate } from './commands/create'

const program = new commander.Command()

program
  .command('create')
  .description('create a component template or config')
  .option('-t --type <type>', `create type, options: component, lib-entry`)
  .action(onCreate)
// 执行命令行参数解析
program.parse()