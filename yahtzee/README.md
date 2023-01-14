Welcome, everything is fine!

I loved playing Yahtzee as a kid (and still do!) and have been thinking for a while now about making a Yahtzee game as a small project. I got stuck thinking that I needed to learn x, y and z before even starting, but after speaking with the developers at my work, they advised me to just freakin' start because you will always feel you do not know enough. They are right: I can get a decent version of the game working and go back and make improvements as I learn more.

My intention for this project is not only to build and learn as I go, but to document my steps as I go not only for me to look back on and reference for future projects, but for anyone interested on my process and thinking throughout the project.

HERE WE GO!!

1. I npx create-react-app then added Redux and React Router to get started. More than likely more will be added later, but this was to jsut get started.
    L Redux to manage scrores, rolls and dice state
    L React Router to handle different routes/navigation

2. I set up the folder/file structure as such:
Yahtzee/
├── public/
│   ├── favocon.ico
│   ├── index.html
│   |── manifest.json
│   |── robots.txt
├── src/
│   ├── components/
│   │   ├── Dice/
│   │   │   ├── Dice.js
│   │   │   └── Dice.css
│   │   ├── Game/
│   │   │   ├── Game.js
│   │   │   └── Game.css
│   │   ├── Home/
│   │   │   ├── Home.js
│   │   │   └── Home.css
│   │   ├── Scorecard/
│   │   │   ├── Scorecard.js
│   │   │   └── Scorecard.css
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── other files created by react
├── package-lock.json
├── package.json
└── README.md
**NOTE** I added a css file for each, but initially did not add the files as I still do not know how I will style the project. it as added here as a reference for later.

3. Added the routes.js file and set up the starting routes for the different components. Still not really certain on how to use the routes, but thery are built so when I am ready I can use them.

**NOTE** Had issues with an eslint error ERROR in Plugin "react" was conflicted between "package.json » eslint-config-react-app » \node_modules\eslint-config-react-app\base.js" and "BaseConfig 
To fix this I had to go into the setupTests.js file and add this statement: import '@types/jest'