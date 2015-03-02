# CSS + Developer Tools

In week 1 we saw that you can [edit HTML with developer tools](../week1/#devtools "Link to Week 1 Developer Tools section"). Well, we can do the same thing with CSS, which is what we'll be tackling this week. Recall that we open developer tools in Chrome with '`ctrl-shift-I`' on PC or '`alt-cmd-I`' on Mac.

[![Viewing CSS With Developer Tools](img/devtools1.png)](img/devtools1.png "Viewing CSS With Developer Tools")

On the right-hand side of the Developer Tools window is a CSS editing window. This window allows you to see all of the CSS rules that have been applied to the element which you're inspecting. For instance, in the above case we can see that the rules '`margin: 10px`', '`font-size: 21px`', and '`font-weight: 800`' have been applied to the inspected element via the '`#ctitle`' ID selector. 

Developer Tools allow us to see the CSS but they also allow us to *edit* it. The easiest way to edit the CSS for a particular element is to select that element using developer tools and then add rules in the empty '`element.style {}`' block at the top of the window.

[![Editing CSS With Developer Tools](img/devtools2.png)](img/devtools2.png "Editing CSS With Developer Tools")

Notice in the above image that the previous '`#ctitle`' rules are still there, we have just added new rules that apply to the specific element only. We can use this kind of CSS editing to quickly prototype changes to webpages - whether we are building the webpage ourselves, or inspecting the work of someone we've hired. Go ahead, try to make a couple of changes to the CSS on this page!