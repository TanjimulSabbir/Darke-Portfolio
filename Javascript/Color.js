const handleChangeColor = (color) => {
  const ClassElement = document.querySelectorAll(".ChangeColor");

  ClassElement.forEach((element) => {
    element.style.color = color;
  });

 
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
    .group:hover .IconHover{
      color: ${color};
    }
    .Rounded:hover .IconHover{
      color: ${color};
      transition-duration: .3s;
    }
  `;

  document.head.appendChild(styleElement);


}