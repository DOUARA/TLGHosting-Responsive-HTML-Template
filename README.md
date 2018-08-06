# TLGHosting

TLGHosting is a responsive HTML Template built from scratch using SASS and following [BEM](http://getbem.com/) and [SMACSS](https://smacss.com/) Methodologies, 
The PSD has been designed by [Christian Barin](https://thislooksgreat.net/about-thislooksgreat-barin-cristian-doru/) 
, you can download it from [here](https://thislooksgreat.net/web-hosting-website/).

# Live Preview 
Live preview of the project: [here](http://douara.me/portfolio/tlghosting)

# Installation

Gulp is used as task runner for this project, you need **nodeJS** installed on your machine in order to install Gulp and its plugins.
1. Clone the project to your maching
2. To install all the developement and production dependencies, from within the project directory run the command: 
```
npm install  
```
All the dependencies can be found on ***package.json*** file.


# File Structure
```
.
├── builds

    ├── developement
    
    ├── production
    
├── components

    ├── sass
    
    ├── scripts
      
```

# Workflow
- To watch your modifications in *The developement environment* run the command: 
```
gulp
```

- You can now preview your changes on the localhost server, the browser will auto-reload whenever you make modifications:
```
http://localhost:8080/
```

# Making Modifications 

- **HTML**: Make your modifications on the file: `builds/developement/index.html`, this file will get minified when you run the gulp command in *the production environment*
- **CSS**: Any modification in the CSS should be made on the SASS files, found in `components/sass` folder, this Diagram will help you to understand the structure. 
![untitled drawing 1](https://user-images.githubusercontent.com/39377174/43728714-dad9723a-999d-11e8-8376-fc09773e01df.jpg)

- **Javascript**: Add your script files on: `components/scripts` then add them to the **jsSources array** in the `gulpfile.js`, gulp will concatenate all the JS files found in this array. 

- The project uses [browserify](http://browserify.org/) to install and bundle libraries and frameworks.

# Deployment

When your project is ready for deployment you can run the **gulp** command in *the production environment*: 
```
NODE_ENV=production gulp
```
This will generate an optimized version of the project on the production folder:
- Minified HTML code
- One Compressed CSS file
- Optimized and compressed images 
- One compressed Javascript file


![screen shot 2018-08-06 at 4 43 32 pm](https://user-images.githubusercontent.com/39377174/43726838-271b106e-9998-11e8-9b3e-e2963c1af16c.png)

# Resourses 
- [planetoftheweb workflows](https://github.com/planetoftheweb/workflows) 
- [poly](https://github.com/Guilh/poly) 



