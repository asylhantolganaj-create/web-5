# Assignment 5 - JavaScript Basics (DOM Manipulation & Events)

**Name:** Asylkhan Tolganai  
**Group:** SE-2538  
---

## Task 1 - Personal Info Object
Created a `const` object named `userProfile` that stores different data types.
};
<img width="1387" height="747" alt="image" src="https://github.com/user-attachments/assets/1cf851a3-5361-4d9a-99b4-15268beb4b8d" />



---

Task 2 - Arithmetic Calculations
Used arithmetic operators to calculate the user's current age dynamically (current year minus birthYear). Also calculated months old and the total hobbies count. The results are displayed on the page and in the browser console.
js
let thisYear = new Date().getFullYear();
let age = thisYear - userProfile.birthYear;
let months = age * 12;
<img width="1170" height="596" alt="image" src="https://github.com/user-attachments/assets/fdb28f68-6953-4be5-8b82-0c2128ce449c" />
<img width="1242" height="591" alt="image" src="https://github.com/user-attachments/assets/5b05b896-ea17-4947-9ba7-cb8eaa8c1831" />




---

Task 3 - HTML Form Setup
Created a form with inputs for Username and Birth Year, along with a "Create / Update Profile" submit button.
<img width="977" height="271" alt="image" src="https://github.com/user-attachments/assets/eccc6985-38b2-4e27-bd55-a2d8953ea92b" />


---

Task 4 - Event Listener
Added a submit event listener to the form. It captures the input values, updates the userProfile object, and calls showProfile() to refresh the DOM. I used preventDefault() to stop the page from reloading.
<img width="1192" height="587" alt="image" src="https://github.com/user-attachments/assets/1a337b44-1818-4d99-bdcf-bf34e5bfb37e" />

<img width="1197" height="597" alt="image" src="https://github.com/user-attachments/assets/ef3de502-0e1b-4178-b3d3-705cb21ce89f" />



---

Task 5 - Creating & Removing Elements
Created a `<ul>` list. The "Add Item" button creates a new `<li>` and appends it. The "Remove Item" button deletes the last item.
<img width="1285" height="812" alt="image" src="https://github.com/user-attachments/assets/ae8f0d23-d574-43fc-86ff-e96207404a28" />
<img width="1217" height="322" alt="image" src="https://github.com/user-attachments/assets/a8bcc30d-8784-427b-949b-a88f8beedfb4" />




---

Input Validation (Edge Cases)
I added validation checks to prevent errors and empty inputs:

If the profile form is submitted with empty fields, it shows an alert.
If "Add Item" is clicked with an empty input, it shows an alert ("Type something first").
If "Remove Item" is clicked when the list is empty, it shows an alert ("Nothing to remove").

<img width="1247" height="605" alt="image" src="https://github.com/user-attachments/assets/0ece84fd-eb55-4e71-aa3e-9d3fe4927d13" />
<img width="1317" height="797" alt="image" src="https://github.com/user-attachments/assets/0255de05-a3e4-43bc-80e0-66e56915297d" />
<img width="1302" height="767" alt="image" src="https://github.com/user-attachments/assets/adde87cf-4126-4a6b-bc2c-b3e9a984d6c0" />

