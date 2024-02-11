import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function insertCode(password: string, email: string, firstName: string, lastName: string) {
//     const res = await prisma.user.create({
//         data: {
//             password: password,
//             email: email,
//             firstName: firstName,
//             lastName: lastName
//         },
//         // select: {
//         //     id: true,
//         //     email: true,
//         //     firstName: true,
//         //     lastName: true
//         // }
//     })
//     console.log(res);
// }

// insertCode('kiran123', 'kiranb@.com', 'kiran', 'busari');

// async function getUser(email:string) {
//     const res = await prisma.user.findFirst({
//         where: {
//             email: email
//         }
//     })
//     console.log(res);
// }

// getUser('kiran@kuamr.com');



// How to avoid arenous increment of id and make it unique




// // Update a user
// interface UpdateParams {
//     firstName: string;
//     lastName: string;
// }

// async function updateUser(email: string, {
//     firstName,
//     lastName
// }: UpdateParams) {
//     const res = await prisma.user.update({
//         where: {
//             email: email
//         },
//         data: {
//             firstName,
//             lastName
//         }
//     })
//     console.log(res);
// }

// updateUser("kiranb@.com", {
//     firstName: "Busari",
//     lastName: "kiran"
// })


async function deleteUser(email: string) {
    const res = await prisma.user.delete({
        where: {
            email: email
        }
    })
    console.log(res);    
}

deleteUser("kiran@k.com")