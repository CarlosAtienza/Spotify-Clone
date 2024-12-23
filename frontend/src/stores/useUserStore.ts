import { axiosInstance } from "@/lib/axios";
import { create } from "zustand"
import { Playlist, User } from "@/types";

interface UserStore {
    user_id: User | null;
    playlists: Playlist[];
    isLoading: boolean;
    error: string | null;
    currPlaylist: Playlist | null;

    

    fetchPlaylists: (id: string) => Promise<void>;
    fetchPlaylistById: (id: string) => Promise<void>;
    fetchUserById: (id: string) => Promise<void>;

}

export const useUserStore = create<UserStore>((set) => ({
    playlists: [],
    isLoading: false,
    error: null,
    currPlaylist: null,
    user_id: null, 

    fetchPlaylists: async (id) => {
        set({isLoading: true, error: null})
        try {
            const response = await axiosInstance.get(`/playlists/${id}`);
            set({playlists: response.data});
        } catch (error:any) {
            set({error: error.response.data.message});
        } finally{
            set({isLoading: false});
        }
    },

    fetchPlaylistById: async (id) => {
        set({isLoading: true, error: null,})
        try {
            const response = await axiosInstance.get(`/playlists/playlist/${id}`);
            set({currPlaylist: response.data})
        } catch (error:any) {
            set({error: error.response.data.message})
        } finally {
            set({isLoading: false});
        }
    },  
    fetchUserById: async ( ) => {
        set({isLoading: true, error: null,})
        try {
            const response = await axiosInstance.get("/users");
            set({user_id: response.data});
        } catch (error) {
            set({isLoading:false })
        }
    },



}))