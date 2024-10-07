# Gilded Rose

This repository is entirely based on the great [Emily Bache's Gilded Rose kata](https://github.com/emilybache/GildedRose-Refactoring-Kata.git).

Original instructions can be found [here](./GildedRoseRequirements.md).

## Getting started

Install dependencies

```sh
yarn
```

## Run the TextTest fixture from the Command-Line

Using `ts-node` to run tests would require you to write your own tests.

```sh
npx ts-node test/golden-master-text-test.ts
```

Or with number of days as args:

```sh
npx ts-node test/golden-master-text-test.ts 10
```

You should make sure the command shown above works when you execute it in a terminal before trying to use TextTest (see below).



## Run the TextTest approval test that comes with this project

You may need to install Python3 for test execution purposes (see below).

```sh
brew install python3
```

There are instructions in the [TextTest Readme](../texttests/README.md) for setting up TextTest. You will need to specify the Python executable and interpreter in [config.gr](../texttests/config.gr). Uncomment these lines:

    executable:${TEXTTEST_HOME}/python/texttest_fixture.py
    interpreter:python
