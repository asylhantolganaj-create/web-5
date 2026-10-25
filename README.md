# Assignment 5 - JavaScript Basics (DOM Manipulation & Events)

**Name:** Asylkhan Tolganai  
**Group:** SE-2538  
---

## Task 1 - Personal Info Object
Created a `const` object named `userProfile` that stores different data types: `name` (string), `birthYear` (number), `isDeveloper` (boolean), and `hobbies` (array).

const userProfile = {
  name: "Tolganai",
  
  birthYear: 2008,
  
  isDeveloper: true,
  
  hobbies: ["volleyball", "watch movie", "drawing", "sleep"]
};
<img width="1241" height="617" alt="image" src="https://github.com/user-attachments/assets/7aff03ac-fe97-4b48-99db-35517fd0f351" />


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
Created a <ul> list. The "Add Item" button creates a new <li> using document.createElement and appends it. The "Remove Item" button deletes the last item using lastElementChild and removeChild.
<img width="897" height="235" alt="image" src="https://github.com/user-attachments/assets/e93d0757-59ea-43ff-9347-fa0569a97688" />
<img width="1275" height="237" alt="image" src="https://github.com/user-attachments/assets/a95530e8-be59-4f61-82bc-5513060369be" />



---

Input Validation (Edge Cases)
I added validation checks to prevent errors and empty inputs:

If the profile form is submitted with empty fields, it shows an alert.
If "Add Item" is clicked with an empty input, it shows an alert ("Type something first").
If "Remove Item" is clicked when the list is empty, it shows an alert ("Nothing to remove").

<img width="1247" height="605" alt="image" src="https://github.com/user-attachments/assets/0ece84fd-eb55-4e71-aa3e-9d3fe4927d13" />
<img width="1346" height="827" alt="image" src="https://github.com/user-attachments/assets/50dd0ef1-1afd-43f4-a8b5-17633eed648a" />
<img width="1390" height="757" alt="image" src="https://github.com/user-attachments/assets/9aab18e4-a934-4354-8c0d-248fc428bcf8" />
