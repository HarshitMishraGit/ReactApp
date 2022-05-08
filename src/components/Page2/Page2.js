import Hello from '../dropdown/hello';
import Drp from '../dropdown/Drp';
import Fool from '../Fool';
import React from 'react';

const Page2 = () => {
    return (
        <div>
            
{/* <Alert title="success" msg="You successfully set the alert"/> */}
<div className='flex flex-col justify-center'>
<Drp />
</div>
<div className="my-[100px] mx-10 flex flex-row justify-center">
  <Hello/>
  </div>

<div className=' flex flex-row justify-center w-full'>
<Fool className=""/>
</div>
        </div>
    );
}

export default Page2;
