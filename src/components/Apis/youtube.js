import axios from 'axios';

const KEY = 'AIzaSyBoTvIBD-2vU7gDgCtUaGdNFUGZmrp0uRU';
const MAXVIDEORESULT = 5;

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: MAXVIDEORESULT,
    key: KEY,
  },
});
