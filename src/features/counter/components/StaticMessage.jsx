import React, {useState , useEffect} from 'react';
function StaticMessage()
{
    console.log('Hello logs its rerendered in every event');
    return(
        <>
        <h4>Wont change</h4>
        </>
    )
}
export default StaticMessage;