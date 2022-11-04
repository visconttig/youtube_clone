import axios from "axios";


    const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';

    const options = {
       // method: 'GET',
       // url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
        //   relatedToVideoId: '7ghhRHRP6t4',
        //   part: 'id,snippet',
        //   type: 'video',
          maxResults: '50'
        },
        headers: {          
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });

;  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    console.log(data);

    return data;
}