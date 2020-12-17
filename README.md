# FitLit Fitness Tracker

This is an initial design for a fitness app called FitLit

## Usage

Upon loading the page, a random user's information is displayed in widgets coordinated by colored icons and graphs. Daily stats are listed at the top of the page, followed by graphs of weekly trends based on users hydration, sleep, and activity stats for the latest week. At the bottom of the page, the user can see how their daily statistics compare to the average of all users on the app. As the designers of this app, we want to emphasize that we do not encourage individuals to compare their personal fitness journeys to anyone else's, however we understand some users are motivated by friendly competition.

![gif of site/random user](https://media.giphy.com/media/kOlOOCfu7kQEe60iaW/giphy.gif)

This site was designed to be responsive to screen size, as seen below.

![gif of breakpoints](https://media.giphy.com/media/UJmCUzW7VOLeB4tHRZ/giphy.gif)


## How to Install
1. `fork` this repository
2. `git clone` it down to your command line
3. Navigate into the repository on your machine
4. Run `npm install`
5. Open src/index.html

OR

Visit live site [here](https://kristenmb.github.io/fitlit-starter-kit/src/)

## Planning
We utilized github projects for project management, that board can be found [here](https://github.com/kristenmb/fitlit-starter-kit/projects/1). <br>
The detailed spec for this project can be found [here](http://frontend.turing.io/projects/fitlit.html). <br>
For wireframing we used Miro and our project planning board can be found [here](https://miro.com/welcomeonboard/KsaOuCdyayrVNOwEPtEudewa3xcPRqkKMp5XCFAaHyWNQzYG0R7xqPOWJUtHhB3K).

### Testing development
For each file we created testing suites to ensure the build would function as expected with larger data sets. We utilized Mocha and Chai for testing, and created small data sets to test from. Although we created our own testing data sets, we worked to develop the functionality to be able to handle data sets of unknown sizes to help to ensure our functionality would remain viable. 

### Challenges
There were many logic challenges throughout this project, however we found solutions quickly and collaboratively. Below are a couple of examples:
   * Finding and accessing only a weeks worth of data for either a single user, or a weeks worth of data for all users. We solved this by identifying the first index of our data array where the condition we were searching for occured, then determined the number of users listed in the data set, and were able to slice a copy of the data for a week for all users.
   * As this was our first time using Chart.js, there was a steep learning curve. Our biggest hurdle was learning how to customize the chart to display how we wanted. 
   * We needed to find a way to filter a specific users data into each class file - Sleep, Activity, and Hydration. We did this by utilizing the filter iterator method.
   * Developing robust testing suites proved to be challenging and time consuming, but gave us confidence in the effectiveness of our functionality moving through each iteration.  

### Wins
   * Team work and collaboration - a good teammate can make a project more enjoyable, expidite the developement process, and help to make the final product better. We found a great balance of team work, collaboration, organization, and supporting each others ideas. 
   * Chart.js and Moment.js - we were able to implement both of these 3rd party libraries quickly and effectively (with a little help), and it elevated the look of our app. (We did have a slight implementation misstep by creating Chart.js and Moment.js files in our repo when we could have referenced the hosted site urls in our HTML file instead. Because we implemented this towards the end of our project, we did not have time to adjust this yet, but will change in future iterations)
   * App design - after conducting research on fitness apps, we were disappointed to see the definitive juxtaposition of apps directed towards men or women specifically. Men’s fitness apps seemed to be darker, harsher, more intense. Women’s seemed to be lighter, with softer edges, words, phrasing, and tone. We decided we wanted to combine these tropes and create an app that was gender neutral. Our darker theme, offset by brighter neon icons and charts evened out the color differences between stereotypically male or female directed fitness apps. We combined a generally neutral tone with rounded widget edges for a softer feel, and all capitalized text to provide some stronger, more intense tones as well. 


## Technologies Used
1. JavaScript (vanilla)
2. HTML/CSS
3. Moment and Chart.js
4. Chai & Mocha

## Future Iterations
   * User Login - Create a user login page to begin development towards creating new profiles, and admin access.  
   * Customizable Dashboard - Creating drag and drop widgets to allow user to customize their dashboard. This order would be retained across sessions. 
   * Optional Community Comparisons - For users that enjoy friendly competition, allow the option to enable community stats view, but by default community stats would be hidden. 
   * Chart/Moment clean up as discussed above.
   * Further WAI-ARIA Developemnt - Expanding our use of WAI-ARIA to make the site more accessible. 


## Project Members
This project was designed and implemented by [Cameron Aragon](https://github.com/caragon4695) & [Kristen Bair](https://github.com/kristenmb)


