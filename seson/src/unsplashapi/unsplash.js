import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 974cf704a019b0e3ce2705820a4c3b8f03a796d8dbf49432d0f0f954043a4fab"
  }
});
