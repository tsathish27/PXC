 


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Button from './components/Button';
// import Avatar from './components/Avatar';
// import { BellIcon, CalendarIcon, FilmIcon, PlaneIcon, SearchIcon, TicketIcon, TwitterIcon, InstagramIcon, FacebookIcon } from './components/Icons';
// import './App.css';
// import ComingSoon from './components/ComingSoon';


// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#6a5af9] to-[#d66efd]">
//         <header className="bg-background/50 backdrop-blur-sm sticky top-0 z-10 px-4 py-3 sm:px-6 md:px-8">
//           <div className="container mx-auto flex items-center justify-between">
//             <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
//               <TicketIcon className="w-6 h-6 text-primary" />
//               <span>PassXchange</span>
//             </Link>
//             <nav className="hidden md:flex items-center gap-4">
//               <Link to="/buy" className="text-primary-foreground hover:text-primary transition-colors">Buy</Link>
//               <Link to="/sell" className="text-primary-foreground hover:text-primary transition-colors">Sell</Link>
//               <Link to="/manage" className="text-primary-foreground hover:text-primary transition-colors">Manage</Link>
//             </nav>
//             <div className="flex items-center gap-2">
//               <Button variant="ghost" size="icon" className="rounded-full"><SearchIcon className="w-5 h-5" /></Button>
//               <Button variant="ghost" size="icon" className="rounded-full"><BellIcon className="w-5 h-5 " /></Button>
//               <Link to="/profile" className="rounded-full">
//                 <Avatar src="/images/profile.png" fallback="JD" />
//               </Link>
//             </div>
//           </div>
//         </header>
//         <main className="container mx-auto flex-1 px-4 py-6 sm:px-6 md:px-8">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/ComingSoon" element={<BuyPage />} />
//             <Route path="/ComingSoon" element={<SellPage />} />
//             <Route path="/ComingSoon" element={<ManagePage />} />
//           </Routes>
//         </main>
//         <footer className="bg-background/50 backdrop-blur-sm py-6 px-4 sm:px-6 md:px-8">
//           <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
//             <p className="text-primary-foreground text-sm">&copy; 2024 PassXchange. All rights reserved.</p>
//             <div className="flex items-center gap-4">
//               <a href="https://twitter.com" className="text-primary-foreground hover:text-primary transition-colors">
//                 <TwitterIcon className="w-5 h-5" />
//               </a>
//               <a href="https://instagram.com" className="text-primary-foreground hover:text-primary transition-colors">
//                 <InstagramIcon className="w-5 h-5" />
//               </a>
//               <a href="https://facebook.com" className="text-primary-foreground hover:text-primary transition-colors">
//                 <FacebookIcon className="w-5 h-5" />
//               </a>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </Router>
//   );
// }

