import React, { useState, useEffect, useRef } from "react";
import PopoverCard from "./Saptrishi/PopoverCard";

function Saptrishi() {
  const [circleSize, setCircleSize] = useState({
    c1: {
      size: 3,
      isHover: false,
    },
    c2: {
      size: 3,
      isHover: false,
    },
    c3: {
      size: 3,
      isHover: false,
    },
    c4: {
      size: 3,
      isHover: false,
    },
    c5: {
      size: 3,
      isHover: false,
    },
    c6: {
      size: 3,
      isHover: false,
    },
    c7: {
      size: 3,
      isHover: false,
    },
  });
  // const canvasRef = useRef(null);
  // const canvasSize = useRef([window.innerWidth, window.innerHeight]);
  // const [mousePos, setMousePos] = useState({x: 0, y: 0});

  // const drawCircle = (ctx, x, y, r) => {
  //   ctx.beginPath();
  //   ctx.fillStyle = "white"
  //   ctx.arc(x, y, r, 0, 2 * Math.PI);
  //   ctx.fill();
  // }

  // const drawPath = (ctx, x1, y1, x2, y2) => {
  //   ctx.beginPath();
  //   ctx.strokeStyle = "white"
  //   ctx.moveTo(x1, y1);
  //   ctx.lineTo(x2, y2);
  //   ctx.lineWidth = 2;
  //   ctx.stroke();
  // }

  //   const getCoordinates = (e) => {
  //     const canvas = canvasRef.current;
  //     const ctx = canvas.getContext('2d');

  //     drawCircle(ctx, e.clientX, e.clientY, 5);
  //     console.log(e.clientX, e.clientY)

  // };

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext('2d');

  //   // canvas.addEventListener('mousemove', (e) => {
  //   //     console.log(e.clientX, e.clientY);
  //   // })

  //   // drawCircle(ctx, 300, 40, 5);
  //   drawPath(ctx, 95, 40, 1149, 207);

  //   }, []);

  return (
    <>
      <div className="flex justify-center h-screen items-center mt-[10em] py-[40px] bg-[black] relative">
        <svg
          width="900"
          height="495"
          viewBox="0 0 339 195"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block text-center"
        >
          <line
            x1="157.713"
            y1="93.5907"
            x2="214.713"
            y2="53.5907"
            stroke="white"
          />
          <line
            x1="216.646"
            y1="52.6464"
            x2="253.646"
            y2="15.6464"
            stroke="white"
          />
          <line
            x1="38.5251"
            y1="184.156"
            x2="12.5251"
            y2="105.156"
            stroke="white"
          />
          <line
            x1="15.9614"
            y1="104.501"
            x2="157.961"
            y2="93.5015"
            stroke="white"
          />
          <line
            x1="254.02"
            y1="15.5004"
            x2="330.02"
            y2="18.5004"
            stroke="white"
          />
          <line
            x1="38.9171"
            y1="183.507"
            x2="151.917"
            y2="164.507"
            stroke="white"
          />
          <line
            x1="152.501"
            y1="164.963"
            x2="157.501"
            y2="96.9633"
            stroke="white"
          />
          <svg className="">
            <circle
              cx="254"
              cy="16"
              r={circleSize.c1}
              fill="#D9D9D9"
              onMouseOver={() => {
                setCircleSize({ ...circleSize, c1: 4 });
              }}
              onMouseOut={() => {
                setCircleSize({ ...circleSize, c1: 3 });
              }}
              className="cursor-pointer"
            />
          </svg>
          <svg className="">
            <circle
              cx="330"
              cy="19"
              r={circleSize.c2}
              fill="#D9D9D9"
              onMouseOver={() => {
                setCircleSize({ ...circleSize, c2: 4 });
              }}
              onMouseOut={() => {
                setCircleSize({ ...circleSize, c2: 3 });
              }}
              // className={`cursor-pointer ${circleSize.c2 === 4 ? "hs-tooltip-toggle" : ""}`}
            />
          </svg>
          <svg className="">
            <circle
              cx="216"
              cy="53"
              r={circleSize.c3}
              fill="#D9D9D9"
              onMouseOver={() => {
                setCircleSize({ ...circleSize, c3: 4 });
              }}
              onMouseOut={() => {
                setCircleSize({ ...circleSize, c3: 3 });
              }}
              className="cursor-pointer"
            />
          </svg>
          <svg className="">
            <circle
              cx="39"
              cy="184"
              r={circleSize.c4}
              fill="#D9D9D9"
              onMouseOver={() => {
                setCircleSize({ ...circleSize, c4: 4 });
              }}
              onMouseOut={() => {
                setCircleSize({ ...circleSize, c4: 3 });
              }}
              className="cursor-pointer"
            />
          </svg>
          <svg className=''>
            <circle
              cx="13"
              cy="105"
              r={circleSize.c5}
              fill="#D9D9D9"
              onMouseOver={() => {
                setCircleSize({ ...circleSize, c5: 4 });
              }}
              onMouseOut={() => {
                setCircleSize({ ...circleSize, c5: 3 });
              }}
              className="cursor-pointer"
            />
          </svg>
          <svg className=''>
            <circle
              cx="153"
              cy="165"
              r={circleSize.c6}
              fill="#D9D9D9"
              onMouseOver={() => {
                setCircleSize({ ...circleSize, c6: 4 });
              }}
              onMouseOut={() => {
                setCircleSize({ ...circleSize, c6: 3 });
              }}
              className="cursor-pointer"
            />
          </svg>
          <svg className=''>
            <circle
              cx="158"
              cy="94"
              r={circleSize.c7}
              fill="#D9D9D9"
              onMouseOver={() => {
                setCircleSize({ ...circleSize, c7: 4 });
              }}
              onMouseOut={() => {
                setCircleSize({ ...circleSize, c7: 3 });
              }}
              className="cursor-pointer"
            />
          </svg>
        </svg>

        <PopoverCard
          className=""
          id="c1"
          title="Brahmarshi Atri"
          description="Brahmarshi Atri is one of the Saptarishis in the first Manvantara, and the one who is credited with composing a large number of hymns to Agni, Indra and other Vedic deities of Hinduism."
          link="https://en.wikipedia.org/wiki/Atri"
          linkText="Read More"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Atri.jpg/220px-Atri.jpg"
        />



        {/* <canvas ref={canvasRef} width={canvasSize.current[0] - 10} height={canvasSize.current[1]/1.3} onClick={getCoordinates} className={`border-[2px]`} /> */}

        {/* <div className='saptarishit-container border-[1px] relative w-[80%] h-[30em]'>

      <div className=' absolute top-[3em] right-[11em] flex justify-center items-center rotate-[-176deg]'>
        <div className='h-[8px] w-[8px] bg-[white] rounded-full'></div>
        <div className='h-[2px] w-[13em] bg-[white] rounded-full'></div>
      </div>

      <div className=' absolute top-[4.5em] right-[23.5em] flex justify-center items-center rotate-[-220deg]'>
        <div className='h-[8px] w-[8px] bg-[white] rounded-full'></div>
        <div className='h-[2px] w-[6em] bg-[white] rounded-full'></div>
      </div>

      <div className=' absolute top-[9em] right-[28.5em] flex justify-center items-center rotate-[-214deg]'>
        <div className='h-[8px] w-[8px] bg-[white] rounded-full'></div>
        <div className='h-[2px] w-[8em] bg-[white] rounded-full'></div>
      </div>

      <div className=' absolute top-[11.9em] left-[19.2em] flex justify-center items-center rotate-[-183deg]'>
        <div className='h-[8px] w-[8px] bg-[white] rounded-full'></div>
        <div className='h-[2px] w-[18em] bg-[white] rounded-full'></div>
      </div>

      <div className=' absolute top-[15.9em] right-[32.7em] flex justify-center items-center rotate-[-80deg]'>
        <div className='h-[8px] w-[8px] bg-[white] rounded-full'></div>
        <div className='h-[2px] w-[8.5em] bg-[white] rounded-full'></div>
      </div>

      <div className=' absolute top-[16.7em] left-[15.5em] flex justify-center items-center rotate-[75deg]'>
        <div className='h-[8px] w-[8px] bg-[white] rounded-full'></div>
        <div className='h-[2px] w-[9em] bg-[white] rounded-full'></div>
      </div>

      <div className=' absolute top-[20.8em] left-[21.3em] flex justify-center items-center rotate-[-5.4deg]'>
        <div className='h-[8px] w-[8px] bg-[white] rounded-full'></div>
        <div className='h-[2px] w-[14em] bg-[white] rounded-full'></div>
      </div>

      </div> */}
      </div>
    </>
  );
}

export default Saptrishi;
