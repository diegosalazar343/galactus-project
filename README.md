# _Galactus Calculator_

#### _Galactus Calculator for Epicodus, 11.15.2020_

#### _By Diego Salazar_

## Description
_This project was intended to display our knowledge and practice our test driven development skills. For example, in this project I setting up a testing environment, and practiced test driven development in the application._

## Behavior

Describe: GalactusCalculator

Test | Code | Expect
------ | ------ | ------------
"Should create a GalactusCalculator object, and include user input. |
 {24}. |  expect(user.userAge).toEqual(24).

"Should calculate earthUnder value using the userAge and earthExpectancy values". |  {24,50}.  | expect(user.earthUnder).toEqual(26).

"Should calculate mercuryAge value using the userAge value" | {24} | expect(user.mercuryAge).toEqual(100).

"Should calculate mercuryExpectancy value using the earthExpectancy value". | {0, 50} | expect(user.mercuryExpectancy).toEqual(208).

"Should calculate mercuryUnder value using the mercuryAge and mercuryExpectancy values". | {24, 50}  | expect(user.mercuryUnder).toEqual(108).

"Should calculate venusAge value using the userAge value". | {24} | expect(user.venusAge).toEqual(38).

"Should calculate venusExpectancy value using the earthExpectancy value".
| {0,50} | expect(user.venusExpectancy).toEqual(80).

"Should calculate venusUnder values using the venusAge and venusExpectancy values". | {24, 50} | expect(user.venusUnder).toEqual(42).

"Should calculate marsAge value using the userAge value". | {24} | expect(user.marsAge).toEqual(12).

"Should calculate marsExpectancy value using earthExpectancy value". | {0, 50} | expect(user.marsExpectancy).toEqual(26).

"Should calculate marsUnder values using the marsAge and marsExpectancy values". | {24, 50} | expect(user.venusUnder).toEqual(14).

"Should calculate jupitarAge value using the userAge value". | {24} | expect(user.jupitarAge).toEqual(2).

"Should calculate jupitarExpectancy value using earthExpectancy value".
| {0, 50} | expect(user.jupitarExpectancy).toEqual(4).

"Should calculate jupitarUnder value using the jupitarAge and JupitarExpectancy values". | {24,50} | expect(user.jupitarUnder).toEqual(2).

"Should take in sex input from whatever user inputs". | {"female"} | expect(user.userSex).toEqual("female").

## Setup
_Go to Github_
_search diegosalazar343._
_Clone the Galactus-Calculator project github repo._
_To clone the repository first you must navigate to the main page of the repository._
_Above the list of files, click Code._
_To clone the repository click the clipboard icon._
_Now Open Terminal_
_Change the current working directory to the location where you want the cloned directory._
_Type git clone, and then paste the URL you copied earlier. It should look like this: $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY._
_Open the project in VS Code_
_Edit the numbers in the galactus.tests.js file_
_run npm run test to see your results_

## Known Bugs
_non-working user interface_

## Technologies Used
_HTML_
_CSS_
_JavaScript_
_JQuery_
_node_
_Jest_
_webpack_
_babelrc_

## Legal
* Copyright (c) 2020 **_Diego Salazar_**
* This software is licensed under the MIT license.
