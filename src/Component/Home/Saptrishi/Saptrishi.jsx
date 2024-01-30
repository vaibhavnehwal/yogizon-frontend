import React, { useState, useEffect, useRef } from "react";
import PopoverCard from "./PopoverCard";
import SaptarishiSky from "../../../assets/img/Home/stars.jpg";

function Saptrishi() {
  const [circle, setCircle] = useState({
    c1: {
      size: 3,
      data: {
        title: "Atri 1",
        description:
          "Atri is a Vedic sage, who is credited with composing a large number of hymns to Agni, Indra and other Vedic deities of Hinduism.",
        link: "/",
        img: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        topVal: "top-[32%]",
        leftVal: "left-[62%]",
      },
    },
    c2: {
      size: 3,
      data: {
        title: "Atri 2",
        description:
          "Atri is a Vedic sage, who is credited with composing a large number of hymns to Agni, Indra and other Vedic deities of Hinduism.",
        link: "/",
        img: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        topVal: "top-[30%]",
        leftVal: "left-[74%]",
      },
    },
    c3: {
      size: 3,
      data: {
        title: "Atri 3",
        description:
          "Atri is a Vedic sage, who is credited with composing a large number of hymns to Agni, Indra and other Vedic deities of Hinduism.",
        link: "/",
        img: "https://plus.unsplash.com/premium_photo-1661871799134-214136c4cbde?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        topVal: "top-[40%]",
        leftVal: "left-[58%]",
      },
    },
    c4: {
      size: 3,
      data: {
        title: "Ayurveda",
        description:
          "Atri is a Vedic sage, who is credited with composing a large number of hymns to Agni, Indra and other Vedic deities of Hinduism.",
        link: "/",
        img: "https://images.unsplash.com/photo-1627728724901-e79f35800820?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        topVal: "top-[67%]",
        leftVal: "left-[5%]",
      },
    },
    c5: {
      size: 3,
      data: {
        title: "Yoga",
        description:
          "Atri is a Vedic sage, who is credited with composing a large number of hymns to Agni, Indra and other Vedic deities of Hinduism.",
        link: "/",
        img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=3020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        topVal: "top-[22%]",
        leftVal: "left-[12%]",
      },
    },
    c6: {
      size: 3,
      data: {
        title: "Naturopathy",
        description:
          "Atri is a Vedic sage, who is credited with composing a large number of hymns to Agni, Indra and other Vedic deities of Hinduism.",
        link: "/",
        img: "https://images.unsplash.com/photo-1564683214968-fa3d0c31f23c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        topVal: "top-[60%]",
        leftVal: "left-[49%]",
      },
    },
    c7: {
      size: 3,
      data: {
        title: "Gaushala",
        description:
          "Atri is a Vedic sage, who is credited with composing a large number of hymns to Agni, Indra and other Vedic deities of Hinduism.",
        link: "/",
        img: "https://images.unsplash.com/photo-1677408241928-463bbae9cf1b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        topVal: "top-[50%]",
        leftVal: "left-[50%]",
      },
    },
  });

  const [popOver, setPopOver] = useState(null);

  const popOverTimer = () => {
    // setTimeout(() => {
    //   setPopOver(null)
    // }, 10000)
  };

  return (
    <>
      <div className={`flex justify-center flex-col h-screen w-[95%] rounded-lg mx-auto items-center mt-[10em] py-[10em]  relative`}>

        <img src={SaptarishiSky} alt="" className="absolute z-0 w-full h-full object-cover rounded-lg" />

        <h1 className="text-4xl z-[1] text-[#ffb406ba] font-bold tracking-3 ">Features</h1>

        <svg
          width="900"
          height="495"
          viewBox="0 0 339 195"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block text-center drop-shadow-[2px_2px_3px_#ffffff]"
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
            {circle.c1.size === 4 ? (
              <circle cx="254" cy="16" r="8" fill="#ffffff70" />
            ) : null}
            <circle
              cx="254"
              cy="16"
              r={circle.c1.size}
              fill="#D9D9D9"
              onMouseOver={() => {
                setCircle({ ...circle, c1: { ...circle.c1, size: 4 } });
                setPopOver(circle.c1.data);
              }}
              onMouseOut={() => {
                setCircle({ ...circle, c1: { ...circle.c1, size: 3 } });
                popOverTimer();
              }}
              className="cursor-pointer"
            />
          </svg>
          <svg className="">
            {circle.c2.size === 4 ? (
              <circle cx="330" cy="19" r="8" fill="#ffffff70" />
            ) : null}
            <circle
              cx="330"
              cy="19"
              r={circle.c2.size}
              fill="#D9D9D9"
              onMouseOver={() => {
                setCircle({ ...circle, c2: { ...circle.c2, size: 4 } });
                setPopOver(circle.c2.data);
              }}
              onMouseOut={() => {
                setCircle({ ...circle, c2: { ...circle.c2, size: 3 } });
                popOverTimer();
              }}
              className="cursor-pointer"
            />
          </svg>
          <svg className="">
            {circle.c3.size === 4 ? (
              <circle cx="216" cy="53" r="8" fill="#ffffff70" />
            ) : null}
            <circle
              cx="216"
              cy="53"
              r={circle.c3.size}
              fill="#D9D9D9"
              onMouseOver={() => {
                setCircle({ ...circle, c3: { ...circle.c3, size: 4 } });
                setPopOver(circle.c3.data);
              }}
              onMouseOut={() => {
                setCircle({ ...circle, c3: { ...circle.c3, size: 3 } });
                popOverTimer();
              }}
              className="cursor-pointer"
            />
          </svg>
          <svg className="">
            {circle.c4.size === 4 ? (
              <circle cx="39" cy="184" r="8" fill="#ffffff70" />
            ) : null}
            <circle
              cx="39"
              cy="184"
              r={circle.c4.size}
              fill="#D9D9D9"
              onMouseOver={() => {
                setCircle({ ...circle, c4: { ...circle.c4, size: 4 } });
                setPopOver(circle.c4.data);
              }}
              onMouseOut={() => {
                setCircle({ ...circle, c4: { ...circle.c4, size: 3 } });
                popOverTimer();
              }}
              className="cursor-pointer"
            />
          </svg>
          <svg className="">
            {circle.c5.size === 4 ? (
              <circle cx="13" cy="105" r="8" fill="#ffffff70" />
            ) : null}
            <circle
              cx="13"
              cy="105"
              r={circle.c5.size}
              fill="#D9D9D9"
              onMouseOver={() => {
                setCircle({ ...circle, c5: { ...circle.c5, size: 4 } });
                setPopOver(circle.c5.data);
              }}
              onMouseOut={() => {
                setCircle({ ...circle, c5: { ...circle.c5, size: 3 } });
                popOverTimer();
              }}
              className="cursor-pointer"
            />
          </svg>
          <svg className="">
            {circle.c6.size === 4 ? (
              <circle cx="153" cy="165" r="8" fill="#ffffff70" />
            ) : null}
            <circle
              cx="153"
              cy="165"
              r={circle.c6.size}
              fill="#D9D9D9"
              onMouseOver={() => {
                setCircle({ ...circle, c6: { ...circle.c6, size: 4 } });
                setPopOver(circle.c6.data);
              }}
              onMouseOut={() => {
                setCircle({ ...circle, c6: { ...circle.c6, size: 3 } });
                popOverTimer();
              }}
              className="cursor-pointer"
            />
          </svg>
          <svg className="">
            {circle.c7.size === 4 ? (
              <circle cx="158" cy="94" r="8" fill="#ffffff70" />
            ) : null}
            <circle
              cx="158"
              cy="94"
              r={circle.c7.size}
              fill="#D9D9D9"
              onMouseOver={() => {
                setCircle({ ...circle, c7: { ...circle.c7, size: 4 } });
                setPopOver(circle.c7.data);
              }}
              onMouseOut={() => {
                setCircle({ ...circle, c7: { ...circle.c7, size: 3 } });
                popOverTimer();
              }}
              className="cursor-pointer"
            />
          </svg>
        </svg>

        {popOver !== null ? (
          <PopoverCard
            title={popOver.title}
            description={popOver.description}
            link={popOver.link}
            img={popOver.img}
            topVal={popOver.topVal}
            leftVal={popOver.leftVal}
          />
        ) : null}
      </div>
    </>
  );
}

export default Saptrishi;
