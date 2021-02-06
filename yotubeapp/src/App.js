import "./App.css";
import React from "react";
import youtube from "./api/youtube";
import "./Component/Search";
import Search from "./Component/Search";
import Videolist from "./Component/Videolist";
import Videframe from "./Component/Videframe";

class App extends React.Component {

  componentDidMount(){

    this.onSearchSubmit('buildings')
  }
  state = { videos: [], videoSelected: null };
  onSearchSubmit = async (term) => {
    console.log(term);

    var response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
    this.setState({videoSelected:response.data.items[0]})
  };

  onVideoSelect = (video) => {
    this.setState({ videoSelected: video });
  };
  render() {
    return (
      <div className="ui container">
        <Search onFormSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <Videframe video={this.state.videoSelected} />
            </div>
            <div className="four wide column">
              <Videolist
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
