function validateForm() {
  // Country empty
  if (document.mainform.country.value == "0") {
    document.getElementById("errorcountry").style.display = "block";
    document.mainform.country.focus();
    return false;
  } else {
    document.getElementById("errorcountry").style.display = "none";
  }
  // Email empty
  if (document.mainform.email.value == "") {
    document.getElementById("emailbox").style.paddingBottom = "0px";
    document.getElementById("inemail").style.outline = "solid 1px red";
    document.getElementById("erroremail").style.display = "block";
    document.mainform.email.focus();
    return false;
  } else {
    document.getElementById("erroremail").style.display = "none";
    document.getElementById("emailbox").style.paddingBottom = "24px";
    document.getElementById("inemail").style.outline = "none";
  }
  // Email format
  var mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.+(?:\.[a-zA-Z0-9-]+)*$/;
  if (document.mainform.email.value.match(mailformat)) {
    document.getElementById("errorformat").style.display = "none";
    document.getElementById("emailbox").style.paddingBottom = "24px";
    document.getElementById("inemail").style.outline = "none";
  } else {
    document.getElementById("emailbox").style.paddingBottom = "0px";
    document.getElementById("inemail").style.outline = "solid 1px red";
    document.getElementById("errorformat").style.display = "block";
    document.mainform.email.focus();
    return false;
  }
  // Password empty
  if (document.mainform.password.value == "") {
    document.getElementById("passbox").style.paddingBottom = "0px";
    document.getElementById("errorpassword").style.display = "block";
    document.getElementById("inpass").style.outline = "solid 1px red";
    document.mainform.password.focus();
    return false;
  } else {
    document.getElementById("errorpassword").style.display = "none";
    document.getElementById("passbox").style.paddingBottom = "24px";
    document.getElementById("inpass").style.outline = "none";
  }
  //   Confirm password empty
  if (document.mainform.confirmpass.value == "") {
    document.getElementById("confpassbox").style.paddingBottom = "0px";
    document.getElementById("errorconfirm").style.display = "block";
    document.getElementById("inconf").style.outline = "solid 1px red";
    document.mainform.confirmpass.focus();
    return false;
  } else {
    document.getElementById("errorconfirm").style.display = "none";
    document.getElementById("confpassbox").style.paddingBottom = "24px";
    document.getElementById("inconf").style.outline = "none";
  }
  // Confirm pass not same
  if (document.mainform.password.value != document.mainform.confirmpass.value) {
    document.getElementById("confpassbox").style.paddingBottom = "0px";
    document.getElementById("errornotmatch").style.display = "block";
    document.getElementById("inconf").style.outline = "solid 1px red";
    document.mainform.confirmpass.focus();
    return false;
  } else {
    document.getElementById("errornotmatch").style.display = "none";
    document.getElementById("confpassbox").style.paddingBottom = "24px";
    document.getElementById("inconf").style.outline = "none";
  }
  //   Checkbox not checked
  if (document.mainform.checkbox.checked == "") {
    document.getElementById("errortc").style.display = "block";
    document.mainform.checkbox.focus();
    return false;
  } else {
    document.getElementById("errortc").style.display = "none";
  }
  return true;
}
