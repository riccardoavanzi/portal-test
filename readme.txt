HOW TO USE THIS DEMO SITE

//////
1. PURPOSE
This website is meant to showcase to customers a live demo of the main pages of the portal solution.

/////
2. COMPOSITION
It is composed by a set of static pages (HTML) and a styling (MAIN.CSS) - plus a few lines of JS for the basic behaviors and the import of Bootstrap 5. 
Not all functionalities are available, since it's for demoing purposes.

/////
3. SETUP
The first thing to do is to save the entire folder in your computer (e.g. in Documents). You can rename the folder with the name of your customer.
Secondly, you need to install the coding editor "VS code", which is free and available at this website: https://code.visualstudio.com/
Once installed, you open the editor and drag the website folder inside the empty editor, so you are ready to run the website via the tool.

///////
4. RUN
To run live the website in Chrome, you need to install the extension "Live Server". To do this, open the extensions area with the icon on the left bar (blocks), search for Live Server, and potentially relaunch the application to make sure of its installation.
Live server will be available at the right bottom of the screen, indicating the phase "go live". By clicking there, Live Server will launch the website in a chrome tab.

//////
5. CUSTOMISATION
You can customise the website to adapt to your customer breand identity. You can customise three type of elements:
- assets
- variables
- fonts

    5.1 ASSETS
    There is only one image stored in the asset folder, the logo. Open it in an image editor and replace in to keep the same dimensions.
    In order to change icons (considering them assets), you need to refer to the following icon library: https://boxicons.com/ , and change the icon tag with the one you need.
    The other assets, mainly the background images, need to be changed in the variables.

    5.2 VARIABLES
    Variables are used in the variables.scss file and store values to define the visual appearance of the website. Those contain colors, fonts, images, etc.
    Since those variables are in scss, which has to be "translated" in css to be understood by the browser, you need to install a scss compiler (KOALA) and run it before applying any change.
    PROCEDURE: 
    Tool URL: http://koala-app.com/.
    Once installed, you need select the website project (+ icon on the left, select the websitefolder), and connect the main.scss file to the main.css file. 
    Select the main.scss file, right click, "set output path", and select main.css. Now you should have Koala compiling your scss changes into css.
    Once done with this, you can use the variables.scss file to change the value of specific variables, such as colors, images, etc.

    5.3 FONTS
    If you want to change the font family, you need to go to https://fonts.google.com/, select the one you like, import the 400 and 600 weights, use the import function in the main.scss file (at the top). 
    Once done this, you need to replace the font-family rule with the new value.
