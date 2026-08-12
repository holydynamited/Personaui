import { createUserSlice } from "./slices/userSlice";
import { createEditUserSlice } from "./slices/editUserSlice";
import { create } from "zustand";
import { type UserStore } from "../types/store/store";

export const useUserStore = create<UserStore>()((...args) => ({
  ...createUserSlice(...args),
  ...createEditUserSlice(...args),
}));