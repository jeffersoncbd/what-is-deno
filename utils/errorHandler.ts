import { Middleware } from 'https://deno.land/x/oak/mod.ts'

const errorHandler: Middleware = async ({ response }, nextFn) => {
	try {
		await nextFn();
	} catch (err) {
		response.status = 500;
		response.body = { msg: err.message };
	}
}

export default errorHandler
