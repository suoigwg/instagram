import React, {Component} from 'react';
import * as actionCreators from "../store/actionCreators";
import {connect} from "react-redux";

class PostInfo extends Component{
    constructor(props) {
        super(props);
        this.addComment = this.addComment.bind(this);

    }


    render() {
        let {id} = this.props;
        id = id?id:1;
        const {likes, comments, bookmarked,date, liked} = this.props.timeline.get(id);
        return (
            <div className={'post-info'}>
                <section className={'post-button'}>
                    <span className={'iconfont'} style={{marginLeft: '0'}}
                          dangerouslySetInnerHTML={this.drawHeart(liked)} onClick={()=>this.props.toggleLike(id)}>
                    </span>
                    <label htmlFor="comment-input">
                        <span className={'iconfont'}>&#xe841;</span>
                    </label>
                    <span className={'iconfont'}>&#xe605;</span>
                    <span className={'iconfont'} style={{float: 'right'}}
                          dangerouslySetInnerHTML={this.drawBookmark(bookmarked)} onClick={()=>this.props.toggleBookmark(id)}>
                    </span>
                </section>
                <section className={'post-likes'}><a><strong>{likes}</strong>次赞</a></section>
                <div className={'comment-list'}>
                    <ul>
                        {
                            comments.map((item, idx)=>{
                                return (
                                    <li key={idx}><strong>{item.author}</strong> {item.comment}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={'post-date'}>
                    <time>{date}天前</time>
                </div>
                <section className={'post-comment'}>
                    <form>
                        <textarea onKeyPress={(event) => this.addComment(event)} id={'comment-input'}
                                  placeholder="添加评论..."></textarea>
                    </form>
                </section>
            </div>
        );
    }

    drawHeart(liked){
        return liked?{__html: '&#xe6ab;'}:{__html: '&#xe64b;'}
    }

    drawBookmark(bookmarked){
        return bookmarked?{__html: '&#xe60e;'}:{__html: '&#xef47;'}
    }

    addComment(event) {
        if (event.which === 13) {
            const id = parseInt(event.target.getAttribute('postID'), 10);
            this.props.newComment(id, event.target.value);
            event.target.value = "";

        }
    }


}


const mapStateToProps = (state /*, ownProps*/) => {
    return {
        timeline: state.get('timeline')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTimeline(){
            dispatch(actionCreators.fetchTimeline())
        },

        toggleLike(id){
            dispatch(actionCreators.toggleLike(id));
        },

        toggleBookmark(id){
            dispatch(actionCreators.toggleBookmark(id));
        },
        newComment(id, comment) {
            dispatch(actionCreators.addComment(id, comment));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostInfo);

