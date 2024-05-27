// components/EventPage.js
import React from "react";
import { useParams } from "react-router-dom";

function EventPage() {
  const { id } = useParams();
  // Fetch and display event data using the id
  return (
    <div>
      <h1>Event {id}</h1>
      {/* Event details */}
    </div>
  );
}

export default EventPage;
