import PropTypes from 'prop-types';
import BlogPost from './BlogPosts';

const Blog = () => {
  return (
    <section id='blog' className=''>
      <div className="text-center -mt-28 mb-6">
          <h1 className="text-3xl font-bold mb-2">Important Articles</h1>
          <div className="flex justify-center">
            <hr className="w-28 border-t-2 border-[#E93740] bg-[#E93740]" />
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-4 cursor-pointer">
        <div className="w-full lg:w-2/3 order-2 lg:order-1">
          <article className="p-4 bg-white shadow-md rounded-lg h-full">
          <div>
            <img
              src={BlogPost[0].image}
              alt={BlogPost[0].title}
              className="w-full h-64 lg:h-full object-cover rounded-t-lg transform transition-transform hover:scale-105 hover:shadow-xl"
            />
              </div>
              <div className="mt-4">
                <p className="text-sm text-[#E93740]">{BlogPost[0].date}</p>
                <h1 className="text-2xl font-bold text-black">{BlogPost[0].title}</h1>
                <p className="text-gray-500 mt-2">{BlogPost[0].content}</p>
              </div>
            </article>
          </div>

          <div className="flex flex-col w-full lg:w-1/3 order-1 lg:order-2 gap-4">
            {BlogPost.slice(1).map((blog) => (
              <article key={blog.id} className="flex p-4 bg-white shadow-md rounded-lg">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-lg mr-4 transform transition-transform hover:scale-105 hover:shadow-xl"
                />
                <div>
                  <p className="text-sm text-[#e93740]">{blog.date}</p>
                  <h1 className="text-lg font-bold text-black">{blog.title}</h1>
                  <p className="text-gray-500">{blog.content}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
    </section>
  );
};

Blog.propTypes = {
  blog: PropTypes.shape({
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Blog;
