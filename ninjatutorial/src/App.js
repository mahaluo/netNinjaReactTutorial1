import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {

  state = {

    ninjas : [
      {name: 'Lasse', age: 30, belt: 'brown', id: 1},
      {name: 'Monika', age: 36, belt: 'black', id: 2},
      {name: 'Rolf', age: 18, belt: 'yellow', id: 3}
    ]
  }

  addNinja = (ninja) => {

    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }
//use non destructive method filter to remove a ninja, use carve out function with filter
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })

    this.setState({
      ninjas: ninjas
    })
  }

  componentDidMount() {
    console.log('component mounted')
  }
 
  componentDidUpdate(prevProps, prevState) {
      console.log('component updated');
      console.log(prevProps, prevState);
  }

  render() {
    return (
      <div className="App">
        <h1>My first react app</h1>
        <p>Welcome</p>

        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
       
        <AddNinja addNinja={this.addNinja} />


      </div>
    );
  }
}

export default App;
