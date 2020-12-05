<img src="/assets/images/gametitleimage.JPG" style="margin: 0;">

This project - entitled 1-v-1 Challenge Bet - is for Milestone Project 2, Interactive Frontend Development, in the Code Institute.

## Description
1-v-1 Challenge Bet is a game that gives friends the opportunity to bet each other on the outcome of various sporting events.
For the purposes of this project, it is assumed that once the user/game player challenges their friend to a game, that 
friend accepts the invitation and plays the game. In reality, and in future iterations, the recipient of the bet must first accept.
Both users/friends would also be playing for real money whereby payment would be accepted by the platform.
The matches have pre-determined results, which are stored using local Storage in Javascript. Future iterations will include the use of databases.
Although no money is acceptance on the site for technological and licencing reasons, the idea behind the project is to give users a "first glimpse"
of how a production ready version of the site may look. It is ideal for getting initial feedback from the target audience, by asking users which test
features they like, do not like, would like to add etc. 

## User Stories
External users have the following goals when entering the website;
1. Choose a sporting event which they can challenge their friend to bet on:<br>
<img src="/assets/images/eventchoice.JPG"><br>
<br>
2. Select the stake amount to wager on the bet and their team choice:<br>
<img src="/assets/images/chooseamount.JPG"><br>
<img src="/assets/images/chooseteam1.JPG">
<br>
3. See the result and outcome of their bet:<br>
<img src="/assets/images/result1.JPG"><br>
<img src="/assets/images/result1a.JPG">

The site owner has the following goals for the user on the website;
1. Ensure simplicity for the user to select their event:<br>
<img src="/assets/images/eventchoice.JPG"><br>
<br>
2. Make it easy for the user to select the amount wagered and choose their team:<br>
<img src="/assets/images/chooseamount.JPG"><br>
<img src="/assets/images/chooseteam2.JPG">
<br>
3. Provide feedback and results to the user in a non-serious, fun style:<br>
<img src="/assets/images/result2.JPG"><br>
<img src="/assets/images/result2a.JPG">

## User Experience (UX)
Accordions are used on the Challenge Bet game because of their conventional use with popular betting sites. This means the target
audience is generally familar with the user of accordions for selecting sporting events to bet on and some will even expect them.
As such, accordions are used in line with potential customer/user expectations.
To show an example, here is a screenshot taken from popular betting site paddypower.com:<br>
<img src="/assets/images/paddypaccordion.JPG"><br>

In terms of colouring, the site uses blue to denote trust (important when using a site to bet against a friend) and orange which denotes 
fun and reflects the fun element of betting against your friend.<br>
<img src="/assets/images/blueorange.JPG"><br>

There are coloured feedback icons throughout based on user choices and whether each bet was a win, loss or draw:<br>
<img src="/assets/images/feedback1.JPG"><br>
<img src="/assets/images/feedback2.JPG"><br>

## Testing
The HTML code was validated using [this validator](https://validator.w3.org/nu) and showed no errors. The JavaScript code 
was validated using [JS hint](https://jshint.com/). A number of undefined variables were identified, these were subsequently 
identified correctly and no longer appear as errors in the validation tool.<br>

The following manual testing was carried out.<br><br>
Validation:
- First Name field cannot be blank, alert appears (PASS - all five games)
- Last Name field cannot be blank, alert appears (PASS - all five games)

Game selection:
- User can choose bet amount
- User can predict winning team
- 'Challenge Friend!' button opens modal with game details

Game 1:
- Man United selection returns winning message with stake multiplied by 2 (PASS)
- Liverpool selection returns losing message (PASS)

Game 2:
- Real Madrid selection returns losing message (PASS)
- Barcelona selection returns winning message with stake multiplied by 2 (PASS)

Game 3:
- Ireland selection returns draw message with refund of amount staked (PASS)
- England selection returns draw message with refund of amount staked (PASS)

Game 4:
- Rory McIlroy selection returns losing message (PASS)
- The Field selection returns winning message with stake multiplied by 2 (PASS)

Game 5:
- Dublin selection returns winning message with stake multiplied by 2 (PASS)
- Kerry selection returns losing message (PASS)

## Deployment
The project was deployed using Gitpob, with commits being pushed to Gitlab with descriptive messages 
for each commit. The general rule of thumb used was to commit after every major change such as the 
introduction of a new feature or have after 4 or 5 minor changes, such as new text or grammar fixes etc.
Regular commits were subsequently pushed to the main branch which can be accessed [here](https://github.com/RoyoftheRavers/1-v-1-challenge-bet).<br>
The steps taken to deploy the website were as follows:<br> 
[Github](https://github.com/Code-Institute-Org/gitpod-full-template) > 1-v-1-challenge-bet repository > 'Settings' > 'GitHub Pages' > 'Branch: Master' > [URL](https://royoftheravers.github.io/1-v-1-challenge-bet/) generated
Cloning a copy of the repository can also be done by creating a local copy. This can be done by intalling Git and using the 
Command Line Interface (CLI) to store it. Once cloned locally, you can being making edits in any text editor.

## Scalabity
Future iterations of the game will enable challenge bet requests to be sent in real time to other friends. They will
have the choice whether to accept the bet of not. Real money payments can also be added to further releases.

## Technologies
The following technologies and resources were used;
[j-query](https://plugins.jquery.com/) as a Javascript library,
[j-query ui](https://jqueryui.com/) mainly for the use of accordions,
[bootstrap](https://www.bootstrapcdn.com/) for elements such as modals,
[google fonts](https://fonts.google.com/) for styling some of the site's text,
[font awesome](https://fontawesome.com/) for the icons that were used,
[ajax](https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js) as a libray,
[stack overflow](https://stackoverflow.com/) and [w3schools](https://www.w3schools.com/) for learning purposes,
[jsbin](https://jsbin.com/?html,output) and [jsfiddle](https://jsfiddle.net/) for experimenting with code,
[how to geek](www.howtogeek.com) for research on the best way to clone a github repository.

## Wireframes
<img src="/assets/images/wireframe1.JPG"><br>
<img src="/assets/images/wireframe2.JPG"><br>

## Acknowledgements
My mentor Felipe provided excellent guidance throughout the project and helped a lot with the planning aspects. Code Institute tutoring assisted greatly with several technical issues I
encountered throughout the project. Code Institute's support provided encouragement, assistance and support throughout.
