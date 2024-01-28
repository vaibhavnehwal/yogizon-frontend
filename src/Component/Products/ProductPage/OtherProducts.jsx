import {useState} from "react";
import ProductCards from "../../Cards/ProductCards";
import Pagination from "../../Pagination/Pagination";
import courses from "../ProductData";
import { useParams } from 'react-router-dom'

function OtherProducts() {
    const [currentPage, setCurrentPage] = useState(1);
    const [coursesPerPage, setCoursesPerPage] = useState(3);

    const params = useParams();


    const coursesList = courses.map((course) => {
        return (
            <ProductCards 
                key={course.id}
                title={course.title}
                badgeDesc={course.badgeDesc}
                image={course.image}
                description={course.description}
                price={course.price}
                id={course.id}
                linkDesc={course.linkDesc}
                duration={course.duration}
            />
        )
    }
    )

    const lastCourseIndex = currentPage * coursesPerPage;
    const firstCourseIndex = lastCourseIndex - coursesPerPage;
    const currentCourses = coursesList.slice(firstCourseIndex, lastCourseIndex);


  return (
    <div className="flex flex-col justify-center items-center my-16 mx-7 bg-gray-100 border rounded-xl">
      <div className="flex flex-col justify-center item-center gap-[2rem] w-full text-center py-3 px-4 md:py-4 md:px-5">
        <h1 className="text-4xl font-bold text-gray-800">Other Courses</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </p>
      </div>
      <div className="bg-white shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-[5rem] items-center p-4 md:p-5">
            {currentCourses}
        </div>
      </div>
      <div>
        <Pagination totalCards={coursesList.length} cardsPerPage={coursesPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
    </div>
  );
}

export default OtherProducts