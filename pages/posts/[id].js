export default function Details(props) {
    return (
      <div className="numposts">
        
       
        <h2 className="t_post">{props.post.title} </h2>
        <p className="b_post">{props.post.body} </p>
       
      </div>
    )
}
export async function getStaticPaths(){
  const res =await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const data =await res.json();
  const paths= data.map(d=>{ //d-->معناها كل بوست علي حد 
    return{
      params:{id:`${d.id}`}
    }
  })
  return {
    paths: paths,
     
    fallback: false, // can also be true or 'blocking'
  }
}
// getstaticpath() هنا لو عايزه استخدم الميثود دي لازم استخدم معاها الميثود 
export async function getStaticProps(context) {
    const res=fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const data =await (await res).json()
    return {
      props: {
        post:data
      },
    }
  }

// بعمل دي لوحدها كداا عادي تمام
// export async function getServerSideProps(context) {
//   const res=fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//   const data =await (await res).json()
//   return {
//     props: {
//       post:data
//     }, // will be passed to the page component as props
//   }
// }