# onexit

Javascript drop-in, that opens a pop-up, when the user moves the cursor out of the document up into the menu bar of the 
browser. The pop-up will be shown once per page visit.
 
Your html needs a hidden pop-up box with an id of 'goodbye'. Here you can place your content.
onexit also supports a background, that e.g. darkens the page behind the pop-up. Call that box 'shadow-box'.

In your CSS define a class called 'hide', where 'display' is set to 'none'.

Right now onexit depends on JQuery (\>= 2.x.x). I'll remove the dependency asap.

Licence: MIT
