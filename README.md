# Playwright Manipulation Task

This repository contains a Playwright test designed to interact with elements hidden using various CSS techniques. 
This test is part of the interview process for a job as a Software Engineer at Patrol AI inc. 
Software engineers will be using Playwright regularly in day to day tasks at Patrol AI for numerous purposes that extend far beyond testing. 

## Test Instructions 

There are 8 divs containing text inside the index.html included in this repository. The text reads "word 1" through to "word 8".
In the file /tests/elementManipulation.test.ts you should write code that uses Playwright to manipulate the DOM of index.html 
and screenshots all 8 elements before <b>resetting the document back to its original state</b>. 8 sample screenshots have been provided and
are used for evaluation of the screenshots that your solution takes. 

You can run this test when working on your solution by using the command: 

```bash
npm run test
```

This task is expected to take 30 - 60 minutes. Please use strong typing wherever possible and be prepared to discuss your solution 
with the CTO of Patrol AI - Nico van Wijk - in a meeting following the completion of all interview tasks. 

When you have finished this task, please email nico@patrolapp.ai with a zip file of your fixed respository.

## Setup Instructions

### 1. Install Node.js
Make sure you have Node.js installed. You can download it from [https://nodejs.org/](https://nodejs.org/).

### 2. Clone the Repository
Clone the provided repository to your local machine and install playwright. 

```bash
git clone https://github.com/nvanwijk-patrol/playwrightTest
cd playwrightTest
```

### 3. Install Required Dependencies
You will need to install the playwright npm package as well as the playwright browser binaries into the project.

```bash
npm install
npx playwright install
```

## Important Note on Automated Image Comparison

The 8 test images were taken using google chrome running on Linux Mint. If using a different browser or OS, the images 
might not match perfectly due to differences in font. Do not worry if you fail the automated evaluation as long as the 
captured screenshots pass the eye test and look close enough to the example pictures. 







