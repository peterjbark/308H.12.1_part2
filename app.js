var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.className = "flex-ctr"
mainEl.innerHTML = "<h1> DOM Manipulation </h1>" // Can't figure out how to utilize innerText to create Text using <h1> property

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%" ;
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.className = "flex-around"

for (links of menuLinks){
    let aElement = document.createElement("a");
    aElement.href = links.href;
    aElement.textContent = links.text;
    topMenuEl.appendChild(aElement);
}

const subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.className = "flex-around"
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

const showingSubMenu = false;
const topMenuLinks = document.querySelectorAll("a");

topMenuEl.addEventListener("click", function (event) {
  event.preventDefault();
   
  console.log(event.target.innerHTML) // Progress Check
if(event.target.tagName !== "A"){
    return;
}
if(event.target.innerHTML === "about"){
  mainEl.innerHTML = '<h1>' + "About" + "</h1>"

}
if(event.target.classList.contains("active")){ // How to identify active class
  event.target.classList.remove("active");
  showingSubMenu = false;
  subMenuEl.style.top = "0";
  return;
}

topMenuLinks.forEach(function(a){  // Removing active class from each "a" element in topMenu
  a.classList.remove("active");
});

event.target.classList.add("active"); // Upon click adding active class

const objLink = menuLinks.find(function(a) { // Upon click, objLink value is event target textContent
  return a.text === event.target.textContent;
});

const objSubLink = objLink.subLinks;
console.log(objSubLink) // Showing objLink reveals subLinks upon click 

if(objSubLink){
 buildSubMenu(objSubLink)
 subMenuEl.style.top = "100%"
  changeHeader(event);
}else {
  showingSubMenu = false;
  subMenuEl.style.top = "0%"
}
});


function buildSubMenu(links){
  subMenuEl.innerHTML = "";
  links.forEach(function(link){
    const arraySub = document.createElement("a");
    arraySub.textContent = link.text;
    subMenuEl.append(arraySub)
    
  }) 
}

subMenuEl.addEventListener("click", function(event){
  changeHeader(event)
  event.preventDefault();
  console.log(event.target)
  showingSubMenu = false;
  subMenuEl.style.top = "0%"
  topMenuLinks.forEach(function(link) {
  link.classList.remove('active');
});
if(event.target.tagName !== "A"){
  return;
    }else{
  }
})

function changeHeader(event){
  mainEl.innerHTML = '<h1>' + event.target.innerHTML + "</h1>"
}