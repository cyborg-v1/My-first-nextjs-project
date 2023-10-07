"use client";

import Link from "next/link";

function Users({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <Link key={user.id} href={`/users/${user.id}`}>
          <li className="bg-slate-500 mb-2 p-4 rounded-md text-black flex justify-between hover:bg-slate-600">
            <div>
              <h5 className="font-bold">
                {user.id} {user.first_name} {user.last_name}
              </h5>
              <p className="text-slate-100">email: {user.email}</p>
            </div>
            <img
              className="rounded-full w-20"
              src={user.avatar}
              alt={"img de: " + user.last_name}
            />
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Users;
