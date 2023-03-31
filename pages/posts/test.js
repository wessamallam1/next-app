import { useState, useEffect } from 'react'

function Profile() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/profile-data')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div>
       
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  )
}
export default Profile


// ******************************Building Forms**************************
// export default function Form() {
//     return (
//       <form action="/api/form" method="post">
//         <label htmlFor="first">First Name</label>
//         <input type="text" id="first" name="first" required />
  
//         <label htmlFor="last">Last Name</label>
//         <input type="text" id="last" name="last" required />
  
//         <button type="submit">Submit</button>
//       </form>
//     )
//   }

// The below can be used in a Jest global setup file or similar for your testing set-up

// *********************************Shallow Routing****************************************
// import { useEffect } from 'react'
// import { useRouter } from 'next/router'

// // Current URL is '/'
// function Page() {
//   const router = useRouter()

//   useEffect(() => {
//     // Always do navigations after the first render
//     router.push('/?counter=10', undefined, { shallow: true })
//   }, [])

//   useEffect(() => {
//     // The counter changed!
//   }, [router.query.counter])
// }

// export default Page

// ***************authentication ****************
// import useUser from '../lib/useUser'
// import Layout from "../../components/Layout"

// const Profile = () => {
//   // Fetch the user client-side
//   const { user } = useUser({ redirectTo: '/login' })

//   // Server-render loading state
//   if (!user || user.isLoggedIn === false) {
//     return <Layout>Loading...</Layout>
//   }

//   // Once the user request finishes, show the user
//   return (
//     <Layout>
//       <h1>Your Profile</h1>
//       <pre>{JSON.stringify(user, null, 2)}</pre>
//     </Layout>
//   )
// }

// export default Profile