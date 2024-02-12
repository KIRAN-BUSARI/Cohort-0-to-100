"use client"
import axios from "axios";
// export const Button = () => {
//     return <button onClick={() => {
//         console.log("hi")
//     }} type="button" className="mt-8 w-36 text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign in</button>
// }
export const Button = () => {

    <button onClick={async () => {
        const response = await axios.post("http://localhost:3000/api/user", {
            username,
            password
        });

    }} type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" > Sign in</button >
}