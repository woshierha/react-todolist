import { List, Checkbox, Input } from 'antd'
import { useState } from 'react'
import './Item.css'
export default function Item(props) {
  const [edit, setEdit] = useState(false)
  const handleSelect = (e) => {
    if (e.target.checked) {
      props.ondeleteData(props.index) 
    }
  }
  const handleEdit = () => {
    setEdit(true)
  }
  const handleChange = (e) => {
    props.onDataChange(props.index, e.target.value);
  }
  const handleSubmit = (e) => {
    setEdit(false)
  }
  return (
    <List.Item>
        <Checkbox onChange={handleSelect}>
        </Checkbox>
        {
          edit ? 
          <Input.TextArea className='textinput' onBlur={handleSubmit} type="text" onChange={handleChange} value={props.data} /> 
          : <span onDoubleClick={handleEdit}> {props.data}</span>
        }
    </List.Item>
  )
}