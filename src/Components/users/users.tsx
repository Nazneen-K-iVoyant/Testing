// import { useEffect, useState } from "react"

// export const Users=()=>{
//     const [users,setUsers]=useState<String[]>([])
//     const [error,setError]=useState<string|null>(null)

//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then((res)=>res.json())
//         .then((data)=>setUsers(data.map((user:{name:String})=>user.name)))
//         .catch(()=>setError("Error fetchinh users"))
//     },[])

//     return (
//         <div>
//             <h2>Users</h2>
//             {error && <p>{error}</p> }
//             <ul>
//                 {users.map((user)=>(
//                     <li key={user} >{user}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }



import { useEffect, useState } from "react";

export const Users = () => {
    const [users, setUsers] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUsers(data.map((user: { name: string }) => user.name)))
            .catch(() => setError("Error fetching users"));
    }, []);

    return (
        <div>
            <h2>Users</h2>
            {error && <p>{error}</p>}
            <ul>
                {users.map((user, index) => ( // Added 'index' parameter
                    <li key={index}>{user}</li> // Using 'index' as the key
                ))}
            </ul>
        </div>
    );
};
