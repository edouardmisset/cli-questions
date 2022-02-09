#!/usr/bin/env node

import chalk from 'chalk'
import inquirer from 'inquirer'
import gradient from 'gradient-string'
import { createSpinner } from 'nanospinner'
import chalkAnimation from 'chalk-animation'
import figlet from 'figlet'

let playerName;

const sleep = (ms = 2000) => new Promise(resolve => setTimeout(resolve, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    'Who Wants To Be A JavaScript Millionaire?'
  )

  await sleep()

  rainbowTitle.stop()

  console.log(`
  ${chalk.bgBlue('HOW TO PLAY')}
  I am a process on your computer.
  If you get any question wrong I will be ${chalk.bgRed('killed')}
  So get all the questions right...
  `)

}

await welcome()

