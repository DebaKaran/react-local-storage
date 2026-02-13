import { getLocalStorageItem, setLocalStorageItem } from '../local-storage-utils';

const Modal = () => {
 //const [isOpen, setisOpen] = useState(false);

 const isOpen = getLocalStorageItem("isOpen") || false;

  return (
    <div>
        <button onClick={() => setLocalStorageItem("isOpen", !isOpen)}>Toggle</button>
        {isOpen && <div>Modal</div>}
    </div>
  )
}

export default Modal