import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const BlogPagination = () => {
  const [posts, setPosts] = useState([]);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
      setPageCount(Math.ceil(data.length / itemsPerPage));
      setCurrentPageData(data.slice(0, itemsPerPage));
    };

    fetchPosts();
  }, []);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * itemsPerPage;
    const newPageData = posts.slice(offset, offset + itemsPerPage);
    setCurrentPageData(newPageData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navbar */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <img
                  src="/icon/blog.svg"
                  alt=""
                  className="w-6 h-6 text-blue-600"
                />
              </div>
              <h1 className="ml-3 text-xl font-bold text-gray-800">
                Blog Post Pagination
              </h1>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Paginated Posts
          </h1>
          <p className="text-lg text-gray-600">
            Browse through our collection of blog posts
          </p>
        </div>

        {/* Posts Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-600 to-indigo-400">
              <tr>
                <th className="text-left px-6 py-4 text-white font-semibold text-sm uppercase tracking-wider">
                  ID
                </th>
                <th className="text-left px-6 py-4 text-white font-semibold text-sm uppercase tracking-wider">
                  Title
                </th>
                <th className="text-left px-6 py-4 text-white font-semibold text-sm uppercase tracking-wider">
                  Content
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {currentPageData.map((post, index) => (
                <tr 
                  key={post.id} 
                  className={`hover:bg-blue-50 transition-colors duration-200 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
                  }`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                      {post.id}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900 max-w-xs truncate">
                      {post.title}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600 max-w-md truncate">
                      {post.body}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center">
          <ReactPaginate
            previousLabel={
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </div>
            }
            nextLabel={
              <div className="flex items-center">
                Next
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            }
            breakLabel="..."
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName="flex items-center space-x-2"
            pageClassName="flex items-center justify-center"
            pageLinkClassName="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200"
            previousClassName="flex items-center"
            previousLinkClassName="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 flex items-center"
            nextClassName="flex items-center"
            nextLinkClassName="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 flex items-center"
            breakClassName="flex items-center justify-center"
            breakLinkClassName="px-4 py-2 text-sm font-medium text-gray-500"
            activeClassName="bg-blue-600 text-white"
            activeLinkClassName="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-lg"
            disabledClassName="opacity-50 cursor-not-allowed"
            disabledLinkClassName="cursor-not-allowed"
          />
        </div>

        {/* Footer Info */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Showing {currentPageData.length} of {posts.length} posts
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPagination;