import axios from 'axios'

async function getUserData() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const res = await axios.get("http://localhost:3000/api/user")
  // console.log(res.data);
  return res.data
}
// async compoment
export default async function Home() {
  const userData = await getUserData();
  // console.log(userData);
  return (
    <>
      <div className="text-white flex flex-col h-screen justify-center items-center">
        <div className="flex justify-center">
          <div className="border p-8 rounded">
            Hi There
            <div className="text-3xl">
              {userData?.name}
            </div>
            <div className="">
              {userData?.email}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
