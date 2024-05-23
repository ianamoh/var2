function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6hCUiPcEykC":
        Script1();
        break;
      case "5yTHEO1kQHR":
        Script2();
        break;
  }
}

function Script1()
{
  // Function to generate a random string
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@+*-/';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// Check if the variable already exists in local storage
if (localStorage.getItem("myVariableKey") === null) {
    // Generate a random string of desired length
    var myVariable = generateRandomString(20); // Change 20 to your desired length

    // Store the variable in local storage
    localStorage.setItem("myVariableKey", myVariable);

    // Optional: Display an alert to confirm the action
    alert("Variable saved to local storage for the first time: " + myVariable);
} else {
    // Optional: Display an alert to inform the variable already exists
    alert("Variable already exists in local storage.");
}
}

function Script2()
{
  // Retrieve the variable from local storage
var myVariable = localStorage.getItem("myVariableKey");

// Optional: Display an alert to show the retrieved value
if (myVariable !== null) {
    alert("Retrieved variable: " + myVariable);
} else {
    alert("No variable found in local storage.");
}
}

