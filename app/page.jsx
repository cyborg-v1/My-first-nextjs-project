import Users from "@/components/Users";


async function fetchUsers() {
  const data = await (await fetch("https://reqres.in/api/users")).json();
  return data.data;
}

async function HomePage() {
  const users = await fetchUsers();
  return (
    <>
      <Users users={users}></Users>
    </>
  );
}

export default HomePage;
