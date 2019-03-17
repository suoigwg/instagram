import React, { Component } from 'react';
import '../css/recommend.scss';

class Recommend extends Component{

    render() {
        return (
            <div className={'rec-wrapper'}>
                <div className={'rec-text-desc'}>
                    <div className={'for-you'}>为你推荐</div>
                    <div className={'all'}>查看全部</div>
                </div>
                <div className={'recommend-user'}>
                    <div >
                        <a className={'pic-wrapper'}>
                            <img src="https://scontent-hkg3-1.cdninstagram.com/vp/98310c7a86436d5b70047dc7ed3bd211/5D23F3E8/t51.2885-19/s150x150/13597791_261499887553333_1855531912_a.jpg?_nc_ht=scontent-hkg3-1.cdninstagram.com" />
                        </a>
                    </div>
                    <div className={'rec-user-text'}>
                        <div className={'rec-username'}>natgeo</div>
                        <div className={'rec-user-desc'}>热门</div>
                    </div>
                    <div className={'follow'}>关注</div>
                </div>
            </div>
        );
    }

}

export default Recommend;