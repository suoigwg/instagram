import React, { Component } from 'react';
import '../css/post.scss'

class PostHeader extends Component{
    render() {
        return (
            <div>
                <header className={'post-header'}>
                    <div>
                        <a className={'user-pic-wrapper'}><img src={this.props.icon}/></a>
                    </div>
                    <div className={'post-user-info'}>
                        <div>
                            <strong>{this.props.username}</strong>
                        </div>
                        <div >
                            <a className={'post-user-desc'}>{this.props.location}</a>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default PostHeader;