import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async(url) =>{
    const {data} = await axios.get((url),{
        
        headers: {
            'X-RapidAPI-Key': '1691bb0e45msh48baa72d005b909p1670e6jsn6e00bb6f98d2',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
})

return data;
}