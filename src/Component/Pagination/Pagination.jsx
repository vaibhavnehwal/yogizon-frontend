

function Pagination(props) {

  const totalCards = props.totalCards;
  const cardsPerPage = props.cardsPerPage;
  const currentPage = props.currentPage;
  const setCurrentPage = props.setCurrentPage;

  let pages = [];
  for (let i = 1; i <= Math.ceil(totalCards/cardsPerPage); i++) {
    pages.push(i);
  }

  const previousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    else {
      return;
    }
  }

  const nextClick = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
    else {
      return;
    }
  }



  return (
    <div className="my-5">
      <nav className="flex justify-between items-center gap-x-1">
        <button
          onClick={previousClick}
          type="button"
          className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          {...(currentPage === 1 ? {disabled: true} : {}) }
        >
          <svg
            className="flex-shrink-0 w-3.5 h-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span aria-hidden="true" className="hidden sm:block">
            Previous
          </span>
        </button>
        <div className="flex items-center gap-x-1">
          {pages.map((page) => {
            return (
              <button 
                onClick={() => setCurrentPage(page)}
                key={page}
                type="button"
                className={`min-h-[38px] min-w-[38px] flex justify-center items-center ${(currentPage === page ? "bg-gray-200" : "border")} text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none`}
                >
                  {page}
              </button>
            );
          })}
        </div>
        <button
          onClick={nextClick}
          type="button"
          className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          {...(currentPage === pages.length ? {disabled: true} : {}) }
        >
          <span aria-hidden="true" className="hidden sm:block">
            Next
          </span>
          <svg
            className="flex-shrink-0 w-3.5 h-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </nav>
    </div>
  );
}

export default Pagination;
