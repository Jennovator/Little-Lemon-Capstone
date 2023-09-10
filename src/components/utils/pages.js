// Initialize a new map object called pages to store information about different pages for the project
const pages = new Map();

// The following holds a unique key identifier for each page and includes 
// 3 properties: name, path of page, and if the page can have anchors or not

pages.set('home', { name: 'Home', path: '/', anchorable: true });
pages.set('about', { name: 'About', path: '/about', anchorable: true });
pages.set('menu', { name: 'Menu', path: '/menu', anchorable: true });
pages.set('reservation', { 
  name: 'Reservation', 
  path: '/reservation', 
  anchorable: true 
});
pages.set('confirmedReservation', { 
  name: 'Confirmed Reservation', 
  path: '/confirmed-reservation', 
  anchorable: false 
});
pages.set('orderOnline', { 
  name: 'Order Online', 
  path: '/order-online', 
  anchorable: true 
});
pages.set('login', { name: 'Login', path: '/login', anchorable: true });

export default pages;