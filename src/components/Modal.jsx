import { useState } from 'react';
import { getLocalStorageItem, setLocalStorageItem } from '../local-storage-utils';

const Modal = () => {

 const getIsOpenValue = () => {
    let val = getLocalStorageItem("isOpen") || false;
    console.log("value is: ", val);
    return val;
 }
 const [isOpen, setisOpen] = useState(getIsOpenValue);

 const handleToggle = () => {
    const newValue = !isOpen;
    setisOpen(newValue);
    setLocalStorageItem("isOpen", newValue);
 }

  return (
    <div>
        <button onClick={handleToggle}>Toggle</button>
        {isOpen && <div>Modal</div>}
    </div>
  )
}

export default Modal