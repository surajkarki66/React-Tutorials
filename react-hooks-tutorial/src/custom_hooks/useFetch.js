import {useState, useEffect} from 'react';


//A custom hook is a JavaScript function whose name starts with "use", 
//according to the React documentation.
// Easier done than said. Let's make a useFetch hook

export default function useFetch(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(response=>response.json())
        .then(data=>setData(data));
    }, [url]);

    return data;
}