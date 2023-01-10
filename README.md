
<!-- Readme top-->
<a name="readme-top"></a>

<!-- Project shields -->

<!-- centered shields -->

<span style="display:block" align="center" class="shields">

  [![Stargazers][stars-shield]][stars-url]
  [![Issues][issues-shield]][issues-url]
  [![MIT License][license-shield]][license-url]
  [![LinkedIn][linkedin-shield]][linkedin-url]

</span>

<!-- Readme Header -->

<div align="center">
  <img src="assets/images/password_header.png" alt="header-image" width="800" height="200">
</div>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Matt-Jones-Developer/password_generator">
    <img src="assets/images/keyng-icon_sml.png" alt="Logo" width="80" height="80">
  </a>

#
<h2 align="center">Ultimate Password Generator</h2>

  <p align="center">
    A simple webapp that a allows a user to create a unique password.  They can also log-in and change their username.
    Coded in vanilla JavaScript with an HTML and CSS interactive GUI.
    <br />
    <a href="https://github.com/Matt-Jones-Developer/password_generator/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Matt-Jones-Developer/password_generator">View Project</a>
    ·
    <a href="https://github.com/Matt-Jones-Developer/password_generator/issues">Report Bug</a>
    ·
    <a href="https://github.com/Matt-Jones-Developer/password_generator/issues">Request Feature</a>
    ·
    <a href="https://github.com/Matt-Jones-Developer?tab=repositories">Check out my work</a>
    ·
  </p>
</div>

#

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

TODO:

## Overview
 
I was assigned the task of building a password generator web app.
The starter code had a basic GUI design which I developed and improved upon by adding my own styling, icons and images.  I wanted to make the app really 'pop' so I used modern colours, created a blurred filter background of a cryptographic code image, added a simple navbar, header and footer. 

I wanted to offer a user log-in feature that allows a user to 'dummy log-in' to set a custom welcome message to the user.  It is something I learnt whilst studying JavaScript intro tutorials that were provided at the start of bootcamp, so thought it would be a great opportunity to add some flair points to the project. The final version of this app will have a working backend data base - enabling users to actually register, login and create usernames and passwords.  This is a future update, coming soon. 

I asked my family to test this app, an older member said they didn't really 'get how to use it' so I wanted to make the app user proof and walk them through everything with plenty of feedback.  May be a bit overkill, but I feel it was part of my UX work to add better features.

Although the 'Choose Options' button IS an extra step, I think it makes it more enjoyable to use.  I like that if you make a mistake you can simply repeat the options before any passwords are generated. 

I still have the prompts and alerts (as per the criteria) so I hope this will not affect my grade.  It was a UX design choice that I chose to make.  If I get marked down for it, I will re-submit without the additional button.

Adding this button created a new set of bugs and problems, but I got through it and fixed them.  Sometimes (most times?) simple is better!

I am happy with how the app looks, its fully mobile and tablet responsive and I am very glad I took a break from the logic side of the task halfway through to actually customise the app and make it unique.  This was in accordance with my initial wireframing and UX design features and improvements that I designed before starting out this project.  I am proud of this effort.

The main criteria involved vanilla JavaScript only, so I started off by pseudo-coding the entire logical steps for the program to work as intended.  I find my pseudo is slowly improving, however I usually miss steps that then lead to bugs, however I really enjoy getting stuck in to solving them, so I am sure I will improve as time goes on.

I have included my 'working.js' file to show you the amount of work I put into to figuring out the solutions for myself, rather than relying on others or google.  I did contact AskBCS once about some minor bug, but feel that I deserved to have some assistance in ironing that out.

I realise that having the variables as global is bad practice but I felt it worked and a lot of other functions access them, so I will switch out for local and refactor/improve upon this logic in the future.

Another huge lesson learnt: I had the full working solution within the random.js file - I copied it to main.js but forgot to change a variable name to match the main.js - instead of finding this, I quickly started messing with the working file!  I usually make a point to comment it out and make a copy before editing, but didn't.  I then tried to undo but couldn't get it back to a working state. It took me several more attempts before getting it working again.  I welcome errors as a chance to learn and cement it better.

Yes, the working.js file is messy, unreadable in places, but it got my program working.  I finally ironed out a lot of these bugs and even refactored older code into better ideas as they cropped up.  A good lesson regarding the return statement and understanding Separation of Concerns too.

I felt my addition of functions helped readability, debugging and will allow for easier maintenance in the future.  One could also argue there's way too many lines of code for what was required, but I am still learning so I gave myself freedom to experiment. 

I intend to be an excellent programmer one day and I am a firm believer that practice and hard work will get me there. 

There is always time for reminders using google once I am a better programmer, but I always want to be the brain coming up with the solutions to problems, it's more rewarding but it does take longer, and look forward to becoming as competent in programming as I am with website design and development.

#

<!-- the product -->

## The Product

Product screenshot:

