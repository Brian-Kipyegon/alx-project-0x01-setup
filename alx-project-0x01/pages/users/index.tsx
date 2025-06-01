import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

const Users = ({ posts }: { posts: UserProps[] }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4 grid grid-cols-3 gap-2">
        {posts.map((user, index) => (
          <UserCard key={index} {...user} />
        ))}
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();
  return { props: { posts } };
}

export default Users;
