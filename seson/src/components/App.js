import React from "react";

import unsplash from "../unsplashapi/unsplash";
import ImageList from "./ImageList";
import ReactDO from "react-dom";
import axios from "axios";
import SearchBar from "./SearchBar";
import User from "./User";
class App extends React.Component {
  state = {
    users: [],

    
    per:2,
    page:1,
    totalpage:null
  };
  //     onSearchSubmit=  async term=>{

  //         const response = await unsplash.get('/search/photos', {
  //           params: {
  //             query: term
  //           }

  //         });

  //     console.log(term);
  //        console.log(response.data.results);

  //        this.setState({ images: response.data.results});

  // }
  // selectFruit=(e)=> {
  //   if (e.target.checked) {
  //     this.setState({
  //       fruits: [...this.state.fruits, e.target.value],
  //     }, () => {
  //       console.log(this.state.fruits);
  //     });
  //   }
  // }
  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
   

   
    const { per, page } = this.state;
    // const url = 'https://reqres.in/api/users?per${per}&${page}';
    const url = `https://reqres.in/api/users?per_page=${per}&page=${page}`;
    axios.get(url).then(res => {
      const persons = res.data;
     
      // this.setState({ users: res.data.data });
     let user= this.state.users;
      this.setState({ users: [...user, ...res.data.data] });
      console.log("persons", this.state.users);
    });
  };
loadmore=()=>{
  console.log("pages", this.state.page);
  this.setState(prevState => ({ page: prevState.page+1
  
 
  }),this.loadUsers);

}
  render() {
    let array = [];
    array = this.state.users;
    console.log(array);

  
    return (
      <div>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>
              <User {...user} />
            </li>
          ))}
        </ul>
        <div>
          <button type="button">Click Me!</button>
          <button type="button">Click Me!</button>
        </div>
        <a onClick={this.loadmore}>loadmore</a>
      </div>
    );
  }
}
export default App;
