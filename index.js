const Koa = require('koa')
const app = new Koa()

let testFun = () => {
  console.log(this)
}

app.use(async (ctx, next) => {
  await testFun()
  await next()
  ctx.response.type = 'text/html'
  ctx.response.body = '<h2>Hello Koa2 World!!!</h2>'
})

app.listen(3000, ()=>{
  console.log('Server is already!!!')
})