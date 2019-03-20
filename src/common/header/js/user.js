import React, { Component } from 'react';
import '../css/user-profile.scss'
import * as actionCreators from "../store/actionCreators";
import {connect} from "react-redux";
class UserProfile extends Component{

    render() {
        const {profile} = this.props;
        return (
            <div >
                <div className={'profile-wrapper'}>
                    <div>
                        <a><img src={profile.icon}></img></a>
                    </div>
                    <div className={'user-text'}>
                        <div>
                            <div className={'id'}><a>{profile.username}</a></div>
                        </div>
                        <div className={'nickname'}>{profile.nickname}</div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.props.loadProfile();
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        username: state.get('username'),
        profile: state.get('profile')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadProfile() {
            dispatch(actionCreators.loadUserProfile());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);


