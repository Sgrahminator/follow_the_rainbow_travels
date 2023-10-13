Using Bootstrap - Vite - MERN: Mongoose, Express, React, Node 

Project Name: "Pride Worldwide"

Concept: A worldwide, user-driven recommendation website where LGBTQIA+ individuals and allies can share and discover LGBTQIA+ friendly and accepting places and/or events across various categories.

*All pages except the login/registration page will have this at the top of their pages*
Top of page: 
"Discover and Share LGBTQIA+ Friendly Spots with Confidence — Your Safe Harbor in an Open World"

Navigation: Quick-access tabs for Home, About, Categories, Safety Tips, Ally Corner, and Profile circle/spot.
- Each button/tab will route/direct to it's respective page.
- The profile circle/spot will display the users chosen profile image and when clicked on it will have 3 options. 
1. A link to the users profile page
2. A link for Support/Contact us
3. A Logout link
 - Quick-Access tabs will be Home, Categories, About, Safety Tips, and Ally Corner. 
          - These navigation tabs will be at the top of every page except the Login and Registration page. 
          - Inline with the Quick Access tabs will be a profile circle. 
          - This circle when clicked on will drop down 3 options, Profile Page, Support/Contact Us, and Logout. 
          - Profile page will direct to the user in session's profile page, Support/Contact Us will direct to a Contact Us Page, and Logout will logout the user in session directing the user to the login registration page.

Login/Register Page ("/"): User-centric gateway for both returning and new members of the Pride Worldwide community. 
 - Features straightforward login and registration forms with clearly outlined benefits for joining the community. 
 - Emphasizes the platform's commitment to safety, privacy, and respectful interactions. 
 - Login being the usual Email and Password (hashed) form. 
 - Registration will have Name (First and Last), Username (a user created name for themselves), Pronouns (a drop down of options - He/Him, She/Her, They/Them), Membership Type (radio button choice of LGBTQIA+ or Ally), Email, Password (hashed), and Confirm Password (confirm). 
 - Once logged in the user will direct/route to the Home Page ("/home").
 - Typically the home page would be the main route ("/"), in this case the login/registration page is the main route ("/") - users can not see anything within the website unless they're registered and logged in.

Home Page ("/home"): The main page users/members see. 
 - It will have 3 sections that highlight 3 different things
 - 1. top reviewed submissions 2. top reviewers 3. newest additions. 
 - Each section will have a "See All" option that will direct to page with a full display of all submissions in that category. 
 - There will be a place for users to create their own submission.
    - User Submissions: Users can submit a city, a country, a company, an event, an accommodation, an adventure/vacation, etc. with details like the name of the place/event/ect., address or area, and a brief description including why they think it's LGBTQIA+ friendly, optional photo(s). 
    - Submissions are how we grow the site and grow recognition for places/events/areas/etc
    - Once submitted users can then rate the review on a 1 to 5 star rating
    - Once a specific place/event/area/etc is submitted any other submissions of the same place/event/area/etc will attach to one another

About Page ("/about"): A detailed explanation of how the page came to be with the rules emphasized about being respectful and no bullying. 
 - An "About Pride Worldwide" section
 - An "Our Origin" section
 - A "What We Do" Section
 - An "Our Promise" section
 - A "Join Us" section

Categories Page ("/categories"): A page to view LGBTQIA+ friendly countries, cities, cruises, bars/nightlife, restaurants, vacation destinations/packages/adventures, accommodations, events, and shopping/company reviews.  
 - There will be different sections for different categories. IE: companies, events, accommodations, adventures/vacation packages, etc.
 - Each section will highlight 5 or more of the top rated reviews in that category
	- Review/Comments & Ratings: 
	      - Comments can be up to 1000 characters. 
              - Ratings will be stars with a 1 through 7 option. *each star a different color so if all 7 are chosen it forms a rainbow*
              - For every submission allow others to comment and rate the submitted place/event/area/etc with the option to "See All" reviews
		   - If a "See All" is clicked from a specific place/event/area/etc it will take the user to a "SeeAll" page for all reviews submitted for that specific place/event/area/etc with filters specifying or narrowing it down to that specific place/event/area/etc with the option to broaden the filters.
	- Filter: Users can filter by highest ratings, recent additions, specific category, a specific place/event/area/etc, or city/area/country. 

Safety Tips ("/safety"): A page where users can learn and share safety tips. 
 - A page of safety tips. 
 - A few given by us/Pride Worldwide and the rest given as input/tips from the users. 
 - The user submitted safety tips can have some highlighted and a link to See All with a filter option to make the search easier. 
 - A place for users to submit their own safety tips. 

