import React, {Component} from 'react';
import '../css/recommend.scss';
import * as actionCreators from "../store/actionCreators";
import {connect} from "react-redux";

class Recommend extends Component{

    render() {
        const {users} = this.props;
        return (
            <div className={'rec-wrapper'}>
                <div className={'rec-text-desc'}>
                    <div className={'for-you'}>为你推荐</div>
                    <div className={'all'}>查看全部</div>
                </div>
                <div className={'recommend-user'}>
                    {
                        users.map((item, idx) => {
                            return (
                                <div className={'rec-user-wrapper'} key={idx}>
                                    <div style={{flex: '1 0 0'}}>
                                        <a className={'pic-wrapper'}>
                                            <img src={item.icon}/>
                                        </a>
                                    </div>
                                    <div className={'rec-user-text'} style={{flex: '3 0 0'}}>
                                        <div className={'rec-username'}>{item.username}</div>
                                        <div className={'rec-user-desc'}>{item.category}</div>
                                    </div>
                                    <div className={'follow'} style={{flex: '1 0 0'}}
                                         onClick={event => this.toggleFollow(event)}>
                                        关注
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        );
    }

    toggleFollow(event) {
        if (event.target.innerText === '关注') {
            event.target.innerText = '已关注';
        } else {
            event.target.innerText = '关注';
        }
    }

    componentDidMount() {
        this.props.loadUser();
    }
}


const mapStateToProps = (state /*, ownProps*/) => {
    return {
        users: state.get('users')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadUser() {
            dispatch(actionCreators.loadUser())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);


