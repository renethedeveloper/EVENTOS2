import './App.css'
import { useState } from 'react'
import EventList from './components/EventList'
import EventForm from './components/EventForm';
// import ViewEmployee from './components/viewEmployee.jsx';





function App() {
  
  const [events, setEvents] = useState([]);

  return (
    <>
      <h1>My Events</h1>
      <EventForm  setEvents={setEvents} />
      <EventList events={events} setEvents={setEvents} />
      {/* <ViewEmployee />
      <EmployeeForm /> */}
    </>
  )
}

export default App