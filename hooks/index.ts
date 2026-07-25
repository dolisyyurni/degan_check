import { useEffect, useRef, handleClickedOutside } from 'react'

export function useOutsideClick<T extends HTMLElement>(callback:() => void){
    const ref =useRef<T>(null);

    useEffect(() =>{
        const handleClickedOutside=(e:MouseEffect)=>{
            if (ref.current && ! ref.current.contains(e.target as Node)){
                callback();
            }
        }
        document.addEventListener('mousedown', handleClickedOutside);
        return ()=>{
         document.addEventListener('mousedown', handleClickedOutside);
        }

    }, [callback]);
    return ref;
}