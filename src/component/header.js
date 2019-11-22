/**
 * created by 41587 on 2019/11/21
 * name 无状态组件
 */


import React from 'react'; // 这个是必须引入的

export default function Header({ name }){
    return (
        <div>
            <span>{ name }</span>
        </div>
    )
}
