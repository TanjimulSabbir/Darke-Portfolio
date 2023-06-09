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
let ContainerOff = false;
document.getElementById("RightMenuContainer").style.display = "none";

const handleRightMenuOpen = (event) => {
    document.getElementById("RightMenuContainer").style.display = "block";
    document.getElementById("MenuOpenDrawer").style.display = "none";
    StopClick = true;
}

document.getElementById("drawerContentId").addEventListener("click", function () {
    ContainerOff = false;
})

const handleRightHeaderMenu = (event) => {
    if (StopClick) {
        if (!ContainerOff) {
            return ContainerOff = true;
        }
    }
    if (ContainerOff) {
        setTimeout(function () {
            document.getElementById("RightMenuContainer").style.display = "none";
       },1000)
        document.getElementById("MenuOpenDrawer").style.display = "block";
        StopClick = false;
        ContainerOff = false;
    }
}

const handleClicked = () => {
    // if (window.innerWidth >= 1249) {
    //     return;
    // }
    document.getElementById("DrawerBtn").click();
}

const RightSideFixedNav = document.getElementById("RightSideFixedNav");
RightSideFixedNav.innerHTML = `<ul class="Hovered menu text-white border border-Primary py-3 rounded-[33px]">
<li class="group hover:bg-transparent">
    
        <a class="tooltip tooltip-left text-xs bg-transparent" href="#home" data-tip="Home">
            <i
                class="las la-home text-[20px] text-Primary IconHover"></i>
        </a>
    
</li>
<li class="group">
        <a class="tooltip tooltip-left text-xs bg-transparent" href="#about" data-tip="About">
            <i class="lar la-user text-[20px] text-Primary IconHover "
                data-tip="about">
            </i>
        </a>
</li>
<li class="group">
        <a class="tooltip tooltip-left text-xs bg-transparent" href="#resume" data-tip="Resume">
            <i
                class="las la-briefcase text-[20px] text-Primary IconHover">
            </i>
        </a>
</li>
<li class="group">
        <a class="tooltip tooltip-left text-xs bg-transparent" href="#services" data-tip="Services">
            <i
                class="las la-stream text-[20px] text-Primary IconHover"></i>
        </a>

</li>
<li class="group" >
        <a class="tooltip tooltip-left text-xs bg-transparent" href="#skills" data-tip="Skills">
            <i
                class="las la-shapes text-[20px] text-Primary IconHover"></i>
        </a>
</li>
<li class="group">
        <a class="tooltip tooltip-left text-xs bg-transparent" href="#portfolios" data-tip="Portfolios">
            <i class="las la-grip-vertical text-[20px]  text-Primary IconHover"></i>
        </a>
</li>
<li class="group">
        <a class="tooltip tooltip-left text-xs bg-transparent" href="#testimonial" data-tip="Testimonial">
            <i class="lar la-comment text-[20px]  text-Primary IconHover"></i>
        </a>
</li>
<li class="group">
        <a class="tooltip tooltip-left text-xs bg-transparent" href="#contact" data-tip="Contact">
            <i class="las la-envelope text-[20px] text-Primary IconHover"></i>
        </a>
</li>
</ul>`

// Setting Drawer Menu

// Setting Button for Drawer Open

let SettingOpenDrawerBtn = document.getElementById("SettingOpenDrawer");
let SettingDrawerContainer = document.getElementById("SettingDrawerContainer");

let SettingOpen = false;
SettingDrawerContainer.style.display = "none"

const handleSettingOpen = () => {
    SettingOpen = false;
    SettingDrawerContainer.style.display = "block"
    SettingOpenDrawerBtn.style.display = "none";
}
document.getElementById("SettingDrawerContent").addEventListener("click", function () {
    SettingOpen = false;
})
const handleSettingDrawer = () => {
    if (SettingOpen) {
        SettingOpenDrawerBtn.style.display = "block";
        setTimeout(function () {
            SettingDrawerContainer.style.display = "none"
        }, 200);
    } else {
        SettingOpen = true;
    }
}
