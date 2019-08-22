import React from "react";
import ReactDO from "react-dom";
import App from './components/App';
import Spinner from './Spinner';
import SeasonDisplay from './SeasonDisplay';

// const App = () => {

//   return <div>Hi Hello </div>;
// };

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { lat: null,ErrorMessage:'' };

//       window.navigator.geolocation.getCurrentPosition(
//         position => {
//           this.setState({ lat: position.coords.latitude });
//         },
//         err => {
//           this.setState({
//             ErrorMessage: err.message
//           });
//         }
//       );
    
//   }


// //   componentDidMount(){
     

// //   }
//   render() {
   
//       if (this.state.ErrorMessage && !this.state.lat) {
//           return <div className="border red">
//               <div>
//               latitude:{this.state.ErrorMessage}
//               </div></div>;
//       }
//       if (!this.state.ErrorMessage && this.state.lat) {
         
//           return <SeasonDisplay latitude={this.state.lat} />;

//       }

//       return <div><Spinner/></div>;
//   }
// }

ReactDO.render(<App />, document.querySelector("#root"));
