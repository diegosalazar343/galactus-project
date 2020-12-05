# _Galactus Calculator_

#### _Galactus Calculator for Epicodus, 11.15.2020_

#### _By Diego Salazar_

## Description
_This project was intended to display our knowledge and practice our test driven development skills. For example, in this project I setting up a testing environment, and practiced test driven development in the application._

## Behavior

Describe: GalactusCalculator

| Test | Code | Expect
|------ | ------ | ------------
| "Should create a GalactusCalculator object, and include user input. | {24}. | expect(answer.age).toEqual(24).
| "Should calculate earthLeft value using the average life and users age". | {24, 50}. | expect(answer.earthLeft()).toEqual(26).
| "Should calculate earthPassed functionality" | {55, 50} | expect(answer.| earthPassed()).toEqual(5).
| "Should calculate mercuryAge using the age parameter". | {24, 0} | expect(answer.mercuryAge()).toEqual(100).
| "Should calculate the mercuryLeft value using the average life and users age". | {24, 50}  | expect(answer.mercuryLeft()).toEqual(108).
| "Should calculate venusAge using the age parameter". | {24, 0} | expect(answer.venusAge()).toEqual(38).
| "Should calculate the venusLeft value using the average life and users age". | {24,50} | expect(answer.venusLeft()).toEqual(42);.
| "Should calculate venusPassed using the average life and users age". | {55, 50} | expect(answer.venusPassed()).toEqual(8).
| "Should calculate marsAge using the age parameter". | {24, 0} | expect(answer.marsAge()).toEqual(12).
| "Should calculate the marsLeft value using the average life and users age". | {24, 50} | expect(answer.marsLeft()).toEqual(14).
| "Should calculate marsPassed using the average life and users age". | {55, 50} | expect(answer.marsPassed()).toEqual(3).
| "Should calculate jupitarAge using the age parameter". | {24, 0} | expect(answer.jupitarAge()).toEqual(2).
| "Should calculate the jupitarLeft value using the average life and users age".
| {24, 50} | expect(answer.jupitarLeft()).toEqual(2).
| "Should calculate jupitarPassed using the average life and users age". | {55,50} | expect(answer.jupitarPassed()).toEqual(4). |
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
