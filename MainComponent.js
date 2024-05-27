import React, { useState } from "react";
import AddNewEventModal from "./components/modals/AddNewEventModal";
import EditEventModal from "./components/modals/EditEventModal";

const MainComponent = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleCreate = (newEvent) => {
    console.log("New Event Created: ", newEvent);
    setIsAddModalOpen(false);
  };

  const handleSave = (updatedEvent) => {
    console.log("Event Updated: ", updatedEvent);
    setIsEditModalOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsAddModalOpen(true)}>Add New Event</button>
      <button onClick={() => setIsEditModalOpen(true)}>Edit Event</button>

      <AddNewEventModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        handleCreate={handleCreate}
      />

      <EditEventModal
        isModalOpen={isEditModalOpen}
        setIsModalOpen={setIsEditModalOpen}
        handleSave={handleSave}
        event={event}
      />
    </div>
  );
};

export default MainComponent;
