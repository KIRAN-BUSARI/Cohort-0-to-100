import z from "zod";

const createTodo = z.object({
    title: z.string(),
    description: z.string(),
})

const updateTodo = {
    id: z.string(),
}

export {
    createTodo,
    updateTodo
}