import './App.css';
import { useState, useEffect} from 'react';
import InputBox from './components/Input.jsx'
import  Item from './components/Item.jsx'
// import { List } from 'antd'
import Sortable from 'sortablejs'; 

// import { ReactSortable } from 'react-sortablejs'
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
  useEffect(() => {
    const listItems = document.querySelector('.todo-list');
    const options = {
      animation: 150,
      ghostClass: 'blue-background-class',
      handle: '.list-item',
      onEnd: (evt) => {
        const newIndex = evt.newIndex;
        const oldIndex = evt.oldIndex;
        console.log('new:',newIndex, 'old:',oldIndex)
        if (newIndex !== oldIndex) {
          setDatalist((prevList) => {
            const newList = [...prevList];
            const current = newList[oldIndex];
            newList.splice(oldIndex, 1);
            newList.splice(newIndex, 0, current);
            console.log(newList)
            return newList;
          });
        }
      },
    };
    Sortable.create(listItems, options);
  })
  return (
    <div className="App">
      <h2 id='title'>To-Do-List</h2>
      <div className='todo-list'>
        {datalist.map((item, index) => {
          return (
            <div key={`${item}-${index}`} className="list-item">
               <Item ondeleteData={delData} onDataChange={getChangeData} index={index} key={index} data={item}></Item>
            </div>
           )} 
        )}
      </div>
      <InputBox getData={getInoutData}></InputBox>
    </div>
  );
}
export default App;
