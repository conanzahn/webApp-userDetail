# Implement a component of a WebApp

This project using React with Typescript implement a component to show a user's details. Data fetched from [API](https://randomuser.me/api/). 

Implementation deployed in github pages: [https://conanzahn.github.io/webApp-userDetail/](https://conanzahn.github.io/webApp-userDetail/), please click to check.


## Design & Layout

You can find the layout overview below:

### There are responsive design for mobile, tablet and desktop view, reference to Bootstrap V5.0.0 breakpoints. 
#### Desktop
![layout](https://user-images.githubusercontent.com/54277153/149626545-4647869c-f37f-463c-ada0-7e0595194e17.jpg)
#### Laptop
![laptop](https://user-images.githubusercontent.com/54277153/149626598-7106d935-9b7a-4cdd-874c-765affa1c81a.jpg)
#### Mobile
![mobile](https://user-images.githubusercontent.com/54277153/149626603-ed76c524-ac04-4647-a57f-3cd3d3433b75.jpg)

### The implemented component includes an active state (click any part of the component), which will show more user's information.
![desktop-active](https://user-images.githubusercontent.com/54277153/149626607-ec8d6ee4-58ed-4882-ab86-b6d41f7ed167.jpg)

## Structure
```bash
.
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
└── src
    ├── assets              # assets
    │   ├── breakpoints.scss    # responsible layout
    │   └── variable.scss       # font, color
    ├── components          # components
    │   ├── InfoCard            # User's information card
    │   │   ├── index.tsx       
    │   │   └── style.scss
    │   └── Loading             # Loading animation
    │       ├── index.tsx       
    │       └── style.scss       
    ├── constants           # constants
    │   └── InfoLabel.ts        # details label
    ├── pages
    │   └── UserInfo            # User's information page
    │       ├── index.tsx       
    │       └── style.scss   
    ├── services            # services
    │   └── UserDetails.tsx     # fetch user's details
    ├── types               # types
    │   └── IUsersInfo.d.ts     # data type interface
    ├── App.tsx
    ├── index.scss
    └── index.tsx
```


## Getting Started

1. Clone this repo to your local machine 
2. Install the dependencies ```[npm install]```


## Run the application

##### ```[npm start]```(This will start the website on the address [localhost:3000](http://localhost:3000))


## Thanks!
Thank you for taking the time to review my code. Looking forward to hearing from you.
