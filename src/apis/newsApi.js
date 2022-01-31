import axios from "axios";

export const newsApi =async (payload) => {
    try{
    const options = {
        method: 'GET',
        url: 'https://free-news.p.rapidapi.com/v1/search',
        params: {q: payload, lang: 'en'},
        headers: {
          'x-rapidapi-host': 'free-news.p.rapidapi.com',
          'x-rapidapi-key': '38cd8662admsh27ff883ca1e671ap1bf68ajsn13357fb79d54'
        }
      }
  
     const response = await axios.request(options) 
    
     return response;
    }
    catch(err){
        console.log(err)
    }
}