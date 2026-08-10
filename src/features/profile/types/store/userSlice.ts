import type { StateCreator } from "zustand";
import { USER_MOCK } from "../user/usermock";
import { type UserProfile } from "../user/userProfile";

type UserState = {
    user:UserProfile;
}

type UserActions = {
    setUser:(user:UserProfile) =>void;

}

export type UserSlice = UserState & UserActions;


const initialState :UserState = {

    user : USER_MOCK,
}

export const createUserSlice: StateCreator <
UserSlice,
[],
[],
UserSlice
> =(set) =>({
    ...initialState,
    setUser:(user)  => set(()=> ({

        user,
    })

    ),
});