  const mainEl = document.querySelector('main'); // selects the main element
  mainEl.style.backgroundColor = '#4a4e4d';
  mainEl.textContent = 'SEI Rocks!';
  mainEl.classList.add('flex-ctr');
  
  // Get the parent element where links will be added
  const navEl = document.querySelector('#top-menu');
  navEl.style.height = '100%';
  navEl.style.backgroundColor = '#0e9aa7';
  navEl.classList.add('flex-around')

  // Menu data structure
let menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
// Iterate over the menuLinks array
  for (let i = 0; i < menuLinks.length; i++) {
    const menulink = menuLinks[i]; // menulink (singular) holds the individual objects from the 'menuLinks' array during the iteration
// Create an <a>element.
    const aEl = document.createElement('a')
// Set the 'text' property as the content of the 'a' element
    aEl.textContent = menulink.text;
// Set the 'href' attribute as the value of the 'href' property
    aEl.setAttribute('href', menulink.href);

// Append the 'a' element to the parent element
navEl.appendChild(aEl);


  }