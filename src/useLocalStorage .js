import { useEffect, useState } from "react";
import { getLocalStorageItem, setLocalStorageItem } from "./local-storage-utils"

const useLocalStorage = (key, defaultValue = false) => {

    const getValue = () => {
        const storedVal = getLocalStorageItem(key);
        return storedVal != null ? storedVal : defaultValue;
    };

    const [value, setValue] = useState(getValue);

    useEffect(() => {
        setLocalStorageItem(key, value);
    }, [key, value]);

    return [value, setValue];
};

export default useLocalStorage;