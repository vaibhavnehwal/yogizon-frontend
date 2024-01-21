import {useState} from "react";
import ProductCards from "../Cards/ProductCards";
import Pagination from "../Pagination/Pagination";
import courses from "./ProductData";

function Products() {

    

    const [currentPage, setCurrentPage] = useState(1);
    const [coursesPerPage, setCoursesPerPage] = useState(6);

    const coursesList = courses.map((course) => {
        return (
            <ProductCards 
                key={course.id}
                id={course.id}
                title={course.title}
                badgeDesc={course.badgeDesc}
                image={course.image}
                description={course.description}
                price={course.price}
                link={course.link}
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
    <div className="flex flex-col justify-center items-center min-h-screen my-16">
      <div className="flex flex-col justify-center item-center gap-[2rem] my-[3rem] text-center">
        <h1 className="text-4xl font-bold text-gray-800">Courses</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-[5rem] items-center">
        {currentCourses}
      </div>
      <div>
        <Pagination totalCards={coursesList.length} cardsPerPage={coursesPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
    </div>
  );
}

export default Products;
