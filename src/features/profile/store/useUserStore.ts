import { createUserSlice } from "./slices/userSlice";
import { createEditUserSlice } from "./slices/editUserSlice";
import { create } from "zustand";
import { type UserStore } from "../types/store/store";
import { createPostSlice } from "./slices/postsSlice";

export const useUserStore = create<UserStore>()((...args) => ({
  ...createUserSlice(...args),
  ...createEditUserSlice(...args),
  ...createPostSlice(...args),
}));