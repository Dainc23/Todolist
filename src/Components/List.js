import React, { useEffect, useState } from 'react';
import Header from './Header';
import Todo from './Todo';

const List = () => {
    const [arr, SetArr] = useState(
        [{
            id: 1,
            name: "Le Van Meo"
        },
        {
            id: 2,
            name: "Le Van Tien"
        },
        {
            id: 3,
            name: "Le Duy Anh"
        }]
    )
    useEffect(()=>{
        SetArr(JSON.parse(localStorage.getItem("arr")))},[]
    )
    const RemovebyId=(id)=>{
        SetArr(arr.filter(item=>item.id !=id))
        localStorage.setItem("arr",JSON.stringify(arr.filter(item=>item.id !=id)))
    }
    const add=(text)=>{
        if(arr.length>0){
            SetArr([...arr,{id:arr[arr.length-1].id+1,name:text}])
            localStorage.setItem("arr",JSON.stringify([...arr,{id:arr[arr.length-1].id+1,name:text}]))
        }
        else{
            SetArr([...arr,{id:1,name:text}])
            localStorage.setItem("arr",JSON.stringify([...arr,{id:1,name:text}]))
        }

    }
    return (
        <div className='contain'>
            <Header add={add}/>
            <div className='list'>
                {
                    arr.map((item,index)=>(
                        <Todo todo={item} key={index} RemovebyId={RemovebyId} />

                    ))
                }
                

            </div>
        </div>
    );
}

export default List;
