import { connect } from 'react-redux'; //интегрирует реакт-компонент с редаксом
import { incrementLikes, decrementLikes } from './redux/actions'

function Likes(props) {
    console.log(props)
    return (
        <div className="button-controls">
            <button onClick={props.onIncrementLikes}>♥ {props.likes}</button>
            <button onClick={props.onDecrementLikes}>Dislike</button>
        </div>
    )
}

//передача данных из хранилища редакс в пропс текущего компонента
function mapStateToProps(state) {
    console.log('mapStateToProps > ', state);
    const { likesReducer } = state

    return {
        likes: likesReducer.likes
    }
}

function mapDispatchToProps(dispatch){
    return {
        onIncrementLikes: () => {
            return dispatch(incrementLikes());
        },

        onDecrementLikes: () => {
            return dispatch(decrementLikes());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes); //компонент высшего порядка(новый компонент из компонента)