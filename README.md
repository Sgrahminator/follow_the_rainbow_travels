Using JavaScript - Vite - MERN: Mongoose, Express, React, Node 

Project Name: "follow_the_rainbow_travels"

Concept: A worldwide, user-driven recommendation website where LGBTQIA+ individuals and allies can share and discover LGBTQIA+ friendly and accepting places and/or events across various categories.

Login/Register Page ("/"): User-centric gateway for both returning and new members of the "Follow the Rainbow Travels" community. 
 - Features straightforward registration and login forms with clearly outlined benefits for joining the community. 
 - Emphasizes the platform's commitment to safety, privacy, and respectful interactions.  
 - Registration will have Name (First and Last), Username (a unique user created name for themselves), Pronouns (a drop down of options - 'He/Him', 'She/Her', 'They/Them', 'He/They', 'She/They', 'Other'), Membership Type (radio button choice of LGBTQIA+ or Ally), Email, Password (hashed), and Confirm Password.
 - Login being the usual Email and Password (hashed) form. 
 - Once registered properly the user will receive a successfully registered message, the page will refresh, and the user will be directed to the Login section.
 - Once logged in the user will be directed to the Home Page ("/home").
 - Typically the home page would be the main route ("/"), in this case the login/registration page is the main route ("/") - users can not see anything within the website unless they're registered and logged in.


LOGIN/REGISTRATION PAGE

This is one, single page and Registration and Login need to work as separate functions, yet work seamlessly together.

Main Content: 
*The registration section will be aligned to the left side of the page and the login section will be beside or next to it aligned to the right. Then under registration and login there will be several sections: "Membership Exclusivity for Your Safety", "Why Join", and "Our Commitment to Safety and Respect."*

*Registration* - This section is aligned to the far left of the page with the Login section directly next to it aligned to the far right of the page. It will have the following above the form:
For New Adventurers:
Not signed up yet? What are you waiting for? Become a part of our inclusive community and gain access to a world of recommendations and experiences that you won’t find anywhere else. A place to feel safe, show support, and be yourself.

The Form should look like this:
First and Last Name: *Both first and last name - Name is required - Must be a minimum of 2 characters*
Username: *a unique name the user chooses for themselves - Username is required - Must be a minimum of 2 characters*
Pronouns: *a drop down choice of 'He/Him', 'She/Her', 'They/Them', 'He/They', 'She/They', 'Other'*
Membership Type: *Radio buttons with the options, 'LGBTQIA+' or 'Ally'*
Email: the users email *Email is required - Email must be in correct format. example: 'abc@xyz.com' - Must be a minimum of 9 characters*
Create a Password: *hashed - Password is required - Must be a minimum of 8 characters - Must be a mixture of upper and lower case - must be a mixture of letters and numbers*
Confirm Password: *hashed - Confirm Password is required - Must match Password*

Directly below the form is a button that says "Register"

Once registered properly the user clicks the Register button, receives a successfully registered message, and is directed to the login section

*Login* - This section is aligned to the far right of the page with the Registration section directly next to it aligned to the far left of the page. It will have the following above the form:
For Returning Users:
Are you an explorer who has already joined our mission? Welcome back! Just enter your email and password below to jump right back into discovering and recommending LGBTQIA+ friendly and accepting spaces.

The Form should look like this:
Email: *the users email they used to register - Email is required - Email must be in correct format. example: 'abc@xyz.com'*
Password: *hashed - Password is required*
  - If the password or email are incorrect or not register the wording should state 'Account not Found', to try and keep things more secure*

Directly below the form is a button that says "Login"

Once logged in properly the user clicks the Login button, receives a successfully logged in message, and is directed to the HomePage ("/home")

*Below the login/registration section will be the following sections*

Membership Exclusivity for Your Safety:
We are deeply committed to the safety and well-being of our community. Access to specific content and features on Follow The Rainbow Travels is reserved exclusively for our registered members. This level of exclusivity is necessary to ensure a secure, private, and respectful environment. When you join us, you are not just gaining access to reviews, recommendations, and safety tips; you are joining a protected network dedicated to promoting LGBTQIA+ friendly spaces across the globe. We take your safety seriously and work tirelessly to vet all contributions to our platform. So why not join us and become part of a global community that thrives on respect, safety, and inclusivity?


Why Join?
Share your recommendations and reviews for LGBTQIA+ friendly places across categories like bars, restaurants, vacations, and more.

Engage with a global community that's passionate about safe and welcoming spaces.

Explore highly-rated places that you might not know about.

Share or receive invaluable safety tips.

Learn and interact with allies in our Ally Corner.


Our Commitment to Safety and Respect:
We value each member's privacy and safety. Rest assured that your information will be kept secure. For more details, visit our Privacy Policy and Terms of Service. In keeping with the spirit of our community, we emphasize respectful interaction. Any form of harassment or bullying will not be tolerated.

*All pages except the login/registration page will have this at the top of their pages*
Top of page: 
"Discover and Share LGBTQIA+ Friendly Spots with Confidence — Your Safe Harbor in an Open World"

