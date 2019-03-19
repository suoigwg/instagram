import React, { Component } from 'react';
import '../css/post.scss'
import PostInfo from './post-info';
import PostHeader from './post-header';
import * as actionCreators from "../store/actionCreators";
import {connect} from "react-redux";

class Post extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        const {timeline} = this.props;
        const timelineArray = [...timeline.values()]
        return (
                <article className={'post-wrapper'}>
                    {
                        timelineArray.map((item, idx)=>{
                            return(
                                <div className={'post-content'}>
                                    <PostHeader id={item.id}/>
                                    <div post-id={item.id} className={'post-img'}>
                                        <a><img src={item.imgUrl}/></a>
                                    </div>
                                    <PostInfo id={item.id} />
                                </div>
                            )
                        })
                    }

                </article>
        )
    }

}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        timeline: state.get('timeline')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);