import React, { Component } from 'react';
import '../css/post.scss'
import PostInfo from './post-info';
import PostHeader from './post-header';

class Post extends Component{
    render() {
        return (

                <article className={'wrapper'}>
                    <PostHeader/>
                    <div className={'post-img'}>
                        <a><img src={'https://scontent-hkg3-1.cdninstagram.com/vp/d14a768dcc987cf833e359dbc301665d/5D094692/t51.2885-15/e35/53343735_361727848005434_4374964319129216193_n.jpg?_nc_ht=scontent-hkg3-1.cdninstagram.com'}/></a>
                    </div>
                    <PostInfo/>
                </article>
        )
    }
}

export default Post;