[![Product Name Screen Shot][product-screenshot]](https://github.com/Matt-Jones-Developer/password_generator)

## Criteria


* Generate a password when the button is clicked
  * Present a series of prompts for password criteria
    * Length of password
      * At least 10 characters but no more than 64.
    * Character types
      * Lowercase
      * Uppercase
      * Numeric
      * Special characters ($@%&*, etc)
      

  * Code should validate for each input and at least one character type should be selected
  * Once prompts are answered then the password should be generated and displayed in an alert or written to the page

#

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With:

<!-- languages logos -->

![js-logo]::: [![JavaScript]][javascript-url] ![html5-logo]::: [![HTML5]][html5-url] ![css-logo]::: [![CSS]][css-url]



<p align="right">(<a href="#readme-top">back to top</a>)</p>

#

<!-- GETTING STARTED -->
## Getting Started

This very simple console and GUI application can be accessed through your web browser, you can also see the JS working under the hood by entering the console.

When you first load the page, it will offer a tip to click the log-in button to add a username.
Once your name is stored to the cache, it will remember it.  To change it again, just press 'log-in' button again.

To create a set of password options, hit the 'Choose Options' button.
You will be presented with a series of prompts (as per the brief criteria) that refine your password length, what types of characters you want to include and some helpful user feedback alerts.

Once complete, you hit the GENERATE button - the password generated will be printed to the textfield, ready for you to copy and paste using the copy to clipboard button.

As another UX feature, I wanted the user to be able to quick copy the password, using the '+' icon - I am happy with the UX flow on this and feel that whilst alerts and prompts wouldn't be my first choice, they work quite well and it's fun to use. I feel undecided about the addition of the 'choose options' button and may remove it.

Please open main.js within the scripts folder to view my JS code. 
You can also see my tests folder for all the testing, tinkering and coding revisions I made to reach my solutions.

#
### Prerequisites

N/A

#

### Installation

No installation required.  Just load your browser.  If you want to change your username, just hit 'log-in'.  If you don't want to set a username, you don't have to.

If you clear your browsers cache, it will offer the first 'welcome alert' that will advise you to start out by hitting the 'log-in' button.


----------------------------------


<!-- USAGE EXAMPLES -->
## Usage and Screenshots

Screenshot of the programs output with
fully responsive design:

![tablet-screenshot1]
![mobile-screenshot2] ![mobile-screenshot1]

Console log:

![console-output-screenshot]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

----------------------------------

<!-- ROADMAP -->
## Roadmap

1. complete all initial criteria
2. improve on the existing features and add new ones [DONE]
3. improve the UI and add my UX design principles [DONE]
4. build an advanced user log-in backend database that stores all the user data [TODO]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

#

<!-- UX/UI DESIGN -->
## UX/UI Design

Screenshot of the web apps UI design stage:

[![Design Screen Shot][wireframe-screenshot]](https://github.com/Matt-Jones-Developer/password_generator)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

#

<!-- CONTRIBUTING -->
## Contributing

N/A

#

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

#

<!-- CONTACT -->
## Contact

Your Name - [@twitter_handle](https://twitter.com/glitchy81_dev)

#

## Project links

Project Repo Link: [https://github.com/Matt-Jones-Developer/password_generator](https://github.com/Matt-Jones-Developer/password_generator)


Deployed Project Link: [https://matt-jones-developer.github.io/password_generator](https://matt-jones-developer.github.io/password_generator)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Developed from this original README Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/matt-jones-developer/password_generator.svg?style=for-the-badge
[contributors-url]: https://github.com/matt-jones-developer/password_generator/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/matt-jones-developer/password_generator.svg?style=for-the-badge
[forks-url]: https://github.com/Matt-Jones-Developer/password_generator/network/members
[stars-shield]: https://img.shields.io/github/stars/matt-jones-developer/password_generator.svg?style=for-the-badge
[stars-url]: https://matt-jones-developer.github.io/password_generator/stargazer
[issues-shield]: https://img.shields.io/github/issues/matt-jones-developer/password_generator.svg?style=for-the-badge
[issues-url]: https://github.com/Matt-Jones-Developer/password_generator/issues
[license-shield]: https://img.shields.io/github/license/matt-jones-developer/password_generator.svg?style=for-the-badge
[license-url]: https://github.com/Matt-Jones-Developer/password_generator/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: www.linkedin.com/in/matt-jones-zx81
[product-screenshot]: assets/images/screenshots/app-screenshot.png
[console-output-screenshot]: assets/images/screenshots/console_output_screenshot.png
[wireframe-screenshot]: ./assets/images/screenshots/wireframing_screenshot.png
[tablet-screenshot1]: ./assets/images/screenshots/pw_gen_ipad-screenshot.png
[mobile-screenshot1]: ./assets/images/screenshots/pw_gen_mobile-screenshot1.png
[mobile-screenshot2]: ./assets/images/screenshots/pw_gen_mobile-screenshot2.png
[javascript-url]: https://www.javascript.com
[html5-url]: https://html5.org/
[css-url]: https://www.w3.org/Style/CSS/Overview.en.html
[js-logo]: assets/images/icons/js.svg
[html5-logo]: assets/images/icons/html5.svg
[css-logo]: assets/images/icons/css3.svg
