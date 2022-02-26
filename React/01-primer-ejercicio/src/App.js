import './App.css';
import Person from './components/Person/Person';
import PersonClass from './components/PersonClass/PersonClass';
import PersonMap from './components/PersonMap/PersonMap';

function App() {
  // let obj = {
  //   name: "Hello",
  //   surname: "Goodbye",
  //   age: -39
  // }
  // const chain = [1, 2, 3]

  const objects = [
    {
      id: 1,
      name: "Pepito",
      surname: "Fernandez",
      age: 45
    },
    {
      id: 2,
      name: "Juanito",
      surname: "Hernandez",
      age: 23
    },
    {
      id: 3,
      name: "Laurita",
      surname: "Garcia",
      age: 99
    },
  ]

  const objectItems = objects.map(element => 
    (<PersonMap key={ element.id } {...element}/>)
  )
  
  return (
    <>
    <Person name="Ger" surname="El mejor" age={34}/>
    <Person name = {"Ger"} surname = {"El mejor"} age= {78}/>
    {/* <Person object = {obj}/> */}
    {/* <Person array = {chain}/> */}
    { objectItems }
    {
    objects.map (element => (
      <PersonMap 
          key={ element.id } 
          {...element}
      />
    ))
    }
    <PersonClass name="Ger" surname="El mejor" age={34}/>
    </>
  );
}

export default App;
