// controllers/eventController.js
const eventService = require("../services/eventService");

const getAllEvents = async (req, res) => {
  try {
    const events = await eventService.getAllEvents();
    res.send({ status: 200, data: events });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// const getEventById = async (req, res) => {
//   try {
//     const event = await eventService.getEventById(req.params.id);
//     if (!event) {
//       return res.status(404).json({ message: "Event not found" });
//     }
//     res.status(200).json(event);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const createEvent = async (req, res) => {
//   try {
//     const event = await eventService.createEvent(req.body);
//     res.status(201).json(event);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const updateEvent = async (req, res) => {
//   try {
//     const event = await eventService.updateEvent(req.params.id, req.body);
//     if (!event) {
//       return res.status(404).json({ message: "Event not found" });
//     }
//     res.status(200).json(event);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const deleteEvent = async (req, res) => {
//   try {
//     const event = await eventService.deleteEvent(req.params.id);
//     if (!event) {
//       return res.status(404).json({ message: "Event not found" });
//     }
//     res.status(200).json({ message: "Event deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

module.exports = {
  getAllEvents,
  //   getEventById,
  //   createEvent,
  //   updateEvent,
  //   deleteEvent,
};
