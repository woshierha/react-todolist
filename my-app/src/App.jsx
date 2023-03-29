import './App.css';
import { useState } from 'react';
import InputBox from './components/Input.jsx'
import  Item from './components/Item.jsx'
import { List } from 'antd'
function App() {
  const [datalist, setDatalist] = useState([])
  const getInoutData = (data) => {
    setDatalist([...datalist, data])
  }
  const getChangeData = (index, data) => {
    setDatalist(datalist.map((item, i) => {
      if(index === i) {
        return data
      }
      return item
    }))
  }
  const delData = (index) => {
    console.log(index)
    setDatalist(datalist.filter((item, i) => {
      return i !== index
    }))
  }
  return (
    <div className="App">
      <h2>To-Do-List</h2>
      <List className='todo-list'>
        {datalist.map((item, index) => {
          return <Item ondeleteData={delData} onDataChange={getChangeData} index={index} key={index} data={item}></Item> } 
        )}
      </List>
      <InputBox getData={getInoutData}></InputBox>
    </div>
  );
}

export default App;
