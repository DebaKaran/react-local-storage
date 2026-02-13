import { useEffect, useState } from "react";
import { getLocalStorageItem, removeLocalStorageItem, setLocalStorageItem } from "./local-storage-utils"

const useLocalStorage = (key, defaultValue) => {

    if (defaultValue === undefined) {
        throw new Error("useLocalStorage requires a defaultValue");
    }

   const getValue = () => {
    try {
        const storedVal = getLocalStorageItem(key);

        if (storedVal != null) {
            return JSON.parse(storedVal);
        }

        return defaultValue;

    } catch (error) {
        console.warn(`Invalid localStorage value for key "${key}"`);
        removeLocalStorageItem(key);
        return defaultValue;
    }
};

    const [value, setValue] = useState(getValue);

    useEffect(() => {
        setLocalStorageItem(key, value);
    }, [key, value]);

    return [value, setValue];
};

export default useLocalStorage;