import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../api/slice/authSlice/authApiSlice";
import eventReducer from "../api/slice/eventSlice/eventApiSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    events: eventReducer,
  },
});