// const HomePage = () => (
//   <div className="text-center">
//     <h1 className="text-4xl font-bold text-white">Welcome to PassXchange</h1>
//     <p className="mt-4 text-lg text-primary-foreground">Your go-to platform for buying and selling tickets.</p>
//     <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
//       <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 flex flex-col gap-4">
//         <h2 className="text-2xl font-bold">Buy Tickets</h2>
//         <p className="text-muted-foreground">Buy and Sell Tickets Effortlessly</p>
//         <div className="grid grid-cols-2 gap-4">
//           <Link
//             to="/buy/movies"
//             className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg p-4 flex flex-col items-center gap-2"
//           >
//             <FilmIcon className="w-8 h-8 text-primary" />
//             <span className="text-sm font-medium">Movies</span>
//             <p className="text-muted-foreground text-xs">Sell Your Extra Seats, Buy Your Favorite Shows</p>
//           </Link>
//           <Link
//             to="/buy/events"
//             className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg p-4 flex flex-col items-center gap-2"
//           >
//             <CalendarIcon className="w-8 h-8 text-primary" />
//             <span className="text-sm font-medium">Events</span>
//             <p className="text-muted-foreground text-xs">From Unwanted Tickets to Unforgettable Moments</p>
//           </Link>
//           <Link
//             to="/buy/travel"
//             className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg p-4 flex flex-col items-center gap-2"
//           >
//             <PlaneIcon className="w-8 h-8 text-primary" />
//             <span className="text-sm font-medium">Travel</span>
//             <p className="text-muted-foreground text-xs">Swap Extra Tickets for New Adventures</p>
//           </Link>
//           <Link
//             to="/buy/more"
//             className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg p-4 flex flex-col items-center gap-2"
//           >
//             <TicketIcon className="w-8 h-8 text-primary" />
//             <span className="text-sm font-medium">More</span>
//           </Link>
//         </div>
//       </div>
//       <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 flex flex-col gap-4">
//         <h2 className="text-2xl font-bold">Sell Tickets</h2>
//         <p className="text-muted-foreground">
//           List your tickets for events, movies, and travel. Reach a wider audience and make more sales.
//         </p>
//         <div className="grid grid-cols-2 gap-4">
//           <Link
//             to="/sell/events"
//             className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg p-4 flex flex-col items-center gap-2"
//           >
//             <CalendarIcon className="w-8 h-8 text-primary" />
//             <span className="text-sm font-medium">List Event</span>
//           </Link>
//           <Link
//             to="/sell/movies"
//             className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg p-4 flex flex-col items-center gap-2"
//           >
//             <FilmIcon className="w-8 h-8 text-primary" />
//             <span className="text-sm font-medium">List Movie</span>
//           </Link>
//           <Link
//             to="/sell/travel"
//             className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg p-4 flex flex-col items-center gap-2"
//           >
//             <PlaneIcon className="w-8 h-8 text-primary" />
//             <span className="text-sm font-medium">List Travel</span>
//           </Link>
//           <Link
//             to="/sell/manage"
//             className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg p-4 flex flex-col items-center gap-2"
//           >
//             <TicketIcon className="w-8 h-8 text-primary" />
//             <span className="text-sm font-medium">Manage Listings</span>
//           </Link>
//         </div>
//       </div>
//     </section>
    

//     <section className="mt-8">
//   <h2 className="text-2xl font-bold mb-4">Featured Events</h2>
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//     <Link to="/events/1" className="bg-background/50 backdrop-blur-sm rounded-lg overflow-hidden">
//       <img src="/images/event1.jpg" alt="Music Festival" className="w-full h-48 object-cover" />
//       <div className="p-4">
//         <h3 className="text-lg font-bold">Music Festival</h3>
//         <p className="text-muted-foreground">July 15, 2023</p>
//         <div className="flex items-center justify-between mt-2">
//           <span className="text-primary font-medium">$50</span>
//           <Button size="sm">Buy Tickets</Button>
//         </div>
//       </div>
//     </Link>
//     <Link to="/events/2" className="bg-background/50 backdrop-blur-sm rounded-lg overflow-hidden">
//       <img src="/images/event2.jpg" alt="Comedy Show" className="w-full h-48 object-cover" />
//       <div className="p-4">
//         <h3 className="text-lg font-bold">Comedy Show</h3>
//         <p className="text-muted-foreground">August 20, 2023</p>
//         <div className="flex items-center justify-between mt-2">
//           <span className="text-primary font-medium">$30</span>
//           <Button size="sm">Buy Tickets</Button>
//         </div>
//       </div>
//     </Link>
//     <Link to="/events/3" className="bg-background/50 backdrop-blur-sm rounded-lg overflow-hidden">
//       <img src="/images/art.jpg" alt="Art Exhibition" className="w-full h-48 object-cover" />
//       <div className="p-4">
//         <h3 className="text-lg font-bold">Art Exhibition</h3>
//         <p className="text-muted-foreground">September 5, 2023</p>
//         <div className="flex items-center justify-between mt-2">
//           <span className="text-primary font-medium">$20</span>
//           <Button size="sm">Buy Tickets</Button>
//         </div>
//       </div>
//     </Link>
//     <Link to="/events/4" className="bg-background/50 backdrop-blur-sm rounded-lg overflow-hidden">
//       <img src="/images/food.webp" alt="Food Festival" className="w-full h-48 object-cover" />
//       <div className="p-4">
//         <h3 className="text-lg font-bold">Food Festival</h3>
//         <p className="text-muted-foreground">October 12, 2023</p>
//         <div className="flex items-center justify-between mt-2">
//           <span className="text-primary font-medium">$15</span>
//           <Button size="sm">Buy Tickets</Button>
//         </div>
//       </div>
//     </Link>
//   </div>
// </section>