Ally's Corner ("/allies"): A dedicated section where allies can show support, ask questions, and learn about the LGBTQIA+ community.
 - A section for Q&A where Ally's or Users can ask questions and other members can respond. 
 - It will need a See All that directs to a page of all Q&A's. 
 - A section for support posts (text or image or a combo of both), a positive posts section. 
 - It will need a See All that links to a page of all positive posts. 
 - A section thanking our allies for their support and love.

Profile Page ("/profile"): A place where users can show places they've been (descriptions and photos), reviews they've done, a brief description of themselves, a spot for a photo for their profile (can be of themselves or something else). 
 - There will be 2 different views for the profile page depending on if the profile page being viewed is the user in session's profile or another user's profile. 
       - If the User in session is viewing their profile it should have options to edit, remove, add to each section (Profile image, Name, Username, Pronouns, review submissions, photo submissions, badges earned, and the short description written by the user). 
       - If the User in session is viewing another members profile there should be no editing options and the profile user will have the option to have their name and username or just their username visible to other users.

*this will be a page added later once the page goes public*
Admin Page ("/admin"): Moderation is crucial for ensuring the quality, safety, and reliability of user-generated content on the platform. 
 - The admin panel will serve as a dashboard for the team to oversee all activities on Pride Worldwide, allowing us to manage users, reviews, submissions, and more. 
 - The Admin Page serves as a control center for the administrators of Pride Worldwide. 
 - It should be easily navigable, allowing quick access to different functionalities. 
 - It should also have high-level security features like two-factor authentication to ensure only authorized personnel can access it. 
 - We will be separating out admin permissions depending on the level of admin access as well.



 pride-worldwide/
│
├── client/
│    ├── public/
│    │    └── vite.svg
│    ├── src/
│    │    ├── assets/             # Images, fonts and other static files
│    │    ├── components/
│    │    ├── Navigation/
│    │    │   └── Navigation.jsx
│    │    ├── Header/
│    │    │   └── Header.jsx
│    │    ├── Footer/
│    │    │    │   │   └── Footer.jsx
│    │    │    │   ├── RatingStars/
│    │    │    │   │   └── RatingStars.jsx
│    │    │    │   ├── UserSubmissionForm/
│    │    │    │   │   └── UserSubmissionForm.jsx
│    │    │    │   └── ReviewCard/
│    │    │    │       └── ReviewCard.jsx
│    │    │    │
│    │    │    ├── pages/
│    │    │    │   ├── Home/
│    │    │    │   │   └── Home.jsx
│    │    │    │   ├── LoginRegister/
│    │    │    │   │   ├── Login.jsx
│    │    │    │   │   ├── Register.jsx
│    │    │    │   │   └── LoginRegister.jsx
│    │    │    │   ├── About/
│    │    │    │   │   └── About.jsx
│    │    │    │   ├── Categories/
│    │    │    │   │   └── Categories.jsx
│    │    │    │   │   └── components/
│    │    │    │   │       ├──
│    │    │    │   ├── SafetyTips/
│    │    │    │   │   └── SafetyTips.jsx
│    │    │    │   ├── AllyCorner/
│    │    │    │   │   └── AllyCorner.jsx
│    │    │    │   └── Profile/
│    │    │    │       ├── ViewProfile.jsx
│    │    │    │       ├── EditProfile.jsx
│    │    │    │       └── Profile.jsx
│    │    │    │
│    │    │    ├── routes/             # Route definitions and guards
│    │    │    │   └── index.jsx
│    │    │    │
│    │    │    ├── services/           # Services for http requests
│    │    │    │   ├── authService.jsx
│    │    │    │   ├── userService.jsx
│    │    │    │   ├── reviewService.jsx
│    │    │    │   └── categoryService.jsx
│    │    │    │     
│    │    │    ├── styles/             
│    │    │    │   ├── components/   # Styles related to specific components
│    │    │    │   │   ├── Navigation.css
│    │    │    │   │   ├── Footer.css
│    │    │    │   │   ├── RatingStars.css
│    │    │    │   │   ├── UserSubmissionForm.css
│    │    │    │   │   └── ReviewCard.css
│    │    │    │   │
│    │    │    │   └── pages/        # Styles specific to different pages
│    │    │    │       ├── Home.css
│    │    │    │       ├── LoginRegister.css
│    │    │    │       ├── About.css
│    │    │    │       ├── Categories.css
│    │    │    │       ├── SafetyTips.css
│    │    │    │       ├── AllyCorner.css
│    │    │    │       └── Profile.css
│    │    │    │
│    │    │    ├── utils/              
│    │    │    │
│    │    │    ├── App.css
│    │    │    ├── App.jsx 
│    │    │    ├── index.css             
│    │    │    └── main.jsx 
│    │    │
│    │    ├── .eslintrc.cjs
│    │    ├── .gitignore
│    │    ├── index.html
│    │    ├── package-lock.json
│    │    ├── package.json
│    │    ├── README.md
│    │    └── vite.config.js