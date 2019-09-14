import axios from 'axios';
import key from '../keys/keys';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: key
  }
});
