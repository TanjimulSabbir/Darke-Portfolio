const handleSubmit = (event) => {
    event.preventDefault();
    const target = event.target;
    const fullName = target.fullname.value;
    const email = target.email.value;
    const subject = target.subject.value;

    const Values = fullName && email && subject;

    if (!Values) {
        document.getElementById("errorText").innerText = "* Marked fields are required to fill."
        alert("Please, Input required data.")
    } else {
        alert(`Dear ${fullName}, Thank you for contacting me. I have got you message!`)
    }
}

// Right Header Menu Function
let OpenMenu = false;
const handleRightHeaderMenu = (e) => {
    OpenMenu = !OpenMenu;
    if (OpenMenu) {
       document.getElementById("RightMenuContainer").style.display="block"
    }
    const RightMenuContainer = document.getElementById("RightMenuContainer");
    const NewDiv = document.createElement("div");
    NewDiv.innerHTML = ``
    console.log(RightMenuContainer)
    RightMenuContainer.appendChild(NewDiv);
}

const handleClose = () => {
    OpenMenu = false;
    if (!OpenMenu) {
        document.getElementById("DrawerClose").click();
        document.getElementById("RightMenuContainer").style.display="none"
    }
}