const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  hostName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  eventDate: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  ticketsLeft: {
    type: Number,
    required: true,
  },
  priceRange: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
