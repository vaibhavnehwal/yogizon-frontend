import React, {useState, useEffect, useRef} from 'react'

function Saptrishi() {
  const canvasRef = useRef(null);
  const canvasSize = useRef([window.innerWidth, window.innerHeight]);

  const drawCircle = (ctx, x, y, r) => {
    ctx.beginPath();
    ctx.fillStyle = "white"
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill(); 
  }

  const drawPath = (ctx, x1, y1, x2, y2) => {
    ctx.beginPath();
    ctx.strokeStyle = "white"
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    
    
    
    drawCircle(ctx, 300, 40, 5);
    drawPath(ctx, 95, 40, 250, 47);
    
    
    }, []);


  return (
    <>

        <div className='flex justify-center items-center'>
          
        </div>
    <div className='flex justify-center items-center mt-[10em] py-[40px] bg-[black]'>
      

      <canvas ref={canvasRef} width={canvasSize.current[0] - 10} height={canvasSize.current[1]/1.3} className={`border-[2px]`} />

      {/* <div className='saptarishit-container border-[1px] relative w-[60%] h-[30em]'>

      <div className=' absolute top-[10%] right-[20%] flex justify-center items-center rotate-[-176deg]'>
        <div className='h-[8px] w-[8px] bg-[white] rounded-full'></div>
        <div className='h-[2px] w-[10em] bg-[white] rounded-full'></div>
      </div>

      <div className=' absolute top-[19.5%] right-[34%] flex justify-center items-center rotate-[-220deg]'>
        <div className='h-[8px] w-[8px] bg-[white] rounded-full'></div>
        <div className='h-[2px] w-[5em] bg-[white] rounded-full'></div>
      </div>

      <div className=' absolute top-[43%] right-[40%] flex justify-center items-center rotate-[-216deg]'>
        <div className='h-[8px] w-[8px] bg-[white] rounded-full'></div>
        <div className='h-[2px] w-[6em] bg-[white] rounded-full'></div>
      </div>

      <div className=' absolute flex justify-center items-center'>
        <div className='h-[8px] w-[8px] bg-[white] rounded-full'></div>
        <div className='h-[2px] w-[5em] bg-[white] rounded-full'></div>
      </div>

      <div className=' absolute flex justify-center items-center'>
        <div className='h-[8px] w-[8px] bg-[white] rounded-full'></div>
        <div className='h-[2px] w-[5em] bg-[white] rounded-full'></div>
      </div>

      <div className=' absolute flex justify-center items-center'>
        <div className='h-[8px] w-[8px] bg-[white] rounded-full'></div>
        <div className='h-[2px] w-[5em] bg-[white] rounded-full'></div>
      </div>

      <div className=' absolute flex justify-center items-center'>
        <div className='h-[8px] w-[8px] bg-[white] rounded-full'></div>
        <div className='h-[2px] w-[5em] bg-[white] rounded-full'></div>
      </div>

      </div> */}


    </div>
  </>
  )
}

export default Saptrishi