import {create} from "zustand"
import {Song} from "@/types"

interface PlayerStore {
	currSong: Song | null;
	isPlaying: boolean;
	queue: Song[];
	currIndex: number;

	initializeQueue: (songs: Song[]) => void;
	playAlbum: (songs: Song[], startIndex?: number) => void;
	setCurrSong: (song: Song | null) => void;
	togglePlay: () => void;
	playNext: () => void;
	playPrevious: () => void;
}

export const usePlayerStore = create<PlayerStore>((set, get) => ({
    currSong: null,
	isPlaying: false,
	queue: [],
	currIndex: -1,

    initializeQueue: (songs: Song[]) => {
        set({
            queue: songs,
            currSong: get().currSong || songs[0],
            currIndex: get().currIndex === -1 ? 0: get().currIndex
        })
    },
    playAlbum: (songs: Song[], startIndex=0) => {
        if(songs.length === 0) return;
        const song = songs[startIndex];
        set({
            queue: songs,
            currSong: song,
            currIndex: startIndex,
            isPlaying: true,
        })
    },
    setCurrSong: (song: Song | null) => {
        if (!song) return;
        const songIndex = get().queue.findIndex(s => s._id === song._id);
        set({
            currSong: song,
            isPlaying: true, 
            currIndex: songIndex !== -1 ? songIndex: get().currIndex
        });
    },
    togglePlay: () => {
        const willStartPlaying = !get().isPlaying;
        set({
            isPlaying: willStartPlaying,
        })
    },
    playNext: () => {
        const {currIndex, queue} = get()
        const nextIndex = currIndex + 1;
        // check if there is next song to play
        if (nextIndex < queue.length) {
            const nextSong = queue[nextIndex];
            set({
                currIndex: nextIndex,
                currSong: nextSong,
                isPlaying: true,
            })
        }
        else {
            set({isPlaying: false});
        }
    },
    playPrevious: () => {
       const { currIndex, queue } = get();
		const prevIndex = currIndex - 1;

		// theres a prev song
		if (prevIndex >= 0) {
			const prevSong = queue[prevIndex];
			set({
				currSong: prevSong,
				currIndex: prevIndex,
				isPlaying: true,
			});
		} else {
			// no prev song
			set({ isPlaying: false });
		}
	},
    

}))