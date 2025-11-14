import './App.css';
import Greeting from './components/Greeting';
import PizzaMenu from './components/PizzaMenu'
const App = () => {

  const sitename = 'wsk'
  const styles = {
    backgroundColor: 'black',
    color: 'white',
  }
  
  return (
    <>
      <h1 style={styles}>My App</h1>
      <p style = {{color: 'brown'}}>{sitename}</p>
      <Greeting name={45} age={25} isteacher={false}/>
      <Greeting name='jaska'age={105} isteacher={true}></Greeting>
      <PizzaMenu></PizzaMenu>

    </>
  );
};
export default App;