export const formatTime = (time) => {
    if (time && !isNaN(time)) {
        const minutes = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60);
        const seconds = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60);
        return `${minutes}:${seconds}`;
    }
    return '00:00';
}