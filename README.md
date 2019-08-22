
# Copernicus Component Library

The Copernicus component library (CCL) is a comprehensive style guide containing the design elements and visual standards that make up all Copernicus websites and applications.

The following describes the structure inside the repository to provide guidance on what is available in each folder and its usefulness

## ccl-assets

Contains necessary elements for the page display in the Copernicus tempalte.
The content of this library is as follows:

### CSS 

#### ccl-icons.css

Contains classes for [font icons](https://eu-copernicus.github.io/copernicus-component-library/ccl-elements/ccl-icons.html)

#### ccl.css

Main style sheet used to import all others. 

And should be integrated in the page template

#### color.css

Contains all color reference for every elements by service theme.
This option was selected as in certain cases we might need to apply more than once colour theme per website ie "multitheme" approach.

#### elements.css

contains the class and syles of [html elements](https://eu-copernicus.github.io/copernicus-component-library/ccl-layout/ccl-template.html) 

#### fonts.css 

Contains the class for the LATO font

#### styles.css 

contains the class for the Copernicus elements 
* logos
* typography
* service buttons
* colors
* sevice icons
* etc ...

#### template.css 

contains the class and syles of [html elements](https://eu-copernicus.github.io/copernicus-component-library/ccl-layout/ccl-template.html) 

#### fonts & images 

* LATO font and ccl-icons library
* images 
  * Copernicus logo
  * different service icons

*All images are in vectorised svg format*

### JS

JQUERY library v3.4.0 is made avialable but is not compulsory. 
Other local or CDN resources can be used.

The JS library in use ccl-functions.js contains the scripts to:
* for forms select
* SVG and DOM node transformation
* expand and collapse bahavior 

### ccl-elements

Contains example pages et documentation of HTML elements (see menu entry "elements")
Those are the pages that constructs the toolkit site.

* Documentation
* Example of HTML render
* Example of HTML code
* General documentation on how to use each element in the toolkit

### ccl-layout 

Has the same functionality as the element folder but is geared for more complex elements of the Copernicus website 
* header
* footer
* Carousel
* menu
* modal box 
* etc ...

### ccl-styles

Has the same functionality as the element folder but is geared toward elements linked to the themes/services.
* logos
* typography
* service buttons
* colors
* service icons

### SASS 

Contains partial SCSS used to generate the CSS.

## Toolkit website

files to display the toolkit website

### config.yml

Jekyll configuration file

### index.html

Toolkit homepage

### includes

Required elements needed for the CCL toolkit website 
* Header
* Footer
* Navigation
* etc...

### layouts

toolkit website general layout 

### assets 

tolkit website assets
* JS 
* CSS
* libraries
* logos
* images


