// services/eventService.js
const Event = require("../modals/Event");
const db = require("../config/db");

const getAllEvents = async () => {
  return await db.events.find().toArray();
};

// const getEventById = async (id) => {
//   return await Event.findById(id);
// };

// const createEvent = async (eventData) => {
//   const event = new Event(eventData);
//   return await event.save();
// };

// const updateEvent = async (id, eventData) => {
//   return await Event.findByIdAndUpdate(id, eventData, { new: true });
// };

// const deleteEvent = async (id) => {
//   return await Event.findByIdAndDelete(id);
// };

module.exports = {
  getAllEvents,
  //   getEventById,
  //   createEvent,
  //   updateEvent,
  //   deleteEvent,
};
