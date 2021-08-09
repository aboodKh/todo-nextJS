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
	}
	return res.status(405).json({message: "method not allowed"});
}
