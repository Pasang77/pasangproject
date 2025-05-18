const projects = [
    {
        image: "./image/natural.jpg",
        title: "Animated Navbar",
        description: "A responsive navigation bar with smooth animations and toggle functionality.",
    },
    {
        image:"./image/flower.jpg",
        title: "Navbar",
        description:"HTML is the standard markup language used to create and structure content on the web.",
  },
  {
        image:"image/Nature.jpg",
        title: " Landing pages",
        description: "CSS is a stylesheet language used to describe the presentation of a document written in HTML.",
    },  
]
const container = document.getElementById("project-container");

projects.forEach(project =>{
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML=`

    <img src="${project.image}" alt="${project.title}"\>
    <h1>${project.title}</h1>
    <p>${project.description}</p>
    `;
    container.appendChild(card);
});

//const hamburger =document.getElementById ('hamburger');
//const navlinks = document.getDocumentById('navlinks');
//hamburger.addEventListener('click',() => {
   // navlinks.classlist.toggle('active');
//}); 
const text =" Hi,I'm Mrss.PSB ";
const typedText = document.getElementById('typed-text');
let index = 0;

function type(){
    if(index < text.length){
        typedText.textContent +=text.charAt(index);
        index++;
        setTimeout(type,150);
    }
}
type();


