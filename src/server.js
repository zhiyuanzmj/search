const createApp=require('./app')

const Koa=require('koa')
const server=new Koa()
const renderer=require('vue-server-renderer').createRenderer()

server.use(async ctx=>{
    const app=createApp({url:ctx.url})
    renderer.renderToString(app).then(html=>{
        ctx.body=html
    }).catch(err=>{
        throw err
    })
})
server.listen(3000)