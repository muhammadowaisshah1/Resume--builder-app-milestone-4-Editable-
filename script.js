var resumeform = document.getElementById("resume-form");
var resumeDisplay = document.getElementById("resume-display");
resumeform.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education")
        .value;
    var experience = document.getElementById("experience")
        .value;
    var skills = document.getElementById("skills").value;
    var profilePictureInput = document.getElementById("profilePicture");
    var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : " ";
    var htmlPage = "\n        <h2> <strong>Editable Resume </strong> </h2>\n        ".concat(profilePictureURL ? "<img src=".concat(profilePictureURL, " alt=\"profile picture\" class=\"profile1Picture\">") : " ", "\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong><span contenteditable=\"true\">").concat(name, "</span></p>\n        <p><strong>Email:</strong><span contenteditable=\"true\"> ").concat(email, "</span></p>\n        <p><strong>Phone:</strong><span contenteditable=\"true\"> ").concat(phone, "</span></p>\n  \n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n  \n        <h3>Experience</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n  \n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n      ");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = htmlPage;
    }
    else {
        console.error("here is some resume element is missing please check.");
    }
});
