import { useState } from 'react';
import  uniqid  from 'uniqid';
import { useDispatch, useSelector } from 'react-redux';
import { commentCreate } from './redux/actions';
import SingleComment from './SingleComment';

function Comments(props) {
    const [textComment, setTextComment] = useState('');
    const comments = useSelector(state => {
        const { commentsReducer } = state;

        return commentsReducer.comments
    })
    console.log('comments ', comments)
    const dispatch = useDispatch()

    const handleInput = (e) => {
        setTextComment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit textComment ', textComment)

        const id = uniqid()
        dispatch(commentCreate(textComment, id))
    }

    return (
        <div className="card-comments">
            <form onSubmit={handleSubmit} className="comments-item-create">
                <input type='text' value={textComment} onChange={handleInput}/>
                <input type='submit' hidden/>
            </form>
            {
                !!comments.length && comments.map(res => {
                    return <SingleComment
                                key={res.id}
                                data={res}
                            />
                })
            }
        </div>
    )
}

export default Comments;