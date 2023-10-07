async function getUser(id){
  const user = await (await fetch(`https://reqres.in/api/users/${id}`)).json()
  return user.data;
}

async function UserPage({params}){
  const user = await getUser(params.id);

  return (
    <div className="bg-slate-400 p-5 rounded-md ">
      <img className="m-auto rounded-full my-4" src={user.avatar} alt={"img de usuario: "+ user.id} />
      <h3 className="text-center text-2xl font-bold">{user.id} {user.first_name} {user.last_name}</h3>
      <p className="text-center">{user.email}</p>
    </div>
  )
}

export default UserPage;