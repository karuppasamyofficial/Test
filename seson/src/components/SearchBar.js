import React from "react";


class SearchBar extends React.Component{
    state={
        term:'hi there'
    };


// onChangeInpu(event){
    
//     console.log(event.target.value);

// }

    onFormSubmit=(event)=>{


event.preventDefault();




        this.props.aftersubmit(this.state.term);

    }
    render(){
       return (
         <div class="ui segment">
           <form  onSubmit={this.onFormSubmit} className="ui form">
             <div className=" ui field">
               <label> image search</label>
               {/* <input type="text" onChange={this.onChangeInpu}/> */}
               <input
                 type="text"  value={this.state.term}
                           onChange={event => this.setState({term:event.target.value})}
                     />
             </div>
           </form>
         </div>
       );
    }



}

export default SearchBar;
