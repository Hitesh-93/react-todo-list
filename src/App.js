// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Todoinput from './components/Todoinput';
import Todoitems from './components/Todoitems';


function App() {

  const [list, setList] = useState([])

  let addList = (inputText) => {
    setList([...list, inputText])
  }


  const deleteListItems = (key) => {
    let newList = [...list]
    newList.splice(key, 1)
    setList([...newList])
  }


  return (
    <>
      <div className='main-container'>
        <div className='center-container'>

          <Todoinput addList={addList} />

          <h1 className='app-heading'>ToDo List</h1>
          <hr />


          {
            list.map((val, i) => {
              return (

                <Todoitems key={i} index={i} item={val} del={deleteListItems} />
              );
            })
          }


        </div>
      </div>
    </>
  );
}

export default App;
