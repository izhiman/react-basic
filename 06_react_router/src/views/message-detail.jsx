import React from 'react'

const allMessage = [
    {id: 1, title: 'message01', content: '我爱你1'},
    {id: 3, title: 'message03', content: '我爱你3'},
    {id: 5, title: 'message05', content: '我爱你5'}
];

export default function MessageDetail(props) {
    const {id} = props.match.params;
    // 数组遍历找相等
    const msg = allMessage.find(m => m.id === parseInt(id));
    return (
        <div>
            <ul>
                <li>id :{msg.id}</li>
                <li>title :{msg.title}</li>
                <li>content:{msg.content}</li>
            </ul>
        </div>
    );
}
