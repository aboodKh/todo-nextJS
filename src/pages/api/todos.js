import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export default async function handle(req, res) {
	if (req.method == "POST") {
		const todo = JSON.parse(req.body);
		const savedTodo = await prisma.todo.create({
			data: todo,
		});
		return res.json(savedTodo);
	} else if (req.method == "GET") {
		const todos = await prisma.todo.findMany();
		return res.json(todos);
	} else if (req.method == "DELETE") {
		const todo = JSON.parse(req.body);
		console.log(todo);
		const deletedTodo = await prisma.todo.delete({
			where: {
				id: todo.id,
			},
		});
		return res.json(deletedTodo);
	} else if (req.method == "PUT") {
		const todo = JSON.parse(req.body);
		console.log(todo);
		const updatedTodo = await prisma.todo.update({
			where: {
				id: todo.id,
			},
			data: {
				title: todo.title,
				description: todo.description,
			},
		});
		return res.json(updatedTodo);
	}

	return res.status(405).json({message: "method not allowed"});
}