//   </div>
// );

// const BuyPage = () => (
//   <div className="text-center">
//     <h1 className="text-4xl font-bold text-white">Buy Tickets</h1>
//     <p className="mt-4 text-lg text-primary-foreground">Browse and purchase tickets for your favorite events.</p>
//     {/* Add content specific to the Buy Page here */}
//   </div>
// );

// const SellPage = () => (
//   <div className="text-center">
//     <h1 className="text-4xl font-bold text-white">Sell Tickets</h1>
//     <p className="mt-4 text-lg text-primary-foreground">List your tickets for sale and reach a wider audience.</p>
//     {/* Add content specific to the Sell Page here */}
//   </div>
// );

// const ManagePage = () => (
//   <div className="text-center">
//     <h1 className="text-4xl font-bold text-white">Manage Tickets</h1>
//     <p className="mt-4 text-lg text-primary-foreground">View and manage your ticket listings.</p>
//     {/* Add content specific to the Manage Page here */}
//   </div>
// );

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Button from './components/Button';
import Avatar from './components/Avatar';
import { BellIcon, CalendarIcon, FilmIcon, PlaneIcon, SearchIcon, TicketIcon, TwitterIcon, InstagramIcon, FacebookIcon } from './components/Icons';
import ComingSoon from './components/ComingSoon';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#6a5af9] to-[#d66efd]">
        <header className="bg-background/50 backdrop-blur-sm sticky top-0 z-10 px-4 py-3 sm:px-6 md:px-8">
          <div className="container mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
              <TicketIcon className="w-6 h-6 text-primary" />
              <span>PassXchange</span>
            </Link>
            <nav className="hidden md:flex items-center gap-4">
              <Link to="/ComingSoon" className="text-primary-foreground hover:text-primary transition-colors">Buy</Link>
              <Link to="/ComingSoon" className="text-primary-foreground hover:text-primary transition-colors">Sell</Link>
              <Link to="/ComingSoon" className="text-primary-foreground hover:text-primary transition-colors">Manage</Link>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full"><SearchIcon className="w-5 h-5" /></Button>
              <Button variant="ghost" size="icon" className="rounded-full"><BellIcon className="w-5 h-5 " /></Button>
              <Link to="/profile" className="rounded-full">
                <Avatar src="/images/profile.png" fallback="JD" />
              </Link>
            </div>
          </div>
        </header>
        <main className="container mx-auto flex-1 px-4 py-6 sm:px-6 md:px-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/comingsoon" element={<ComingSoon />} />
          </Routes>
        </main>
        <footer className="bg-background/50 backdrop-blur-sm py-6 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground text-sm">&copy; 2024 PassXchange. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com" className="text-primary-foreground hover:text-primary transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" className="text-primary-foreground hover:text-primary transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" className="text-primary-foreground hover:text-primary transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

