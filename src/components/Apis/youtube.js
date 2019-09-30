import axios from 'axios';

const KEY = 'AIzaSyAXcNM7O0Ifc0KnHihSzZoFKO1dBI-Hzsc';
const MAXVIDEORESULT = 5;

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: MAXVIDEORESULT,
    key: KEY,
  },
});
