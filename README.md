### Vinyl Stash:
A web app for users to create a collection of their vinyls

### Overview
The web app is able to send request for to discogs API to find the vinyls that users currently own and create a visual collection of vinyls they own with out having to shuffle through their vinyls.

### Live Demo
Frontend: https://vinyl-stash.netlify.app
Backend: https://vinyl-stash.onrender.com

### Features:
1. Searching Discogs API for vinyl releases
2. Adding Albums to your collection
3. Users, and Albums being stored in MongoDB
4. Advanced Feature: Session handling for User Authentication

### Advanced Feature
When a User logs in a session cookie is stored in MongoDB and navigates them to the home page. This is done in order to ensure that each user is able to create their own collection.

### Screenshots

### Login Page
![Login Page](screenshots/login_vinyl_stash.png)

### Home/Search Page
![Search Page](screenshots/Search.png)

### Collection Page
![Collection](screenshots/Collection.png)

#### Project Architecture
/Backend
    /models
    /routes
    /controllers
    server.js
/frontend
    /src
        /components
        /pages
        main.jsx

### Flow Explanation:
The react frontend will send fetch requests with cookies to the express backend. The Backend verifies the request by comparing the cookie to sessions stored in MongoDB. The request will have the user id of the user attached in order to allow for distinct and private collections

### Clone the project:
git clone https://github.com/lucas-conrad/Vinyl_Stash.git
cd Vinyl_Stash

### Environment Variables
Backend:
    MONGODB_URI=mongodb+srv://lucaseconrad_db_user:Cheese4life@vinylstash.ezorqiu.mongodb.net/?appName=VinylStash
    PORT=3000
    DISCOGS_TOKEN=IDRzixgBRCKlLGJVlNqiyRFAwtqvSPpJHPQfaUqP
    CLIENT_ORIGIN=http://localhost:5173
    SESSION_SECRET=F72C9AFF9649C7A7252D7748774C5
Frontend:
    VITE_API_URL=https://vinyl-stash.onrender.com

### Install Dependencies

Backend:
cd Backend
npm install
npm start

Frontend
cd frontend
npm install
npm run dev

### Running Locally
Backend on: http://localhost:3000
Frontend on: http://localhost:5173


### Api Documentation

GET/api/album

returns the logged in user's collection of albums

POST/api/album

Adds an album to the user's collection
Ex response:
{
    user	"693b241d216a5bd7f8f3abbc"
    discogsId	11559267
    title	"Car Seat Headrest - Twin Fantasy"
    artist	"Car Seat Headrest"
    year	2018
    thumb	"https://i.discogs.com/rcpBjyeB4zWlwEijH1xpGYgZwO0G0vzLjsQZFTpnMRM/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNTU5/MjY3LTE1MTg0ODQy/ODUtODUxMy5qcGVn.jpeg"
    genres	[]
    styles	[]
    _id	"693c54cebe05d2b408711e4c"
    __v	0
}

DELETE/api/album
Removes an album from a user's collection

POST /api/auth/register
Creates a new user

POST /api/auth/login
Logs in user and creates a session

GET /api/auth/session
Returns if someone is logged in or note {loggedIn: true/false}

POST /api/auth/logout
Destroys the user session

### Deployment notes

Frontend
* hosted on Netlify
* Build command: npm run build

Backend:
* Hosted on Render
* all environmental variables from backend.env in Render Dashboard

### Video Walkthough

link: https://drake.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=60a68bf3-8435-4b43-83d2-b3b10158632a

### Reflection

I struggled a lot with implementing the sessions into the code and database. One resaon for this might have been when I was first building the app I was focused just on setting up the proper handling of API request to dicogs and ignored setting up a user schema or login page. Going back into code already made to update it properly for users to have their own collection became somewhat challenging. I relied on ChatGPT to scan through my files to verify that I was doing it right and it caught a lot of dumb mistakes I was making (a lot of typos I missed). If I was doing this project over again I certainly would have started with session verification and users in mind to avoid those problems entirely. I didn't have a lot of feedback from the Gallery on 12/5 because then I was trying to run my backend on Port 5000 which was dealing with conflicts from a different service running on my Mac I was unaware of.

### AI Acknoledgements

I used ChatPGT as mentioned earlier for helping degguing issues with sessions, as well as error messages in the console of my web app when test locally. 
I also used it to help make sure I was doing my deployment right for the frontend, as when I was working on deployment the deploymend guide document hadn't been published yet.