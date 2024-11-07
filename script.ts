let resumeform = document.getElementById("resume-form") as HTMLFormElement;

let resumeDisplay= document.getElementById( "resume-display") as HTMLDivElement;


resumeform.addEventListener("submit", (event: Event) => {
  event.preventDefault(); 

  
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLInputElement)
    .value;
  const experience = (document.getElementById("experience") as HTMLInputElement)
    .value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;

  
  const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;


  const profilePictureFile = profilePictureInput.files?.[0];
  const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : " ";
  


  const htmlPage = `
        <h2> <strong>Editable Resume </strong> </h2>
        ${profilePictureURL ? `<img src=${profilePictureURL} alt="profile picture" class="profile1Picture">` : " "}
        <h3>Personal Information</h3>
        <p><strong>Name:</strong><span contenteditable="true">${name}</span></p>
        <p><strong>Email:</strong><span contenteditable="true"> ${email}</span></p>
        <p><strong>Phone:</strong><span contenteditable="true"> ${phone}</span></p>
  
        <h3>Education</h3>
        <p contenteditable="true">${education}</p>
  
        <h3>Experience</h3>
        <p contenteditable="true">${experience}</p>
  
        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>
      `;

  
  if (resumeDisplay) {
    resumeDisplay.innerHTML = htmlPage;
  } else {
    console.error("here is some resume element is missing please check.");
  }
});
