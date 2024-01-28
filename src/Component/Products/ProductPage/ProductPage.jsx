import React from "react";
import { useParams } from "react-router-dom";
import ReacHtmlParser from "react-html-parser";
import courses from "../ProductData";
import { Link } from "react-router-dom";
import TopView from "./TopView";
import Tabs from "./Tabs";
import MediaAvatar from "../../Avatar/MediaAvatar";
import ViewCard from "../../Cards/ViewCard";
import ProductReviews from "../../Reviews/ProductReviews";
import OtherProducts from "./OtherProducts";
import ProductQuery from "./ProductQuery";

const ProductPage = () => {
  const { productID } = useParams();
  const product = courses[productID];

  const tab = [
    {
      tabTitle1: "Overview",
      tabTitle2: "Curriculum",
      tabTitle3: "Instructor",
      tabContent1:
        "<div style='margin: auto; padding: 8px; max-width: 800px;'><div style='margin-bottom: 8px;'><h2 style='font-size: 1.5rem; font-weight: bold; margin-bottom: 4px;'>UNIT 1: Introduction to Yoga and Yogic Practices</h2></div><ul style='list-style-type: disc; padding-left: 1rem;'><li>Yoga : Etymology, definitions, aim, objectives and misconceptions.</li><li>Yoga : Its origin, history and development.</li><li>Guiding principles to be followed by Yoga practitioners.</li><li>Principles of Yoga (Triguna, Antahkarana-chatustaya, Tri-Sharira/ Panchakosha).</li><li>Introduction to major schools of Yoga (Jnana, Bhakti, Karma, Patanjali, Hatha).</li><li>Introduction to Yoga practices for health and well being.</li><li>Introduction to Shatkarma: meaning, purpose and their significance in Yoga Sadhana.</li><li>Introduction to Yogic Sukshma Vyayama, Sthula Vyayama and Surya Namaskara.</li><li>Introduction to Yogasana: meaning, principles, and their health benefits.</li><li>Introduction to Pranayama and Dhyana and their health benefits.</li></ul> <div style='margin-bottom: 8px;'><h2 style='font-size: 1.5rem; font-weight: bold; margin-bottom: 4px;'>UNIT 2: Introduction to Yoga Texts</h2></div><ul style='list-style-type: disc; padding-left: 1rem;'><li>Introduction and study of Patanjala Yoga Sutra including memorization of selected Sutras (Chapter I- 1-12).</li><li>Introduction and study of Bhagavad Gita including memorization of selected Slokas (Chapter II -47, 48, 49, 50 and 70).</li><li>Introduction and study of Hathpradipika.</li><li>General Introduction to Prasthanatrayee.</li><li>Concepts and principles of Aahara (Diet) in Hathapradipika and Bhagawadgita (Mitahara and Yuktahara).</li><li>Significance of Hatha Yoga practices in health and well-being.</li><li>Concept of mental well-being according to Patanjala Yoga.</li><li>Yogic practices of Patanjala Yoga: Bahiranga and Antaranga Yoga.</li><li>Concepts of healthy living in Bhagwad Gita.</li><li>Importance of subjective experience in daily Yoga practice.</li></ul><div style='margin-bottom: 8px;'><h2 style='font-size: 1.5rem; font-weight: bold; margin-bottom: 4px;'>UNIT 3: Yoga for Health Promotion</h2></div><div style='margin-bottom: 8px;'></div></div>",
      tabContent2:
        "<div style='margin: auto; padding: 8px; max-width: 800px;'><div style='margin-bottom: 8px;'><h2 style='font-size: 1.5rem; font-weight: bold; margin-bottom: 4px;'>Yoga Practical</h2><ol style='list-style-type: decimal; padding-left: 1rem;'><li><strong>Prayer</strong><ul style='list-style-type: disc; padding-left: 1rem;'><li>Concept and Recitation of Pranava</li><li>Concept and Recitation of Hymns</li></ul></li></ol></div><div style='margin-bottom: 8px;'><h2 style='font-size: 1.5rem; font-weight: bold; margin-bottom: 4px;'>Preparatory Breathing Practices</h2></div><div style='margin-bottom: 8px;'><h2 style='font-size: 1.5rem; font-weight: bold; margin-bottom: 4px;'>Pranayama</h2></div><div style='margin-bottom: 8px;'><h2 style='font-size: 1.5rem; font-weight: bold; margin-bottom: 4px;'>Teaching Skills (Methods of Teaching Yoga)</h2></div></div>",
      tabContent3: "This is the third tab content",
    },
  ];

  return (
    <div className="min-h-screen my-[8rem] flex flex-col justify-center items-center">
      {/* <section className='flex'>
        <div className='flex flex-col justify-center items-start w-[50%] p-[3em] bg-[#f3e7ce]'>
          <h1 className='text-[40px] text-[black]  font-bold mt-[1em]'>{product.title}</h1>
          <div className='flex justify-evenly items-center my-[40px]'>
            <span className='flex justify-around items-center mx-[15px]'>
              <span className=''><strike>₹200.00</strike> <b>{product.price}</b></span>
            </span>
            <span className='flex justify-around items-center mx-[15px]'>
              <span className=''>30 Days</span>
            </span>
            <span className='flex justify-around items-center  mx-[15px]'>
              <span className=''>{product.badgeDesc}</span>
            </span>
          </div>
          <Link
              to="#"
              className="mt-2 py-3 px-7 inline-flex justify-center items-center gap-x-2 text-[18px] font-semibold rounded-lg border border-transparent bg-[#ffb606] text-white hover:bg-[#ffb606]700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-"
              href="#"
            >
              Buy Now
            </Link>
        </div>
        <img src={product.image} className='w-[50%]' alt={product.title} />
      </section> */}

      <div>
        <TopView
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
          badgeDesc={product.badgeDesc}
          duration={product.duration}
        />
      </div>

      <div className="mt-[5rem] px-7 flex justify-center md:flex-row flex-col w-full">
        <Tabs
          tabTitle1={tab[0].tabTitle1}
          tabTitle2={tab[0].tabTitle2}
          tabTitle3={tab[0].tabTitle3}
          tabContent1={ReacHtmlParser(tab[0].tabContent1)}
          tabContent2={ReacHtmlParser(tab[0].tabContent2)}
          tabContent3={
            <div className="py-8">
              <MediaAvatar />
            </div>
          }
        />

        <div className="">
          <ViewCard
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
            badgeDesc={product.badgeDesc}
            duration={product.duration}
          />
        </div>
      </div>
      <div className="my-4">
        <ProductReviews />
      </div>
      <div>
        <OtherProducts />
      </div>
      <div>
        <ProductQuery />
      </div>
    </div>
  );
};

export default ProductPage;
