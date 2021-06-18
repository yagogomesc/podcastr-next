import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Accept: "application/json",
    Authorization:
      "Bearer BQDf0QQ7oxW1BgntZxLvkf-O_sffVslhWw6SANtqcRGkOrj4X4sSE5S9AsQXI-NYbC_iCEr4rQUQNqwwqKrj7O_LrcsEo1soHaqfhZuX6DcGSUeXlBjAUlES7647u2b4hmYpnY_ZTG-RGk6uLw",
  },
});
