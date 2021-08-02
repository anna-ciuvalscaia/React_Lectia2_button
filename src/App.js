import {Component} from 'react'
import Button from './btn/Button'



class App extends Component {
  
  

  render() {
    const btn1 = <Button label="Button One" color="red"/>
    console.dir(btn1)
    return (
      <div>
      {btn1}
      <Button label="Button Two" color="green"/>
      </div>
    )
  }
}

export default App;
