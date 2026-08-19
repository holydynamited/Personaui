import type { EditUserSlice } from "../../store/slices/editUserSlice";
import type { PostSlice } from "../../store/slices/postsSlice";
import type { UserSlice } from "../../store/slices/userSlice";

export type UserStore = UserSlice & EditUserSlice & PostSlice;