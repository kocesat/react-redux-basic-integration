// Action creator with named export (not default export)
export const selectSong = (song) => {
    // Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};


