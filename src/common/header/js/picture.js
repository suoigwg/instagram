import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../css/picture.scss'
import PostInfo from './post-info';
import PostHeader from './post-header';
class Picture extends Component{

    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        };
        this.closeWindow = this.closeWindow.bind(this);
    }


    render() {
        if(!this.state.visible) return (
            <div></div>
        );
        return (
            <div className={'picture-window'}>
                <span id={'close-picture-window'} className={'iconfont'} onClick={this.closeWindow}>&#xe6df;</span>
                    <article className={'picture-wrapper'}>
                        <div id={'picture'}><img src={'https://scontent-hkg3-1.cdninstagram.com/vp/f753d529f86ff0e1fa90a5e847b4db11/5D2A87F3/t51.2885-15/fr/e15/s1080x1080/53699534_1267746790039699_6163535781161979635_n.jpg?_nc_ht=scontent-hkg3-1.cdninstagram.com'} /></div>
                        <div id={'info'}>
                            <PostHeader/>
                            <ul>

                            </ul>
                            <PostInfo/>

                        </div>
                    </article>
            </div>
        );
    }

    closeWindow(){
        this.setState({
            visible: false
        })
    }
}

export default Picture;