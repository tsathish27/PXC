import Link from 'next/link'; // Import Link from 'next/link'
import { Button } from './Button'; // Import your Button component
import { FilmIcon, CalendarIcon, PlaneIcon, MoveHorizontalIcon, ListIcon } from './Icons'; // Import your icons

const TicketSections = () => (
  <main>
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Buy Tickets</h2>
        <p className="text-muted-foreground">Buy and Sell Tickets Effortlessly</p>
        <div className="grid grid-cols-2 gap-4">
          <Link
            href="#"
            className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg p-4 flex flex-col items-center gap-2"
            prefetch={false}
          >
            <FilmIcon className="w-8 h-8 text-primary" />
            <span className="text-sm font-medium">Movies</span>
            <p className="text-muted-foreground text-xs">Sell Your Extra Seats, Buy Your Favorite Shows</p>
          </Link>
          <Link
            href="#"
            className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg p-4 flex flex-col items-center gap-2"
            prefetch={false}
          >
            <CalendarIcon className="w-8 h-8 text-primary" />
            <span className="text-sm font-medium">Events</span>
            <p className="text-muted-foreground text-xs">From Unwanted Tickets to Unforgettable Moments</p>
          </Link>
          <Link
            href="#"
            className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg p-4 flex flex-col items-center gap-2"
            prefetch={false}
          >
            <PlaneIcon className="w-8 h-8 text-primary" />
            <span className="text-sm font-medium">Travel</span>
            <p className="text-muted-foreground text-xs">Swap Extra Tickets for New Adventures</p>
          </Link>
          <Link
            href="#"
            className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg p-4 flex flex-col items-center gap-2"
            prefetch={false}
          >
            <MoveHorizontalIcon className="w-8 h-8 text-primary" />
            <span className="text-sm font-medium">More</span>
          </Link>
        </div>
      </div>
      <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Sell Tickets</h2>
        <p className="text-muted-foreground">
          List your tickets for events, movies, and travel. Reach a wider audience and make more sales.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Link
            href="#"
            className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg p-4 flex flex-col items-center gap-2"
            prefetch={false}
          >
            <CalendarIcon className="w-8 h-8 text-primary" />
            <span className="text-sm font-medium">List Event</span>
          </Link>
          <Link
            href="#"
            className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg p-4 flex flex-col items-center gap-2"
            prefetch={false}
          >
            <FilmIcon className="w-8 h-8 text-primary" />
            <span className="text-sm font-medium">List Movie</span>
          </Link>
          <Link
            href="#"
            className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg p-4 flex flex-col items-center gap-2"
            prefetch={false}
          >
            <PlaneIcon className="w-8 h-8 text-primary" />
            <span className="text-sm font-medium">List Travel</span>
          </Link>
          <Link
            href="#"
            className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg p-4 flex flex-col items-center gap-2"
            prefetch={false}
          >
            <ListIcon className="w-8 h-8 text-primary" />
            <span className="text-sm font-medium">Manage Listings</span>
          </Link>
        </div>
      </div>
    </section>
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Featured Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Link href="#" className="bg-background/50 backdrop-blur-sm rounded-lg overflow-hidden" prefetch={false}>
          <img src="/placeholder.svg" width={400} height={300} alt="Event 1" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold">Music Festival</h3>
            <p className="text-muted-foreground">July 15, 2023</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-primary font-medium">$50</span>
              <Button size="sm">Buy Tickets</Button>
            </div>
          </div>
        </Link>
        {/* Repeat for other events */}
      </div>
    </section>
  </main>
);

export default TicketSections;
