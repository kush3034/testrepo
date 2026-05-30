let userType = "subscriber"; // Change this value to test different roles
let message;

switch (userType) {
    case "employee":
        message = "You are authorized to access Dietary Services.";
        break;

    case "enrolled member":
        message = "You are authorized to access Dietary Services and one-on-one interaction with a dietician.";
        break;

    case "subscriber":
        message = "You are authorized to have partial access to Dietary Services.";
        break;

    case "non-subscriber":
        message = "You need to enroll or subscribe first to avail Dietary Services.";
        break;

    default:
        message = "Invalid user type.";
}

document.getElementById("result").textContent = message;
console.log(message);