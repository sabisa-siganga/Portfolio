// Contact Form
function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var subject = document.forms["myForm"]["subject"].value;
  var comments = document.forms["myForm"]["comments"].value;
  document.getElementById("error-msg").style.opacity = 0;
  document.getElementById("error-msg").innerHTML = "";

  if (name == "" || name == null) {
    document.getElementById("error-msg").innerHTML =
      "<div class='alert alert-warning error_message'>*Please enter a Name*</div>";
    fadeIn();
    return false;
  }

  if (email == "" || email == null) {
    document.getElementById("error-msg").innerHTML =
      "<div class='alert alert-warning error_message'>*Please enter a Email*</div>";
    fadeIn();
    return false;
  }

  if (subject == "" || subject == null) {
    document.getElementById("error-msg").innerHTML =
      "<div class='alert alert-warning error_message'>*Please enter a Subject*</div>";
    fadeIn();
    return false;
  }

  if (comments == "" || comments == null) {
    document.getElementById("error-msg").innerHTML =
      "<div class='alert alert-warning error_message'>*Please enter a Comments*</div>";
    fadeIn();
    return false;
  }

  const response = (data) => {
    console.log("SUCCESS!");
    document.forms["myForm"]["name"].value = "";
    document.forms["myForm"]["email"].value = "";
    document.forms["myForm"]["subject"].value = "";
    document.forms["myForm"]["comments"].value = "";

    alert("Message has been sent, thank you.")
  };

  const error = (data) => {
    console.log("FAILED...", data);
  };

  emailjs
    .send("service_j9wqwmv", "template_4v8g32w", {
      from_name: name,
      message: comments,
      reply_to: email,
      subject,
    })
    .then(response, error);

  return false;
}

function fadeIn() {
  var fade = document.getElementById("error-msg");
  var opacity = 0;
  var intervalID = setInterval(function () {
    if (opacity < 1) {
      opacity = opacity + 0.5;
      fade.style.opacity = opacity;
    } else {
      clearInterval(intervalID);
    }
  }, 200);
}
