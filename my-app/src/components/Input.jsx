import { useState } from 'react';
import { Input, Button } from 'antd';
import './Input.css';
export default function Counter(props) {
  const [Inputdata, setCount] = useState('');
  function handleChange(e) {
    setCount(e.target.value);
  }
  function handleClick() {
    props.getData(Inputdata)
    setCount('')
  }

  return (
    <div className='inputbox'>
        <Input className='inputdata' value={Inputdata} onChange={handleChange}></Input>
        <Button type='primary' onClick={handleClick}>添加待办事项</Button>
    </div>
  );
}
