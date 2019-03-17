import React, { Component } from 'react';
import '../css/post.scss'
class Post extends Component{
    render() {
        return (

                <article className={'wrapper'}>
                    <header className={'post-header'}>
                        <div>
                            <a className={'user-pic-wrapper'}><img src={'https://scontent-hkg3-1.cdninstagram.com/vp/6ba6b51497cc29003dc9dd3145c9a184/5D29E55B/t51.2885-19/s150x150/14719833_310540259320655_1605122788543168512_a.jpg?_nc_ht=scontent-hkg3-1.cdninstagram.com'}/></a>
                        </div>
                        <div className={'post-user-info'}>
                            <div>
                                <h2>instagram</h2>
                            </div>
                            <div >
                                <a className={'post-user-desc'}>W A V E 波 - Asian Bistro & Sushi</a>
                            </div>
                        </div>
                    </header>
                    <div className={'post-img'}>
                        <a><img src={'https://scontent-hkg3-1.cdninstagram.com/vp/d14a768dcc987cf833e359dbc301665d/5D094692/t51.2885-15/e35/53343735_361727848005434_4374964319129216193_n.jpg?_nc_ht=scontent-hkg3-1.cdninstagram.com'}/></a>
                    </div>
                    <div className={'post-info'}>
                        <section className={'post-button'}>
                            <span className={'iconfont'}>&#xe64b;</span>
                            <span className={'iconfont'}>&#xe841;</span>
                            <span className={'iconfont'}>&#xe605;</span>
                            <span className={'iconfont'}>&#xe60e;</span>
                        </section>
                        <section className={'post-likes'}><a><span>1112321</span>次赞</a></section>
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
                                <textarea placeholder="添加评论..."></textarea>
                            </form>
                        </section>
                    </div>
                </article>


        )
    }
}

export default Post;