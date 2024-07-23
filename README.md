Write Tailwind.css classes that are most commonly used and explain what each does with examples 

Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build designs quickly. Here are some commonly used Tailwind CSS classes along with explanations and examples:

1. Margins and Paddings
Margin (m-): Adds margin to an element.
m-4 adds margin of 1rem.
Padding (p-): Adds padding to an element.
p-6 adds padding of 1.5rem.
Example:

html

<div class="m-4 p-6">Margin and Padding Example</div>
2. Width and Height
Width (w-): Sets the width of an element.
w-full sets width to 100%.
Height (h-): Sets the height of an element.
h-64 sets height to 16rem.
Example:

html

<div class="w-full h-64 bg-gray-200">Width and Height Example</div>
3. Background and Text Colors
Background Color (bg-): Sets the background color of an element.
bg-blue-500 sets background to a shade of blue.
Text Color (text-): Sets the text color of an element.
text-white sets text color to white.
Example:

html

<div class="bg-blue-500 text-white">Background and Text Color Example</div>
4. Flexbox Utilities
Flex Container (flex): Turns an element into a flex container.
flex applies flexbox layout.
Justify Content (justify-): Aligns items horizontally in a flex container.
justify-center centers items horizontally.
Example:

html
<div class="flex justify-center">Flexbox Example</div>
5. Typography
Text Size (text-): Sets the font size of text.
text-lg sets font size to 1.125rem.
Font Weight (font-): Sets the font weight of text.
font-semibold sets font weight to 600.
Example:

html

<div class="text-lg font-semibold">Typography Example</div>
6. Borders
Border Width (border-): Sets the width of a border.
border-2 sets border width to 2px.
Border Radius (rounded-): Rounds the corners of an element.
rounded-lg rounds corners to 0.375rem.
Example:

html
<div class="border-2 rounded-lg">Border Example</div>
7. Shadows and Opacity
Box Shadow (shadow-): Adds a shadow to an element.
shadow-md adds a medium shadow.
Opacity (opacity-): Sets the opacity of an element.
opacity-75 sets opacity to 0.75.
Example:

html
Copy code
<div class="shadow-md opacity-75">Shadow and Opacity Example</div>
These are just a few examples of the many utility classes Tailwind CSS offers. By combining these classes, you can rapidly create complex layouts and designs without writing custom CSS.