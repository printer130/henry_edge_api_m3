// import venta from '../db/venta.json'
import tipo_producto from '../db/tipo_producto.json'
import tipo_gasto from '../db/tipo_gasto.json'
import sucursal from '../db/sucursal.json'
import sector from '../db/sector.json'
import provincia from '../db/provincia.json'
import proveedor from '../db/proveedor.json'
import producto from '../db/producto.json'
import localidad from '../db/localidad.json'
import gasto from '../db/gasto.json'
import empleado from '../db/empleado.json'
import compra from '../db/compra.json'
import cliente from '../db/cliente.json'
import cargo from '../db/cargo.json'
import canal_venta from '../db/canal_venta.json'
import calendario from '../db/calendario.json'
import aux_venta from '../db/aux_venta.json'
import aux_localidad from '../db/aux_localidad.json'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/serve-static'

const app = new Hono()
app.use(cors({
	origin: '*'
}))

app.get('/', ctx => {
	return ctx.json([
		/* 	{
				endpoint: '/venta',
				description: 'Returns venta table.',
			}, */
		{
			endpoint: '/tipo_producto',
			description: 'Returns tipo_producto table.',
		},
		{
			endpoint: '/tipo_gasto',
			description: 'Returns tipo_gasto table.',
		},
		{
			endpoint: '/sucursal',
			description: 'Returns sucursal table.',
		},
		{
			endpoint: '/sector',
			description: 'Returns sector table.',
		},
		{
			endpoint: '/provincia',
			description: 'Returns provincia table.',
		},
		{
			endpoint: '/proveedor',
			description: 'Returns proveedor table.',
		},
		{
			endpoint: '/producto',
			description: 'Returns producto table.',
		},
		{
			endpoint: '/localidad',
			description: 'Returns localidad table.',
		},
		{
			endpoint: '/gasto',
			description: 'Returns gasto table.',
		},
		{
			endpoint: '/empleado',
			description: 'Returns empleado table.',
		},
		{
			endpoint: '/compra',
			description: 'Returns compra table.',
		},
		{
			endpoint: '/cliente',
			description: 'Returns cliente table.',
		},
		{
			endpoint: '/cargo',
			description: 'Returns cargo table.',
		},
		{
			endpoint: '/canal_venta',
			description: 'Returns canal_venta table.',
		},
		{
			endpoint: '/calendario',
			description: 'Returns calendario table.',
		},
		{
			endpoint: '/aux_venta',
			description: 'Returns aux_venta table.',
		},
		{
			endpoint: '/aux_localidad',
			description: 'Returns aux_localidad table.',
		}
	])
})

//app.get('/venta', ctx => ctx.json(venta))

app.get('/tipo_producto', ctx => ctx.json(tipo_producto))

app.get('/tipo_gasto', ctx => ctx.json(tipo_gasto))

app.get('/sucursal', ctx => ctx.json(sucursal))

app.get('/sector', ctx => ctx.json(sector))

app.get('/provincia', ctx => ctx.json(provincia))

app.get('/proveedor', ctx => ctx.json(proveedor))

app.get('/producto', ctx => ctx.json(producto))

app.get('/localidad', ctx => ctx.json(localidad))

app.get('/gasto', ctx => ctx.json(gasto))

app.get('/compra', ctx => ctx.json(compra))

app.get('/empleado', ctx => ctx.json(empleado))

app.get('/cliente', ctx => ctx.json(cliente))

app.get('/cargo', ctx => ctx.json(cargo))

app.get('/canal_venta', ctx => ctx.json(canal_venta))

app.get('/calendario', ctx => ctx.json(calendario))

app.get('/aux_venta', ctx => ctx.json(aux_venta))

app.get('/aux_localidad', ctx => ctx.json(aux_localidad))


app.get('/static/*', serveStatic({
	root: './'
}))

export default app