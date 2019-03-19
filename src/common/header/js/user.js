import React, { Component } from 'react';
import '../css/user-profile.scss'
import * as actionCreators from "../store/actionCreators";
import {connect} from "react-redux";
class UserProfile extends Component{

    render() {
        return (
            <div >
                <div className={'profile-wrapper'}>
                    <div>
                        <a><img src={'https://scontent-hkg3-1.cdninstagram.com/vp/74698f6ed704f2867b202f9620145212/5D0BA7E1/t51.2885-19/s150x150/53725741_2240872962846483_3598845366100819968_n.jpg?_nc_ht=scontent-hkg3-1.cdninstagram.com'}></img></a>
                    </div>
                    <div className={'user-text'}>
                        <div>
                            <div className={'id'}><a>{this.props.username}</a></div>
                        </div>
                        <div className={'nickname'}>ig</div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        username: state.get('username')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);


