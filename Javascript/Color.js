// const color1 = (color) => { 
//     const elements = document.querySelectorAll("span, i, p"); // Select desired elements

//   elements.forEach((element) => {
//     element.style.color = color; 
//   });
// }
// const color2 = (color) => {
    
//  }
// const color3 = (color) => { }
// const color4 = (color) => { }
// const color5 = (color) => { }
// const color6 = (color) => { }
// const color7 = (color) => { }
// const color8 = (color) => { }
// const color9 = (color) => { }

const handleChangeColor = (color) => {
    const ClassElement = document.querySelectorAll(".ChangeColor");

    ClassElement.forEach((element) => {
    element.style.color = color; 
    });

    // const iElements = document.querySelectorAll("i");
    // iElements.forEach((iElement) => {
    //     iElement.addEventListener("mouseover", function() {
    //         this.style.color = color;
    //     });
    //     iElement.addEventListener("mouseout", function() {
    //         this.style.color = "";
    //       });
    // });

    const styleElement = document.createElement("style");
  styleElement.textContent = `
    .Btn {
      background-color: ${color};
      border-color: ${color};
    }
    .Btn:hover {
      color: ${color};
      background-color: "transparent";
    }
    .Rounded:hover{
        border-color: ${color};
    }
    .SkillBox:hover{
        border-color: ${color};
    }
    .ResumeBox:hover .TitleHover{
        color: ${color};
    }
    .ResumeBox:hover .RoundedDot{
        background-color: ${color};
    }
    .ServiceBox:hover{
        border-color: ${color};
      }
      .Pricing{
        border-color: ${color};
      }
        .Rounded:hover .custom-hover {
          color: ${color};
        }
  `;

    document.head.appendChild(styleElement);
  
    
}