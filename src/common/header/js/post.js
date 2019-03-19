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
                                        <a><img src={'https://scontent-hkg3-1.cdninstagram.com/vp/d14a768dcc987cf833e359dbc301665d/5D094692/t51.2885-15/e35/53343735_361727848005434_4374964319129216193_n.jpg?_nc_ht=scontent-hkg3-1.cdninstagram.com'}/></a>
                                    </div>
                                    <PostInfo likes={item.likes} date={item.date} bookmarked={item.bookmarked} comments={item.comments}/>
                                </div>
                            )
                        })
                    }

                </article>
        )
    }
    componentWillMount() {
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