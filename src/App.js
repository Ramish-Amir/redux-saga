import './App.css';
import { addAlbum, deleteAlbum, getAlbums, updateAlbum } from './redux/actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { add, remove, update } from './services/services';

function App(props) {
  const { albums, actions } = props

  useEffect(() => {
    actions.getAlbums()
  }, [])

  const onDeleteHandler = (album) => {
    actions.removeAlbum(album)
  }

  const onAddHandler = () => {
    const newAlbum = {
      title: 'New Dummy Album',
      userId: 1341
    }
    actions.addAlbum(newAlbum)
  }

  const onUpdateHandler = (album) => {
    const changedAlbum = {
      ...album, title: 'Title updated'
    }

    actions.updateAlbum(changedAlbum)
  }


  return (
    <div className="App">
      <div className='addNew'>
        <button onClick={onAddHandler}>Add New Album</button>
      </div>

      {
        albums?.map((album) => (
          <div key={album.id} className='album'>
            Name: {album.title} - id: {album.id}
            <br></br>
            <button onClick={() => onDeleteHandler(album)} >Delete Album</button>
            <button onClick={() => onUpdateHandler(album)} >Update Album</button>
          </div>
        ))
      }
    </div>
  );
}

const mapStateToProps = state => {
  return ({
    albums: state.getAlbums.albums,
  })
}

const mapReducerToProps = dispatch => ({
  actions: {
    getAlbums: () => {
      dispatch(getAlbums())
    },
    addAlbum: (payload) => {
      dispatch(addAlbum(payload))
    },
    removeAlbum: (payload) => {
      dispatch(deleteAlbum(payload))
    },
    updateAlbum: (payload) => {
      dispatch(updateAlbum(payload))
    }
  }
})

export default connect(mapStateToProps, mapReducerToProps)(App);
