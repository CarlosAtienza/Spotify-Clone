import { usePlayerStore } from "@/stores/usePlayerStore";
import { useRef } from "react"
import { useEffect } from "react";

const AudioPlayer = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const prevSongRef = useRef<string | null>(null);

    const {currSong, isPlaying, playNext} = usePlayerStore();

    // handle Play/Puse Logic

    useEffect(() => {
        if (isPlaying) audioRef.current?.play();
        else audioRef.current?.pause();
    }, [isPlaying]);

    //handles when songs ends
    useEffect(() => {
        const audio = audioRef.current;

        const handleEnded = () => {
            playNext();
        }

        audio?.addEventListener("ended", handleEnded)
        return () => audio?.removeEventListener("ended", handleEnded);
    }, [playNext]);

    //handle song changes
    useEffect(() => {
        if (!audioRef.current || !currSong) return;
        const audio = audioRef.current;
        //check if song change is a new song
        const isSongChange = prevSongRef.current !== currSong?.audioUrl;
        if(isSongChange) {
            audio.src = currSong?.audioUrl;
            audio.currentTime = 0;
            prevSongRef.current = currSong?.audioUrl;
            //play new song
            if (isPlaying) audio.play();
        }
    }, [currSong, isPlaying])

    return (
        <audio ref={audioRef}/>
    )
}

export default AudioPlayer