import { configureStore } from "@reduxjs/toolkit";
import rootRecuder from "./root-recuder";

export const store = configureStore({
  reducer: rootRecuder,
});
