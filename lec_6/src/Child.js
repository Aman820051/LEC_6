import './App.css';
import React, {forwardRef} from 'react';

function Child(props,ref)
{
    return(
        <div className='App'>
            <input type='text' ref={ref}></input>
        </div>
    )
}
export default forwardRef(Child)