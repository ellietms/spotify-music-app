import { get } from "../utils/api";
export const setAlbums = (albums) => ({
  type: "SET_ALBUMS",
  albums,
});

export const addAlbums = (albums) => ({
  type: "ADD_ALBUMS",
  albums,
});

export const setArtists = (artists) => ({
  type: "SET_ARTISTS",
  artists,
});

export const addArtists = (artists) => ({
  type: "ADD_ARTISTS",
  artists,
});

export const setPlaylist = (playlists) => ({
  type: "SET_PLAYLIST",
  playlists,
});

export const addPlaylist = (playlists) => ({
  type: "ADD_PLAYLIST",
  playlists,
});

export const initiateGetResult = (searchTerm) => {
  return async (dispatch) => {
    try {
    } catch (error) {
      console.log("error", error);
    }
  };
};
