Using Vite - MERN: Mongoose, Express, React, Node - JavaScript

Project Name: "follow_the_rainbow_travels"

Concept: A worldwide, user-driven recommendation website where LGBTQIA+ individuals and allies can share and discover LGBTQIA+ friendly and accepting places and/or events across various categories.


Login/Register Page ("/"): User-centric gateway for both returning and new members of the Pride Worldwide community. 
 - Features straightforward login and registration forms with clearly outlined benefits for joining the community. 
 - Emphasizes the platform's commitment to safety, privacy, and respectful interactions. 
 - Login being the usual Email and Password (hashed) form. 
 - Registration will have Name (First and Last), Username (a unique user created name for themselves), Pronouns (a drop down of options - 'He/Him', 'She/Her', 'They/Them', 'He/They', 'She/They', 'Other'), Membership Type (radio button choice of LGBTQIA+ or Ally), Email, Password (hashed), and Confirm Password. 
 - Once logged in the user will direct/route to the Home Page ("/home").
 - Typically the home page would be the main route ("/"), in this case the login/registration page is the main route ("/") - users can not see anything within the website unless they're registered and logged in.

Home Page ("/home"): This is the main page users/members see once they login
 - It will have 3 sections that highlight 3 different things and a section to create a new submission.
 - The 3 sections of highlights1. top reviewed submissions 2. top reviews 3. newest additions. 
 - Each section will have a "See All" option that will direct to page with a full display of all submissions and their reviews in that category. 
 - The place for users to create their own submission(s).
    - User Submissions: Users can submit a submission in one or multiple of the following categories: 'Accommodations', 'Bars/Nightlife', 'Cruises', 'Events', 'Restaurants', 'Shopping', 'Vacations/Adventures' with details: the name of the place/event/ect., the category or categories it's a part of, the address or area (country, state, city, region), a brief description including why they think it's LGBTQIA+ friendly, an optional photo(s) section, a spot to mark if a submission is LGBTQIA+ owned or not, and a star rating of 1 through 7 for the submission they are submitting. 
    - Submissions are how we grow the site and grow recognition for places/events/areas/safe-spaces/community-friendly/etc
    - Once submitted other users can then rate the review on a 1 to 7 star rating as well as leave comments and/or an optional photo(s) of their experience there.
    - Submissions and reviews are 2 separate things that are also attached to eachother, Every review has to be attached to a submission. Each submission will have the ability to have multiple reviews on it. 
    - Submissions are created by 1 user and reviews are created by other users in regards to the original users submission.

About Page ("/about"): A detailed explanation of how the page came to be with the rules emphasized about being respectful and no bullying. 
 - An "About Pride Worldwide" section
 - An "Our Origin" section
 - A "What We Do" Section
 - An "Our Promise" section
 - A "Join Us" section

Categories Page ("/categories"): A page to view LGBTQIA+ friendly 'Accommodations', 'Bars/Nightlife', 'Cruises', 'Events', 'Restaurants', 'Shopping', 'Vacations/Adventures' and their reviews.  
 - There will be different sections for different category. 
 - Each section will highlight 5 or more of the most recent submissions in that category
 - Each submission will have the ability to have reviews (none, 1, or multiple) from other users
	- Review/Comments, Photo(s), & Ratings: 
	      - Comments can be up to 1000 characters. 
              - Ratings will be stars with a 1 through 7 option. *each star a different color so if all 7 are chosen it forms a rainbow*
              - For every submission allow others to comment, rate, and upload an optional photo(s) with the option to "See All" reviews associated with that specific submission
		   - If a "See All" is clicked from a specific category or submission it will take the user to a "SeeAll" page for all reviews submitted for that specific submission or a page to view all submission for that specific category.
 - When viewing a specfic category users can use filters to navigate through submissions (the filters will grow as the app grows)
	- Filter: Users can filter by highest review ratings (will provide all submissions for that category, just start with the highest rated submission to the lowest rated submission... rated by their reviews), recent additions (will provide all submission for that category, just filter them from the newest to oldest), and oldest submissions (will provide all submission for that category, just filter them from the oldest to newest).

Safety Tips ("/safetytips"): A page where users can learn and share safety tips. 
 - A page of safety tips. 
 - A few set by us/'Follow the Rainbow Travels' and the rest given as input/tips from the users. 
 - The user submitted safety tips can have some highlighted and a link to "See All". 
 - A place for users to submit their own safety tips. 

Ally Corner ("/allycorner"): A dedicated section where allies can show support with positive posts, ask questions and get answers, and learn about the LGBTQIA+ community.
 - A section for Q&A where Ally's or  any user can ask questions and other users can respond. 
 - Every question will have the ability to have an answer or multiple answers attached to it.
 - It will need a "See All" that directs to a page of all Questions and their answers. 
 - A section for support posts that can be text or image or a combo of both, a positive posts section. 
 - It will need a "See All" that links to a page of all positive posts. 
 - A section thanking our allies for their support and love.
 - Each section is it's own separate thing. Positive posts and the Q&A sections are not related.

Profile Page ("/profile"): A place that will display users name (first and last), username they created, submissions they've done, reviews they've done, an optional brief description of themselves, a spot for an optional photo for their profile. 
 - There will be 2 different views for the profile page depending on if the profile page being viewed is the user in session's profile or another user's profile. 
       - If the User in session is viewing their own profile it will show everything discussed above (the users name (first and last), username they created, submissions they've done, reviews they've done, the optional brief description of themselves, and the optional photo) and should have options to edit, remove, or add to each of the following sections: Profile image, Name, Username, Pronouns, and the optional short description written by the user. 
       - If the User in session is viewing another users profile there should be no editing options and they can view everything discussed above (the users name (first and last)/username/combo, submissions the other user has done, reviews they've done, the optional brief description of the other user (if they did one), and the optional photo). The owner of the profile will have the option to either have their name, username, or both for other users to see. 

*this will be a page added later once the page goes public*
Admin Page ("/admin"): Moderation is crucial for ensuring the quality, safety, and reliability of user-generated content on the platform. 
 - The admin panel will serve as a dashboard for the team to oversee all activities on Follow the Rainbow Travels, allowing us to manage users, reviews, submissions, and more. 
 - The Admin Page serves as a control center for the administrators of Pride Worldwide. 
 - It should be easily navigable, allowing quick access to different functionalities. 
 - It should also have high-level security features like two-factor authentication to ensure only authorized personnel can access it. 
 - We will be separating out admin permissions depending on the level of admin access as well.




