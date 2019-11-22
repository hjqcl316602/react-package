/**
 * created by 41587 on 2019/11/21
 */
import asyncRoute from './async';
const NotFound = asyncRoute(()=>{ return import('../view/not-found')});
const Login = asyncRoute(()=>{ return import('../view/login')});
const Home = asyncRoute(()=>{ return import('../view/home')});
export const App = asyncRoute(()=>{ return import('../view/app')});


export default [
    { path: "/", redirect:'/home' },
    { path: "/not-found", name: "NotFound", component: NotFound ,title :'反馈' },
    { path: "/login", name: "Login", component: Login ,title :'登录'},
    { path: "/home", name: "Home", component: Home  ,title :'首页' , auth : true }
]
