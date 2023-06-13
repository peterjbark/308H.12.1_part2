var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

let mainEl = document.querySelector("main");
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.className = "flex-ctr"
mainEl.innerHTML = "<h1> DOM Manipulation </h1>" // Can't figure out how to utilize innerText to create Text using <h1> property

let topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%" ;
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.className = "flex-around"

for (links of menuLinks){
    let aElement = document.createElement("a");
    aElement.href = links.href;
    aElement.innerText = links.text;
    topMenuEl.appendChild(aElement);
}