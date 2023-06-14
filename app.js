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
    aElement.innerText = links.text;
    topMenuEl.appendChild(aElement);
}

const subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.className = "flex-around"
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

const showingSubMenu = false;
const topMenuLinks = document.querySelectorAll("top-menu a");

topMenuEl.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(event.target)
if(event.target.tagName !== "A"){
  console.log("not 'a' link");
    return;
}
});


// const test = document.querySelectorAll()
// test.addEventListener("click",function(e){
//   console.log(e)
// })