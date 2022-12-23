const Post = ({ post }) => {
  return (
    <>
    <h1>Get static paths method</h1>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
};

export default Post;

export const getStaticPaths = async() => {
  const response = await fetch(
'https://jsonplaceholder.typicode.com/posts'
  );
  const data = await response.json();
  // console.log(data);
  const paths = data.map((post) => {
    return {
        params : {
            postId : `${post.id}`
        }
        
    }
  })
  // console.log(paths);
  return {
    // paths : [
//       {
//         params : {postId : '1'},
//     },
//     {
//       params : {postId : '2'},
//   },
//   {
//     params : {postId : '3'},
// },

//     ],
    paths,
    fallback: false,
  };
}

export const getStaticProps = async (context) => {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  // console.log(data);

  return {
    props: {
      post: data
    },
  };
}
