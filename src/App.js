import "./App.css";
import Row from "./Row";
import request from "./request";
import Banner from "./Banner";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="Netflix Originals"
        fetch={request.fechtNetflixOriginal}
        isLargeRow
      ></Row>
      <Row title="Trending Now" fetch={request.fechtTrending}></Row>
      <Row title="TopRated" fetch={request.fechtTopRated}></Row>
      <Row title="Action" fetch={request.fechtAction}></Row>
      <Row title="Comedy" fetch={request.fechtComedy}></Row>
      <Row title="Horror" fetch={request.fechtHorror}></Row>
    </div>
  );
}

export default App;

/*
api-key:5dcec68abb9daea680f33bc3e965f76c
webUrl:netflix-clone-28b3f.web.app
apiExample:https://api.themoviedb.org/3/movie/550?api_key=5dcec68abb9daea680f33bc3e965f76c



*/
