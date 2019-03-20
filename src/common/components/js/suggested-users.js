import React, { Component } from 'react';
import '../css/suggested-users.scss'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {actionCreators} from "../store";

class UserList extends Component{

    render() {
        const {users} = this.props;
        return (
            <div>
                <ul className={'sug-user-list'}>
                    {
                        users.map((item) => {
                            return (
                                <li>
                                    <div className={'user-list-wrapper'}>
                                        <div>
                                            <a className={'user-pic'}><img src={item.icon}/></a>
                                            <div style={{margin: '16px 0 8px 0'}}><a>{item.username}</a></div>
                                            <div id={'category'}>{item.category}</div>
                                        </div>
                                        <button className={'follow-btn'}
                                                onClick={event => this.toggleFollow(event)}>关注
                                        </button>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
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
            dispatch(actionCreators.loadUser());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);