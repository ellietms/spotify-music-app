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
      const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
        searchTerm
      )}&type=album,playlist,artist`;
      const result = await get(API_URL);
      console.log("RESULT", result);
      const { albums, artists, playlists } = result;
      dispatch(setAlbums(albums));
      dispatch(setArtists(artists));
      return dispatch(setPlaylist(playlists));
    } catch (error) {
      console.log("error", error);
    }
  };
};
