# North Games - Lvl 1

The idea behind this repo is to give an example for every notion aborded in the first four weeks in your cursus.

It's wriitten in vanilla JS (-> without React) and doesn't have a lot of features yet.

It's not responsive yet, (I still have some work on this!)

## HTML

- Not so much "pure" HTML content for now, mainly the layout.
- One, and **only one** modal for the whole website. If I want to display a new message, the new modal will replace the old one. (That'll be done in JS a bit later)

## CSS

_My CSS is splitted among several files. That's not mandatory, it's just a personnal preference !_

- I use a `reset.css` file, too get rid of browser-sppecific styles (but I must then rewrite everything myself)
- `helpers.css` contains all my custom classes: they're not attached to any specific element but allow me to easily use my favorite behaviours
- `layout.css` contains evrerything related to the general layout. For this project, I used a basic **grid** layout. You can study it in Firefox (`Inspector` tab > `Layout` sub-tab)
- `modal.css` contains every css rule about my modal (yeah, you already know everything needed to add a homemade modal to your website!). That's just one big black-transparent `div` and another smaller one in it, hidden by default
- `style.css` is your typical css file, with colors and whatnot

## JS

- I selected everything I need at the top of my file. Since `querySelector` (and the other searching functions) are quite resource-greedy, and it's better to do it only once
- I added two functions, `hideModal()` and `showModal(msg)`, which will allow to toggle the site's modal
- For every element which has the `soon` class, I added an event listener to display the modal with a basic message. It'll allow me to add my features on the fly, removing the `soon` class when I'm working on it
