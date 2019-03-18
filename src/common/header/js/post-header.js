import React, { Component } from 'react';
import '../css/post.scss'

class PostHeader extends Component{
    render() {
        return (
            <div>
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
            </div>
        )
    }
}

export default PostHeader;