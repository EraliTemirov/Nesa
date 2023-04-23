import React from 'react';
import rasm1 from "../Images/Iamge.png";
import rasm2 from "../Images/Iamge (1).png";
import rasm3 from "../Images/Iamge (2).png";
import rasm4 from "../Images/Iamge (3).png";
import rasm5 from "../Images/Iamge (4).png";
import rasm6 from "../Images/Iamge (5).png";

const Section8 = () => {
  return (
    <div className='container mt-5'>
      <div className='text-center m-5'>
        <span className='fs-4 '>BLOG & ARTICLE</span>
      <h3 className='m-3 fs-1'>Take a look at the lastest aricles</h3>
      </div>
      <div  className='d-flex  flex-wrap  justify-content-center'>
           <div className='w-25 m-5'>
           <img src={rasm1} alt="img" />
           <p>May 5. 2022 | 4 MIN READ</p>
           <p className='fs-5'>How marketing can help your business more than anything.</p>
           </div>
           <div className='w-25 m-5'>
           <img src={rasm2} alt="img" />
           <p>May 5. 2022 | 4 MIN READ</p>
           <p className='fs-5'>How marketing can help your business more than anything.</p>
           </div>
           <div className='w-25 m-5'>
           <img src={rasm3} alt="img" />
           <p>May 5. 2022 | 4 MIN READ</p>
           <p className='fs-5'>How marketing can help your business more than anything.</p>
           </div>
           <div className='w-25 m-5'>
           <img src={rasm4} alt="img" />
           <p>May 5. 2022 | 4 MIN READ</p>
           <p className='fs-5'>How marketing can help your business more than anything.</p>
           </div>
           <div className='w-25 m-5'>
           <img src={rasm5} alt="img" />
           <p>May 5. 2022 | 4 MIN READ</p>
           <p className='fs-5'>How marketing can help your business more than anything.</p>
           </div>
           <div className='w-25 m-5'>
           <img src={rasm6} alt="img" />
           <p>May 5. 2022 | 4 MIN READ</p>
           <p className='fs-5'>How marketing can help your business more than anything.</p>
           </div>
      </div>
    </div>
  )
}

export default Section8
