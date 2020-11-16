# _Galactus Calculator_

#### _Galactus Calculator for Epicodus, 11.15.2020_

#### _By Diego Salazar_

## Description
_This project was intended to display our knowledge and practice our test driven development skills. For example, in this project I setting up a testing environment, and practiced test driven development in the application._

## Behavior
* _describe('GalactusCalculator', () => {
Test: "Should create a GalactusCalculator object, and include user input."
Input: {24}.
Output: expect(user.earthAge).toEqual(24).

* _Test: "Should calculate earthUnder value using the earthAge and earthExpectancy values".
Input: {24,50}.
Output: expect(user.earthUnder).toEqual(26)._

* _Test: "Should calculate earthOver value using the earthAge and earthExpectancy values'".
Input: {100, 50}
Output: expect(user.earthOver).toEqual(50)._

* _Test: "Should calculate mercuryAge value using the earthAge value".
Input: {24}
Output: expect(user.mercuryAge).toEqual(100)._

* _Test: "Should calculate mercuryExpectancy value using the earthExpectancy value".
Input: {0, 50}
Output: expect(user.mercuryExpectancy).toEqual(208)._

* _Test: "Should calculate mercuryUnder value using the mercuryAge and mercuryExpectancy values".
Input: {24, 50}
Output: expect(user.mercuryUnder).toEqual(108)._

* _Test: "Should calculate mercuryOver value using the mercuryAge and mercuryExpectancy values".
Input: {100, 50}
Output: expect(user.mercuryOver).toEqual(208)._

* _Test: "Should calculate venusAge value using the earthAge value".
Input: {24}
Output: expect(user.venusAge).toEqual(38)._

* _Test: "Should calculate venusExpectancy value using the earthExpectancy value".
Input: {0,50}
Output: expect(user.venusExpectancy).toEqual(80)._

* _Test: "Should calculate venusUnder values using the venusAge and venusExpectancy values".
Input: {24, 50}
Output: expect(user.venusUnder).toEqual(42)._

* _Test: "Should calculate venusOver value using the venusAge and venusExpectancy values".
Input: {100, 50}
Output: expect(user.venusOver).toEqual(81)._

* _Test: "Should calculate marsAge value using the earthAge value".
Input: {24}
Output: expect(user.marsAge).toEqual(12)._

* _Test: "Should calculate marsExpectancy value using earthExpectancy value".
Input: {0, 50}
Output: expect(user.marsExpectancy).toEqual(26)._

* _Test: "Should calculate marsUnder values using the marsAge and marsExpectancy values".
Input: {24, 50}
Output: expect(user.venusUnder).toEqual(14)._

* _Test: "Should calculate marsOver value using the marsAge and marsExpectancy values".
Input: {100, 50}
Output: expect(user.marsOver).toEqual(27)._

* _Test: "Should calculate jupitarAge value using the earthAge value".
Input: {24}
Output: expect(user.jupitarAge).toEqual(2)._

* _Test: "Should calculate jupitarExpectancy value using earthExpectancy value".
Input: {0, 50}
Output: expect(user.jupitarExpectancy).toEqual(4)._

* _Test: "Should calculate jupitarUnder value using the jupitarAge and JupitarExpectancy values".
Input: {24,50}
Output: expect(user.jupitarUnder).toEqual(2)._

* _Test: "Should calculate jupitarOver value using the jupitarAge age JupitarExpectancy values".
Input: {100, 50}
Output: expect(user.jupitarOver).toEqual(4)._

## Setup
* _Go to Github_
* _search diegosalazar343._
* _Clone the Galactus-Calculator project github repo._
* _To clone the repository first you must navigate to the main page of the repository._
* _Above the list of files, click Code._
* _To clone the repository click the clipboard icon._
* _Now Open Terminal_
* _Change the current working directory to the location where you want the cloned directory._
* _Type git clone, and then paste the URL you copied earlier. It should look like this: $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY._
* _Open the project in VS Code_
* _Edit the numbers in the galactus.tests.js file_
* _run npm run test to see your results_

## Technologies Used
* _HTML_
* _CSS_
* _JavaScript_
* _JQuery_
* _node_
* _Jest_
* _webpack_
* _babelrc_

## Legal
* Copyright (c) 2020 **_Diego Salazar_**
* This software is licensed under the MIT license.
