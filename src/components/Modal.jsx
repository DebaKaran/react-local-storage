import { useState } from 'react';
import { getLocalStorageItem, setLocalStorageItem } from '../local-storage-utils';

const Modal = () => {
 const [isOpen, setisOpen] = useState(getLocalStorageItem("isOpen") || false);
 
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