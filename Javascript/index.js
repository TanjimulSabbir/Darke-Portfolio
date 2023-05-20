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
let StopClick = false;
let closeDrawer = false;
document.getElementById("RightMenuContainer").style.display = "none";

const handleOpen = (event) => {
    StopClick = false;
    closeDrawer = true;
    document.getElementById("RightMenuContainer").style.display = "block";
    document.getElementById("openDrawer").style.display = "none";

}

const handleRightHeaderMenu = () => {
    if (StopClick) {
        setTimeout(function () {
            document.getElementById("RightMenuContainer").style.display = "none";
            document.getElementById("openDrawer").style.display = "block";
        }, 100);
    } else {
        StopClick = true;
    }
}
const handleClicked = (event) => {
    document.getElementById("openDrawer").click();
}

// const handleOpen = () =>{
//     OpenMenu = !OpenMenu;
//     window.onload = function () {
//         if (OpenMenu) {
//             document.getElementById("openDrawer").click();
//           return  document.getElementById("RightMenuContainer").style.display = "block";
//         } 

//     };
//     alert(OpenMenu + "handleOpenBtn")
// }

// const handleRightHeaderMenu = () => {
//     if (OpenMenu) {
//         OpenMenu = false;
//          document.getElementById("RightMenuContainer").style.display = "none";
//     } 

//     alert(OpenMenu)
// }



console.log(document.getElementById("RightMenuContainer"))

//     OpenMenu = !OpenMenu;
//     if (!OpenMenu) {
//         window.onload=function(){
//             document.getElementById("openDrawer").click();
//           };
//         return document.getElementById("RightMenuContainer").style.display="none";
//     } else {
//         document.getElementById("RightMenuContainer").style.display="block"
//     document.getElementById("RightMenuContainer").innerHTML=`<div class="drawer drawer-end border border-red-600">
//     <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
//     <div class="drawer-content ">
//     </div>
//     <div class="drawer-side">
//       <label for="my-drawer-4" id="DrawerClose" class="drawer-overlay"></label>
//       <ul class="menu p-4 w-full max-w-[345px] bg-black z-50 text-base-content">
//         <li><a>Sidebar Item 1</a></li>
//         <li><a>Sidebar Item 2</a></li>
//       </ul>
//     </div>
//   </div>`
// }
// style.display = "block"
// const container=document.getElementById("RightMenuContainer");
//     window.onload = function () {
//                 document.getElementById("openDrawer").click();
//     };
//     console.log(container)
// }

// const handleClose = (event) => {
//     window.onload = function () {
//         document.getElementById("RightMenuContainer").style.display = "block";
//         document.getElementById("DrawerClose").click();
//     };
//     document.getElementById("RightMenuContainer").style.display = "none";
// }