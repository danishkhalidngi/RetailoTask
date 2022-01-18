import axios from 'axios';
import {PayloadProps} from '../types';

class Giphs {
  async searchGiphs(payload: PayloadProps) {
    const {data} = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=nSTX5VEN5Mewzvp7w0J3jipJyGqcGets&q=${payload.search}&limit=${payload.limit}&offset=${payload.offset}`,
    );
    return data;
  }
}

export const giphs = new Giphs();