Top of page Navigation: Links for Home, About, Categories, Safety Tips, Ally Corner, and a Profile circle.
- Each link will route/direct to it's respective page.
- The profile circle will display the users chosen profile image or the default image if none is uploaded and when clicked on it will have 2 options. 
1. A link to the users profile page
2. A Logout link
          - Inline with the Quick Access tabs will be a profile circle. 
          - This circle when clicked on will drop down 2 options, Profile Page and Logout. 
          - Profile page will direct to the user in session's profile page and Logout will logout the user in session directing the user to the login registration page ("/).

Home Page ("/home"): This is the main page users/members see once they login
 - It will have 3 sections that highlight 3 different things and a section to create a new submission.
 - The 3 sections of highlights1. top reviewed submissions 2. top reviews 3. newest additions. 
 - Each section will have a "See All" option that will direct to page with a full display of all submissions and their reviews in that category. 
 - The place for users to create their own submission(s).
    - User Submissions: Users can submit a submission in one or multiple of the following categories: 'Accommodations', 'Bars/Nightlife', 'Cruises', 'Events', 'Restaurants', 'Shopping', 'Vacations/Adventures' with details: the name of the place/event/ect., the category or categories it's a part of, the address or area (country, state, city, region), a brief description including why they think it's LGBTQIA+ friendly, an optional photo(s) section, a spot to mark if a submission is LGBTQIA+ owned or not, and a star rating of 1 through 7 for the submission they are submitting. 
    - Submissions are how we grow the site and grow recognition for places/events/areas/safe-spaces/community-friendly/etc
    - Once submitted other users can then rate the review on a 1 to 7 star rating as well as leave comments and/or an optional photo(s) of their experience there.
    - Submissions and reviews are 2 separate things that are also attached to each other, Every review has to be attached to a submission. Each submission will have the ability to have multiple reviews on it. 
    - Submissions are created by 1 user and reviews are created by other users in regards to the original users submission.

About Page ("/about"): A detailed explanation of how the page came to be with the rules emphasized about being respectful and no bullying. 
 - An "About Follow the Rainbow Travels" section
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
 - When viewing a specific category users can use filters to navigate through submissions (the filters will grow as the app grows)
	- Filter: Users can filter by highest review ratings (will provide all submissions for that category, just start with the highest rated submission to the lowest rated submission... rated by their reviews), recent additions (will provide all submission for that category, just filter them from the newest to oldest), and oldest submissions (will provide all submission for that category, just filter them from the oldest to newest).

Safety Tips ("/safetytips"): A page where users can learn and share safety tips. 
 - A page of safety tips. 
 - A few set by us/'Follow the Rainbow Travels' and the rest given as input/tips from the users. 
 - The user submitted safety tips can have some highlighted and a link to "See All". 
 - A place for users to submit their own safety tips. 

 SAFETY TIPS PAGE

Safety Tips Header: "Safety First, Always"

Introduction: At Follow The Rainbow Travels, we prioritize the well-being of our members. Whether you are exploring a new destination or engaging with others online, we want you to do so safely. Below are some safety guidelines we recommend:

Online Interactions:
Always protect your personal information. Avoid sharing addresses, phone numbers, or financial details unless you are sure about the site security and the person you are communicating with.

Meet-up Safety:
If you are meeting someone from the platform or any social media app, always meet in public places and let someone you trust know where you will be.

Local Laws and Customs:
Always research the local laws and customs related to LGBTQIA+ rights when you're visiting a new country or city. This is especially important for countries where same-sex relationships or LGBTQIA+ activities are criminalized.

Be Cautious While Traveling:
Use registered and trusted transport services, especially when arriving in a new place. It may be worth splurging a bit on trusted companies rather than taking a risk with an unknown service.

Emergency Contacts:
Always have local emergency numbers and the number for the embassy for your country when traveling abroad.

Report Incidents:
If you face discrimination or harassment, report it to local authorities and alert the community by sharing your experience on the platform (if you're comfortable doing so).

Secure Your Account:
Use strong, unique passwords and consider enabling two-factor authentication for added security.

Health Precautions:
If you’re attending events, especially in closed spaces, follow health guidelines such as wearing masks and social distancing, as applicable.

Alcohol and Substance Use:
Be mindful of your alcohol and substance use, particularly in unfamiliar settings.

Trust Your Gut:
If something feels off, it probably is. Always trust your instincts.

Family and Friends:
Let someone you trust know your itinerary and check-in regularly, especially if you're exploring a new place or meeting new people.

Accessibility:
Check in advance if the places you're visiting are accessible if you or someone you're with has special accessibility needs.

Online Interaction/Input From Users: 
*Users comments and/or safety tips* 

Respect & Community:

Spread Love, Not Hate: Our platform thrives on positivity. Engage respectfully and kindly. Remember, bullying or disrespect will not be tolerated.

Report & Support: Help us maintain a safe space. Report any inappropriate behavior, and we will take necessary action.

Conclusion: Safety is a collective responsibility. While we strive to ensure Follow The Rainbow Travels remains a safe haven, your awareness and prudence play an integral role. Let's together create a safe and welcoming space for everyone!

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
