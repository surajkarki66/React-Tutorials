import React, { Component } from "react";
import axios from "axios";

import Blog from "./containers/Blog/Blog";

class App extends Component {
  render() {
    let formData = new FormData();
    formData.append(
      "obj",
      JSON.stringify({
        name: "suraj",
        a: [1, 3, 4],
        location: {
          street: "jl",
        },
      })
    );

    axios({
      method: "post",
      url: "http://localhost:5000/api/v1/freelancer/make-profile",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(function (response) {
        //handle success
        // console.log(JSON.parse(response.data.obj));
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    return (
      <div className="App">
        <Blog />
      </div>
    );
  }
}

export default App;
