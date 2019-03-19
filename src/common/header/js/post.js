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
        console.log(timeline);
        return (
                <article className={'wrapper'}>
                    {
                        timeline.map((item, idx)=>{
                            return(
                                <div>
                                    <PostHeader username={item.author} location={item.location} icon={item.authorIcon}/>
                                    <div post-id={item.id} className={'post-img'}>
                                        <a><img src={item.imgUrl}/></a>
                                    </div>
                                    <PostInfo likes={item.likes} date={item.date} bookmarked={item.bookmarked} comments={item.comments}/>
                                </div>
                            )
                        })
                    }

                </article>
        )
    }
    componentDidMount() {
        this.props.fetchTimeline();
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        timeline: state.timeline
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTimeline(){
            dispatch(actionCreators.fetchTimeline())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);