import React, { Component } from 'react';

class PostInfo extends Component{

    render() {
        return (
            <div className={'post-info'}>
                <section className={'post-button'}>
                    <span className={'iconfont'} style={{marginLeft: '0'}}>&#xe64b;</span>
                    <label htmlFor="comment-input"><span className={'iconfont'}>&#xe841;</span></label>

                    <span className={'iconfont'}>&#xe605;</span>
                    <span className={'iconfont'} style={{float: 'right'}}>&#xe60e;</span>
                </section>
                <section className={'post-likes'}><a><strong>1112321</strong>次赞</a></section>
                <div className={'comment-list'}>
                    <ul>
                        <li><strong>用户名</strong> 评论内容</li>
                        <li><strong>用户名</strong> 评论内容</li>
                        <li><strong>用户名</strong> 评论内容</li>
                        <li><strong>用户名</strong> 评论内容</li>
                    </ul>
                </div>
                <div className={'post-date'}>
                    <time>1天前</time>
                </div>
                <section className={'post-comment'}>
                    <form>
                        <textarea id={'comment-input'} placeholder="添加评论..."></textarea>
                    </form>
                </section>
            </div>
        );
    }

}

export default PostInfo;