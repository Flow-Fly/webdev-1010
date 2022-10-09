# Welcome to WebDev 1010 Paris

Hello Ironhacker's!

Starting on the 10th September 2022, we'll have 9 weeks to become full-stack web developers 😌.

## Notes

## Contents

- [Welcome to WebDev 1010 Paris](#welcome-to-webdev-1010-paris)
  - [Notes](#notes)
  - [Contents](#contents)
  - [Who's the team?](#whos-the-team)
  - [Using this repository](#using-this-repository)
    - [Staying up-to-date](#staying-up-to-date)
    - [In case of issues pulling latest changes](#in-case-of-issues-pulling-latest-changes)
  - [Script helpers](#script-helpers)
    - [Generating groups](#generating-groups)
    - [Checking morning sunshines](#checking-morning-sunshines)
    - [Cloning lab repos](#cloning-lab-repos)
    - [Viewing github profiles and projects](#viewing-github-profiles-and-projects)

## Who's the team?

Your instructional team includes:

- Florian Aube
- Haroun Boudour
- Belchior Fontao

## Using this repository

This is a github repository full of notes, examples, and tools for Ironhack WebDev 1010.

The repository is updated at least daily.
We'll have the latest examples from class,
as well as a description of the day's main topics,
and links to useful external resources.

### Staying up-to-date

You can get the latest changes of this repository by running

```sh
git pull
```

You can open this repository in Visual Studio Code by running

```sh
code .
```

from the command-line.

### In case of issues pulling latest changes

In case you need to clear any local changes you have made,
you can run `git stash`, then perform the `git pull`,
and finally restore your changes with `git stash pop`:

```sh
git stash
git pull
git stash pop
```

## Script helpers

This repo comes with a script helper: `students.sh`. Run it and see. This is mainly intended for teaching team use.

### Generating groups

Run `./students.sh groups 3` to generate groups of three.

### Checking morning sunshines

Run `./students.sh sunshine` to find out who is doing morning sunshine next!

### Cloning lab repos

If you want a list of commands that can clone all the lab forks for every student, run `./students.sh lab <lab-repo-name>`. E.g. `./students.sh lab lab-css-instagram-clone`.

You can copy the printed commands and run them wherever you store cloned labs.

### Viewing github profiles and projects

Try running these to open up students' github profiles and repositories in your browser.

```sh
./students.sh github maurine
```

```sh
./students.sh project sam
```

View all the project URLs with

```sh
./students.sh list table
```
