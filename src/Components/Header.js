import React, { useState } from 'react';

const Header = (props) => {
    const {add}=props
    const[text,SetText]=useState('')
    const Enterkey=()=>{
        add(text)
        SetText('')
        

    }
    return (
        <div>
            <div><input value={text} onChange={(e)=>SetText(e.target.value)} onKeyDown={(e)=>{
                if(e.key=='Enter'){
                    Enterkey();
                }
            }} type='text' placeholder='Enter your todo'></input></div>
        </div>
    );
}

export default Header;
