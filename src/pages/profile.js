import React, { Component } from 'react';
import './profile.scss'
import Gallery from '../common/header/js/gallery'
import * as actionCreators from "../common/header/store/actionCreators";
import {connect} from "react-redux";

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            postActive: true
        });
        this.toggleActiveBtn = this.toggleActiveBtn.bind(this)
    }


    render() {
        const {profile} = this.props;
        return (
            <div className={'user-profile-wrapper'}>
                <header className={'user-header'}>
                    <div style={{margin: '0 30px 0 0', flex: '1 0 0', padding: '30px 0 0 0'}}>
                        <div className={'user-img-wrapper'}>
                            <img src={profile.icon}/>
                        </div>
                    </div>
                    <section className={'user-info'}>
                        <div>
                            <p style={{fontSize: '28px'}}>{profile.username}</p>
                        </div>
                        <ul className={'user-connection'}>
                            <li>{profile.post} 帖子</li>
                            <li>{profile.follower} 粉丝</li>
                            <li>正在关注 {profile.following}</li>
                        </ul>
                        <div>
                            {profile.desc}
                        </div>
                    </section>
                </header>
                <div className={'user-toggle-wrapper'}>
                    <a className={this.state.postActive ? 'active' : ''} onClick={this.toggleActiveBtn}>帖子</a>
                    <a className={!this.state.postActive ? 'active' : ''} onClick={this.toggleActiveBtn}>IGTV</a>
                </div>
                <Gallery/>
            </div>
        );
    }

    toggleActiveBtn() {
        this.setState({
            postActive: !this.state.postActive
        })
    }

    componentDidMount() {
        this.props.loadProfile();
    }
}




const mapStateToProps = (state /*, ownProps*/) => {
    return {
        username: state.get('username'),
        profile: state.get('profile'),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadProfile() {
            dispatch(actionCreators.loadUserProfile());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);


