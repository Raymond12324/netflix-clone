const apiKey = '5dcec68abb9daea680f33bc3e965f76c';
const base_url = 'https://api.themoviedb.org/3';
const requests ={
    fechtTrending:`${base_url}/trending/all/day?api_key=${apiKey}`,
    fechtTopRated:`${base_url}/movie/top_rated?api_key=${apiKey}&language=en-US`,
    fechtNetflixOriginal:`${base_url}/discover/tv?api_key=${apiKey}&with_networks=213`,
    fechtAction:`${base_url}/discover/movie?api_key=${apiKey}&with_genres=28`,
    fechtComedy:`${base_url}/discover/movie?api_key=${apiKey}&with_genres=35`,
    fechtHorror:`${base_url}/discover/movie?api_key=${apiKey}&with_genres=27`
}

export default requests;