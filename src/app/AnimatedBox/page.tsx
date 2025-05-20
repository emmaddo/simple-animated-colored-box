"use client";
import React, {useState, useEffect} from 'react';

export default function AnimatedBox(){
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [animatedColor, setAnimatedColor] = useState<string>('bg-blue-200');
    
    const updateStatus = ()=>{
        setIsLoading(true);
        }

    const resetStatus = ()=> {
        setIsLoading(false);
        setAnimatedColor('bg-blue-200');
    }

        useEffect(()=>{

           if(isLoading){
            let intervalID: NodeJS.Timeout | undefined = undefined;
            let timeoutID: NodeJS.Timeout | undefined = undefined;
          
            intervalID = setInterval(()=>{
                setAnimatedColor('bg-blue-600');
               timeoutID = setTimeout(() => {
                 setAnimatedColor('bg-blue-200');   
                }, 1000);

            }, 2000);
 return ()=>{
            clearInterval(intervalID);
            clearTimeout(timeoutID);
            
           }
           }   
           
          
        },
    [isLoading]);

    

    return(
    <div className='flex flex-col bg-gray-200 items-center justify-center'>
<div className='bg-gray-400 w-[100px] h-[100px] m-4'>
<div className={`${animatedColor} h-[85px] w-[85px] m-2`}>

</div>
</div>

{!isLoading ? <button onClick={updateStatus} className='bg-blue-600 rounded text-white p-4 m-4'>Start Animating</button> : <button onClick={resetStatus} className='bg-green-600 rounded text-white p-4 m-4'>Stop Animating</button>}

    </div>
);

}