import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/serve-static'
import ventaTable from '../db/venta.json'

const app = new Hono()
app.use(cors({
	origin: '*'
}))

app.get('/', ctx => {
	return ctx.json([
		{
			endpoint: '/venta',
			description: 'Returns the venta table.',
			/* 	parameters: [
					{
						name: 'team',
						endpoint: '/leaderboard/:teamId',
						description: 'Return the Kings League leaderboard information for a team by his id'
					}
				] */
		}
	])
})

app.get('/venta', ctx => ctx.json(ventaTable))

app.get('/static/*', serveStatic({
	root: './'
}))

export default app