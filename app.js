//Init Github
const github = new GitHub();
//Init UI
const ui = new UI();

//Search Input
const searchUser = document.getElementById("searchUser");

//Search Input event listener
searchUser.addEventListener("keyup", (e) => {
  //Get input text
  const userText = searchUser.value;

  if (userText !== "") {
    //Make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        //Show alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        //Show data
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //clear profile
    ui.clearProfile();
  }
});
