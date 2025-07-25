export interface Song {
    _id: string;
    title: string;
    artist: string;
    albumId: string | null;
    imageUrl: string;
    audioUrl: string;
    duration: number;
    createdAt: string;
    updatedAt: string;
}

export interface Album {
    _id: string;
    title: string;
    artist: string;
    imageUrl: string;
    releaseYear: number;
    songs: Song[];
}

export interface Stats{
    totalSongs: number;
    totalAlbums: number;
    totalUsers: number;
    totalArtists: number;
}

export interface Playlist {
    _id: string;
    title: string;
    imageUrl: string | null;
    userId: string,
    songs: Song[];
}

export interface User {
    _id: string;
    clerkId: string;
    fullName: string;
	imageUrl: string;

}