# Fast React Pizza Project

React project from the [Ultimate React Course](https://github.com/jonasschmedtmann/ultimate-react-course) by Jonas Schmedtmann.

## Knowledge applied:

- Styled components:
  - Use `styled` function to create styled components writing css inside tagged template literals
  - Use arrow functions to style a component base on its props
  - Apply global styles with `createGlobalStyle` function
  - Create objects containing CSS to apply optional styles to reusable components with `css` helper function to generate CSS from a template literal
  - Design and structure the base app layout
- React router:
  - Structure app routes with `BrowserRouter`, `Routes` and `Route` components
- Supabase:
  - Create tables for "bookings", "cabins", "guests", "settings" and "users"
  - Setting polices for data access of each table
  - Create a supabase client to fetch data from tables with `@supabase/supabase-js` library
  - Create buckets to store avatars and cabins images
- React Query:
  -

## Planning:

### Requirements and features:

- Users of the app are hotel employees. They **need to be logged into the application** to perform tasks
- New users **can only be signed up inside the applications** (to guarantee that only actual hotel employees can get accounts)
- Users should be able to upload an avatar, and change their name and password
- App needs a table view with all cabins, showing the cabin photo, name, capacity, price, and current discount
- Users should be able to update or delete a cabin, and to create new cabins (including uploading a photo)
- App needs a table view with all bookings, showing arrival and departure dates, status, and paid amount, as well as cabin and guest data
- The booking status can be “unconfirmed” (booked but not yet checked in), “checked in”, or “checked out”. The table should be filterable by this important status
- Other booking data includes: number of guests, number of nights, guest observations, whether they booked breakfast, breakfast price
- Users should be able to delete, check in, or check out a booking as the guest arrives (no editing necessary for now)
- Bookings may not have been paid yet on guest arrival. Therefore, on check in, users need to accept payment (outside the app), and then confirm that payment has been received (inside the app)
- On check in, the guest should have the ability to add breakfast for the entire stay, if they hadn’t already
- Guest data should contain: full name, email, national ID, nationality, and a country flag for easy identification
- The initial app screen should be a dashboard, to display important information for the last 7, 30, or 90 days:
  - A list of guests checking in and out on the current day. Users should be able to perform these tasks from here
  - Statistics on recent bookings, sales, check ins, and occupancy rate
  - A chart showing all daily hotel sales, showing both “total” sales and “extras” sales (only breakfast at the moment)
  - A chart showing statistics on stay durations, as this is an important metric for the hotel
- Users should be able to define a few application-wide settings: breakfast price, min and max nights/booking, max guests/booking
- App needs a dark mode

### Features Categories:

- Booking
- Cabins
- Guests
- Dashboard
- Check in and out
- App settings
- Authentication

### Pages:

- /dashboard
- /bookings
- /cabins
- /checkin/:bookingId
- /settings
- /users
- /login
- /account

### Technology decisions:

- Routing: React Router
- Styling: styled components
- Remote state management: React Query to supabase tables
- UI state management: Context API
- Form management: React Hook Form
- Other tools: react icons / React hot toast / Recharts / date-fns / supabase
