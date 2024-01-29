import {Link} from 'react-router-dom';


function PopoverCard(props) {

  const {title, description, link, img, topVal, leftVal } = props;

  return (
    <div className={`w-[20%] flex flex-col absolute ${topVal} ${leftVal} bg-white border shadow-sm rounded-xl transition-all duration-500 `}>
      <img
        className="w-full h-auto rounded-t-xl"
        src={img}
        alt="Image Description"
      />
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800">
          {title}
        </h3>
        <p className="mt-1 text-gray-500">
          {description}
        </p>
        <Link
          className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          to={link}
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default PopoverCard;