const HomePage = () => (
  <div className="text-center">
    <h1 className="text-4xl font-bold text-white">Welcome to PassXchange</h1>
    <p className="mt-4 text-lg text-primary-foreground">Your go-to platform for buying and selling tickets.</p>
    <p className="mt-4 text-lg text-primary-foreground">Your Marketplace for Unused Tickets.</p>
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Buy Tickets</h2>
        <p className="text-muted-foreground">Buy and Sell Tickets Effortlessly</p>
        <div className="grid grid-cols-2 gap-4">
          <Link
            to="/comingsoon"
            className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg p-4 flex flex-col items-center gap-2"
          >
            <FilmIcon className="w-8 h-8 text-primary" />
            <span className="text-sm font-medium">Movies</span>
            <p className="text-muted-foreground text-xs">Sell Your Extra Seats, Buy Your Favorite Shows</p>
          </Link>
          <Link
            to="/comingsoon"
            className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg p-4 flex flex-col items-center gap-2"
          >
            <CalendarIcon className="w-8 h-8 text-primary" />
            <span className="text-sm font-medium">Events</span>
            <p className="text-muted-foreground text-xs">From Unwanted Tickets to Unforgettable Moments</p>
          </Link>
          <Link
            to="/comingsoon"
            className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg p-4 flex flex-col items-center gap-2"
          >
            <PlaneIcon className="w-8 h-8 text-primary" />
            <span className="text-sm font-medium">Travel</span>
            <p className="text-muted-foreground text-xs">Swap Extra Tickets for New Adventures</p>
          </Link>
          <Link
            to="/comingsoon"
            className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg p-4 flex flex-col items-center gap-2"
          >
            <TicketIcon className="w-8 h-8 text-primary" />
            <span className="text-sm font-medium">More</span>
          </Link>
        </div>
      </div>
      <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Sell Tickets</h2>
        <p className="text-muted-foreground">
          List your tickets for sale and reach a wider audience.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Link
            to="/comingsoon"
            className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg p-4 flex flex-col items-center gap-2"
          >
            <CalendarIcon className="w-8 h-8 text-primary" />
            <span className="text-sm font-medium">List Event</span>
          </Link>
          <Link
            to="/comingsoon"
            className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg p-4 flex flex-col items-center gap-2"
          >
            <FilmIcon className="w-8 h-8 text-primary" />
            <span className="text-sm font-medium">List Movie</span>
          </Link>
          <Link
            to="/comingsoon"
            className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg p-4 flex flex-col items-center gap-2"
          >
            <PlaneIcon className="w-8 h-8 text-primary" />
            <span className="text-sm font-medium">List Travel</span>
          </Link>
          <Link
            to="/comingsoon"
            className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg p-4 flex flex-col items-center gap-2"
          >
            <TicketIcon className="w-8 h-8 text-primary" />
            <span className="text-sm font-medium">Manage Listings</span>
          </Link>
        </div>
      </div>
    </section>
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Featured Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Link to="/comingsoon" className="bg-background/50 backdrop-blur-sm rounded-lg overflow-hidden">
          <img src="/images/event1.jpg" alt="Music Festival" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold">Music Festival</h3>
            <p className="text-muted-foreground">August 15, 2024</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-primary font-medium">$50</span>
              <Button size="sm">Buy Tickets</Button>
            </div>
          </div>
        </Link>
        <Link to="/comingsoon" className="bg-background/50 backdrop-blur-sm rounded-lg overflow-hidden">
          <img src="/images/event2.jpg" alt="Comedy Show" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold">Comedy Show</h3>
            <p className="text-muted-foreground">August 20, 2024</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-primary font-medium">$30</span>
              <Button size="sm">Buy Tickets</Button>
            </div>
          </div>
        </Link>
        <Link to="/comingsoon" className="bg-background/50 backdrop-blur-sm rounded-lg overflow-hidden">
          <img src="/images/art.jpg" alt="Art Exhibition" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold">Art Exhibition</h3>
            <p className="text-muted-foreground">September 5, 2024</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-primary font-medium">$20</span>
              <Button size="sm">Buy Tickets</Button>
            </div>
          </div>
        </Link>
        <Link to="/comingsoon" className="bg-background/50 backdrop-blur-sm rounded-lg overflow-hidden">
          <img src="/images/food.webp" alt="Food Festival" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold">Food Festival</h3>
            <p className="text-muted-foreground">October 12, 2024</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-primary font-medium">$15</span>
              <Button size="sm">Buy Tickets</Button>
            </div>
          </div>
        </Link>
      </div>
    </section>
  </div>
);

// const ComingSoon = () => (
//   <div className="text-center">
//     <h1 className="text-4xl font-bold text-white">Coming Soon</h1>
//     <p className="mt-4 text-lg text-primary-foreground">This page is under construction. Stay tuned for updates!</p>
//   </div>
// );

export default App;
