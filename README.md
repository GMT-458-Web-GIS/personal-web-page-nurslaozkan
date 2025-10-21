[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/7C3xAGjq)
**Nur Sıla Özkan - Personal Portfolio Website**

This repo contains the source code for Geomatics Engineer Nur Sıla Özkan's personal portfolio website. This site is designed to showcase my academic background, professional experience, projects, and technical areas of work.

🚀 Live Demo

You can view the live version of the portfolio website here:
**[https://gmt-458-web-gis.github.io/personal-web-page-nurslaozkan/](https://gmt-458-web-gis.github.io/personal-web-page-nurslaozkan/)**


🛠️ **Technologies Used**

* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **Map Library:** [OpenLayers](https://openlayers.org/) (used in `map.html` and `map.js` files)
* **Map Data Providers:** OpenStreetMap (OSM) and ESRI World Imagery
* **Icons:** [Font Awesome](https://fontawesome.com/)
* **Fonts:** [Google Fonts](https://fonts.google.com/) (Poppins & Raleway)
* **Design:** Responsive design for mobile devices built using CSS Variables, Flexbox, and Grid. Simple JavaScript DOM manipulation for the mobile menu.

✨**Artificial Intelligence (AI) Usage Report**

During the development process of this project, as outlined in the guidelines, individual research and experimentation were conducted, and AI support was utilized to address specific, insurmountable technical issues.

Estimated Total Usage Time: Approximately 90+ Minutes.

**Problem**: Navigation Menu Inaccessibility on Mobile Devices
Problem: While the site worked flawlessly in desktop view, there was no mechanism (hamburger menu) to restore the .sidebar menu (right: -100%), which was hidden by CSS on screen widths below 992px (@media (max-width: 992px)).

AI Solution and Learning: The AI ​​proposed a three-step approach to address this issue:

**HTML**: Add a general "hamburger" menu button (<button id="menu-toggle">) to all pages.

**JavaScript**: Create a main.js file that listens for the click event (addEventListener) and dynamically adds and removes the .active class from the .sidebar element when clicked (classList.toggle).

**CSS**: Make the menu visible by adding the .sidebar.active { right: 0; } rule to the CSS.

🔧 **Installation and Operation**

This project is a static website. To run the files on your local machine:

1. Clone the repo:
**[https://gmt-458-web-gis.github.io/personal-web-page-nurslaozkan/](https://gmt-458-web-gis.github.io/personal-web-page-nurslaozkan/)**

2. Open the index.html file directly in your web browser.
(For a better development experience, it's recommended to use a simple local server like the VS Code plugin [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).)

📬 **Contact**

* **Email:** [na.nu.slaozk@gmail.com](mailto:na.nu.slaozk@gmail.com)
* **LinkedIn:** [linkedin.com/in/nursilaozkan](https://www.linkedin.com/in/nursilaozkan)
* **GitHub:** [github.com/nursla](https://github.com/nursla)
