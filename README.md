# TLGHosting

TLGHosting is a responsive HTML Template built from scratch using SASS and following [BEM](http://getbem.com/) and [SMACSS](https://smacss.com/) Methodologies, 
The PSD Has been designed by [Christian Barin](https://thislooksgreat.net/about-thislooksgreat-barin-cristian-doru/) 
you can download it from [here](https://thislooksgreat.net/web-hosting-website/).

# Installation

Gulp is used as task runner for this project, you need **nodeJS** installed on your machine in order to install all the dependecies.
1. clone the project to your maching 
2. from within the project directory run the command 
`
npm install 
` 
All the developement and production dependencies can be found on the file ***package.json***

# Usage 
## File Structure 
`
.
├── builds
    ── developement 
    __ production 
`
- Simply clone the project to your machine and browse to ***index.html***
- The starter structure and the basic functions and mixins used was taken from the template [Poly](https://github.com/Guilh/Poly). 
- Any modification in the CSS should be made on the SASS files, found in the SASS folder, this Diagram will help you to find
where every element's rules reside in.

![diagram](https://user-images.githubusercontent.com/39377174/42687802-e1b53838-8691-11e8-8421-9cb7a05bdf01.jpg)

- Use the SASS command to compile your SASS files into CSS
```
sass scss:css

```
- The only external library used is JQuery and the javascript code resides in the js folder.

# Live Preview 
Live preview of the project on ym personal website [here](http://douara.me/tlghosting)



