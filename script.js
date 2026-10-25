
const userProfile = {
  name: "Tolganai",
  birthYear: 2008,
  isDeveloper: true,
  hobbies: ["Volleyboll", "watch movie", "drawing","swimming"]
};


function showProfile() {
  let thisYear = new Date().getFullYear();
  let age = thisYear - userProfile.birthYear;
  let months = age * 12;
  let hobbyCount = userProfile.hobbies.length;

  document.getElementById("result").innerHTML =
    "<p><b>Name:</b> " + userProfile.name + "</p>" +
    "<p><b>Birth Year:</b> " + userProfile.birthYear + "</p>" +
    "<p><b>Age:</b> " + age + " years</p>" +
    "<p><b>Months old:</b> " + months + "</p>" +
    "<p><b>Is Developer:</b> " + userProfile.isDeveloper + "</p>" +
    "<p><b>Hobbies count:</b> " + hobbyCount + "</p>";

  console.log("Age:", age);
  console.log("Months:", months);
  console.log("Hobbies count:", hobbyCount);
}

showProfile();



document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let newName = document.getElementById("nameInput").value;
  let newYear = document.getElementById("yearInput").value;

  if (newName === "" || newYear === "") {
    alert("Please fill both fields");
    return;
  }

  userProfile.name = newName;
  userProfile.birthYear = Number(newYear);

  showProfile();
  document.getElementById("myForm").reset();
});



let hobbyList = document.getElementById("hobbyList");

document.getElementById("addBtn").addEventListener("click", function() {
  let text = document.getElementById("hobbyInput").value;

  if (text === "") {
    alert("Type something first");
    return;
  }

  let newLi = document.createElement("li");
  newLi.textContent = text;
  hobbyList.appendChild(newLi);

  userProfile.hobbies.push(text);
  document.getElementById("hobbyInput").value = "";
});

document.getElementById("removeBtn").addEventListener("click", function() {
  if (hobbyList.lastElementChild) {
    hobbyList.removeChild(hobbyList.lastElementChild);
    userProfile.hobbies.pop();
  } else {
    alert("Nothing to remove");
  }
});
