import React, {useState, useEffect} from 'react';

export const Timer = (reset: any) => {
    const [second, setSecond] = useState(2)
    const [millisecond, setMillisecond] = useState(99)

    
    useEffect(() => {
        if (reset) {
            setSecond(2)
            setMillisecond(99)
        }
    },[reset])
    useEffect(()=> {
        if(millisecond > 0) {
            setTimeout(()=> setMillisecond(millisecond-1),10)
        } else if (second > 0) {
            setMillisecond(99)
            setTimeout(()=> setSecond(second-1))
        }
        
    },[millisecond,second])

    return <h2>
        {second + ':' + millisecond + ' Time reamining on conversion.'}
    </h2>
    
}