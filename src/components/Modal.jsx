import useLocalStorage from '../useLocalStorage ';

const Modal = () => {

 const [isOpen, setisOpen] = useLocalStorage("isOpen", false);

  return (
    <div>
        <button onClick={() => setisOpen(prev => !prev)}>Toggle</button>
        {isOpen && <div>Modal</div>}
    </div>
  )
}

export default Modal