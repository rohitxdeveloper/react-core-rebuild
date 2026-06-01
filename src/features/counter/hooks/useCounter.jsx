import React, { useState , useEffect} from "react";
export default function useCounter(initialValue=0)
{
    
    const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount !== null ? Number(savedCount) : initialValue;
    });
    const increment = () => setCount((c) => c + 1 );
    const decrement = () => setCount((c) => c - 1 );
    const reset = () => setCount(initialValue);
    useEffect(() => {
        localStorage.setItem('count',count);
    }, [count]);
    return { count, increment , decrement, reset};
}