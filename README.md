# Assignment 5 - Frontend: Personal Info Object & DOM Manipulation

**Name:** Asylkhan Tolganai  
**Group:** SE-2538  
---

## Task 1 - Personal Info Object
Created a `const` object named `userProfile` that stores different data types: `name` (string), `birthYear` (number), `isDeveloper` (boolean), and `hobbies` (array).

```js
const userProfile = {
  name: "Zhansaya",
  birthYear: 2006,
  isDeveloper: true,
  hobbies: ["Volleyboll", "watch movie", "drawing","sleep"]
};
<img width="1382" height="601" alt="image" src="https://github.com/user-attachments/assets/53e0c35e-83f6-4436-bd0a-e8dc1cb5c08f" />

Task 2 - Arithmetic Calculations
Used arithmetic operators to calculate the user's current age dynamically (current year minus birthYear). Also calculated months old and the total hobbies count. The results are displayed on the page and in the browser console.
js
let thisYear = new Date().getFullYear();
let age = thisYear - userProfile.birthYear;
let months = age * 12;
<img width="1022" height="586" alt="image" src="https://github.com/user-attachments/assets/a0f5d4e3-006b-4ef7-a8aa-da73ed22a8cb" />

Task 3 - HTML Form Setup
Created a form with inputs for Username and Birth Year, along with a "Create / Update Profile" submit button.
<img width="922" height="281" alt="image" src="https://github.com/user-attachments/assets/8f385772-78e1-4cef-9a98-daef12823ef4" />


Task 4 - Event Listener
Added a submit event listener to the form. It captures the input values, updates the userProfile object, and calls showProfile() to refresh the DOM. I used preventDefault() to stop the page from reloading.
<img width="1287" height="631" alt="image" src="https://github.com/user-attachments/assets/d1a0b2dd-ff8b-4d93-8530-5619e6b7fe60" />
<img width="1375" height="602" alt="image" src="https://github.com/user-attachments/assets/5338af74-d417-4a11-a143-947fc61f012e" />

Task 5 - Creating & Removing Elements
Created a <ul> list. The "Add Item" button creates a new <li> using document.createElement and appends it. The "Remove Item" button deletes the last item using lastElementChild and removeChild.
<img width="1281" height="296" alt="image" src="https://github.com/user-attachments/assets/8502b0c2-13b4-4bae-af2e-4a78a3af455e" />
<img width="1256" height="230" alt="image" src="https://github.com/user-attachments/assets/2ef0de5a-f0ce-4c90-b656-d0f584598b08" />

Input Validation (Edge Cases)
I added validation checks to prevent errors and empty inputs:

If the profile form is submitted with empty fields, it shows an alert.

If "Add Item" is clicked with an empty input, it shows an alert ("Type something first").

If "Remove Item" is clicked when the list is empty, it shows an alert ("Nothing to remove").

<img width="1247" height="605" alt="image" src="https://github.com/user-attachments/assets/0ece84fd-eb55-4e71-aa3e-9d3fe4927d13" />
<img width="1346" height="827" alt="image" src="https://github.com/user-attachments/assets/50dd0ef1-1afd-43f4-a8b5-17633eed648a" />
<img width="1390" height="757" alt="image" src="https://github.com/user-attachments/assets/9aab18e4-a934-4354-8c0d-248fc428bcf8" />





