
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT } from './mainStore/storeTypes';
import { useState } from 'react';
import { decrementByInput, incrementByInput } from './mainStore/counterStoreInput/counterByInputSlice';
import { decrement, increment } from './mainStore/counterStore/counterSlice';
function App() {
  const [inputValue, setInputValue] = useState(0);
  const dispatch =useDispatch()

  const counterStore = useSelector((state) => state.counterStore);

  const counterByInputStore = useSelector(state => state.counterInputStore);
  // console.log('counterByInputStore',counterByInputStore)


  const addByInput = () => {
    const actionData = {
      status: INCREMENT,
      inputValue: inputValue
    }
    dispatch(incrementByInput(actionData))
  }

  const subByInput = () => {
    const actionData = {
      status: INCREMENT,
      inputValue: inputValue
    }
    dispatch(decrementByInput(actionData))
  }
  return (
    <div>
       <div className="App">
      {counterStore && <span className='operation'> {counterStore.counter}</span>}
      {counterStore.status !== '' && 
      <span className={counterStore.status == INCREMENT ? 'status-add' : 'status-sub' }>
        {counterStore.status}
        </span>}
      <button className='add-bt' onClick={() => dispatch(increment())}>addValue </button>
      <button className='sub-bt' onClick={() => dispatch(decrement())}>decrement </button>
  
  <br/>
  <br />
  {counterByInputStore && <span className='operation'> {counterByInputStore.counterInput}</span>}
  {counterByInputStore.statusInput !== '' && 
      <span className={counterByInputStore.statusInput == INCREMENT ? 'status-add' : 'status-sub' }>
        {counterByInputStore.statusInput}
        </span>}
    <input type='number' value={inputValue}  onChange={(e) => {setInputValue(e.target.value)}} />
    
    <button className='add-bt' onClick={addByInput}>add by input </button>
      <button className='sub-bt' onClick={subByInput}>Sub by user </button>
  
    </div>
    </div>
  );
}

export default App;
