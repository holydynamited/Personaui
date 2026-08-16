import type { StateCreator } from "zustand";
import type { ProfileLink } from "../../types/side-cards/profilelinks";
import type { UserProfile } from "../../types/user/userProfile"
import type { UserStore } from "../../types/store/store";



type EditUserState = {
    draft:UserProfile | null;
}

type EditUserActions = {

    initDraft:()=>void;

    updateField: (field: keyof UserProfile, value: string) => void;
    setAvatar:(avatar:string)=>void;
    setBanner:(banner:string)=>void;
    addLink:(link:ProfileLink)=>void;

    updateLink:(type:ProfileLink["type"],
        link:string
    )=>void;

    removeLink:(
        type:ProfileLink["type"],
        link:string
    )=>void;

    resetDraft:()=>void;
    clearDraft:()=>void;

}

export type EditUserSlice = EditUserState & EditUserActions;

const initialState: EditUserState = {
  draft: null,
};

export const createEditUserSlice: StateCreator<
  UserStore,
  [],
  [],
  EditUserSlice
> = (set,get) => ({
  ...initialState,

  initDraft: () =>
    set(() => ({
    draft: { ...get().user },
  })),

  updateField: (field, value) =>
    set((state) => ({
      draft: state.draft
        ? {
            ...state.draft,
            [field]: value,
          }
        : null,
    })),
    setAvatar:(avatar)=>
        set((state)=>({
            draft:state.draft
            ?{
                ...state.draft,
                avatar,
            }
            : null,
        })),

    setBanner:(banner)=>
        set((state)=>({
            draft:state.draft
            ?
            {
                ...state.draft,
                banner
            }
            : null,
            }
            
        )),

        addLink:( link)=>
            set((state)=>({
                draft:state.draft
                ?
                {
                    ...state.draft,
                    links: [...state.draft.links, link],
                }
                :null,
            })),

            updateLink: (type, link) =>
                 set((state) => ({
                draft: state.draft
                ? {
                    ...state.draft,
                    links: state.draft.links.map((item) =>
                        item.type === type
                        ? { ...item, link }
                        : item
                    ),
                    }
                : null,
            })),

            removeLink:(type,link)=>
                set((state)=>({
                    draft:state.draft
                    ?
                    {
                    ...state.draft,
                    links:state.draft.links.filter!(item=> item.type=== type && item.link === link)
                    }
                    : null
                })),

            resetDraft:()=>
                 set(() => ({
            draft: { ...get().user },
        })),

          

        clearDraft:()=>
            set(()=>({
                draft:null
            }))


});