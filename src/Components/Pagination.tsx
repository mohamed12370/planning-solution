import ReactPaginate from 'react-paginate';

export default function PaginationApp({ pageCount, onPress }: any) {
  const handlePageClick = ({ selected }: { selected: number }) => {
    console.log(selected + 1);
    onPress(selected + 1);
  };
  return (
    <ReactPaginate
      className="pagination"
      nextLabel=">"
      marginPagesDisplayed={1}
      pageRangeDisplayed={1}
      onPageChange={handlePageClick}
      pageCount={pageCount || 10}
      previousLabel="<"
      previousClassName={'page-item'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-item'}
    />
  );
}
