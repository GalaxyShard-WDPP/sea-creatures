let nav = document.createElement("div");
nav.id = "nav";
document.body.appendChild(nav);

let links = [
    {name:"Home", link:"index.html"},
    {name:"Shark", link:"shark.html"},
    {name:"Jellyfish", link:"jellyfish.html"},
    {name:"Squid", link:"squid.html"},
    {name:"Salmon", link:"salmon.html"},
    {name:"Turtle", link:"turtle.html"}
];
for (let i = 0; i < links.length; i++)
{
    let container = document.createElement("span");
    container.className = "nav-container";
    
    let anchor = document.createElement("a");
    anchor.innerHTML = links[i].name;
    anchor.href = links[i].link;
    
    container.appendChild(anchor);
    nav.appendChild(container);
    if (i != links.length-1)
    {
        let divider = document.createElement("span");
        divider.innerHTML = " | ";
        nav.appendChild(divider);
    }
}