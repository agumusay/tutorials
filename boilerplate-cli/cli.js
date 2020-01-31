#!/usr/bin/env node

const cfonts = require("cfonts");
const inquirer = require("inquirer");
const fs = require("fs-extra");
const [, , ...args] = process.argv;

cfonts.say("DCI Boilerplate", {
  font: "block",
  align: "center",
  colors: ["blueBright", "cyan"],
  background: "transparent",
  letterSpacing: 1,
  lineHeight: 1,
  space: true,
  maxLength: "0"
});

const currDir = process.cwd();

console.log(inquirer);
