
import PropTypes from 'prop-types'
const Posts = ({posts}) => {
    return (
        <div className='mt-16  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            posts.map(post => (
                <div key={post._id} className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                {/*  <!--  Image --> */}
                <figure>
                  <img
                    src={post?.image}
                    alt="card image"
                    className="aspect-video w-full"
                  />
                </figure>
                {/*  <!-- Body--> */}
                <div className="p-6 bg-base-200">
                  <header className="">
                   
                    <p className="text-lg text-slate-700">{post.details}</p>
                  </header>
                </div>
              </div>
            ))
          }
        </div>
    );
};

Posts.propTypes = {
    posts: PropTypes.object
}

export default Posts;