import { link } from "fs"

async function getNotes() {
    const db = new PocketBase (' http://127.0.0.1:8090')
    const data = await db.records.getList('users');
   // const res=await fetch('http://127.0.0.1:8090/api/collection/users/records?page=1&perpage=30',{cache:'no-store'})//fetch api that receives data in std form from th backend
  //  const data= await res.json()//covert data into json
    return data?.items as any[]  //array
}

//export default react component server components data fetching.
export default async function Notespage(){
    const notes=await getNotes()
    return(
        <div>
            <h1>users</h1>
            <div>
                 {users?.map((user)=>{
                    return <Note key={user.id} user={user} />;
                 })}
          </div>  
        </div>
    )}
return User({user}):any){
    const{id,title,content,created}=user || {}

return(
 <link href={'/uerss/${id}'}>
 <div>
<h2>{title}</h2>
<h5>{content}</h5>
<p>{created}</p>
 </div>
 </link>
)
}