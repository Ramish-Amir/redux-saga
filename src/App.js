import './App.css';
import { addAlbum, deleteAlbum, getAlbums, updateAlbum } from './redux/actions';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

function App(props) {
  const { albums, isLoading, actions } = props
  const [title, setTitle] = useState('')
  const [userId, setUserId] = useState('')
  const [id, setId] = useState()
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')

  useEffect(() => {
    actions.getAlbums()
  }, [])

  useEffect(() => {
    if (dialogOpen && !isLoading) {
      clearInputs()
      setDialogOpen(isLoading)
    }
  }, [isLoading])

  const onDeleteHandler = (album) => {
    actions.removeAlbum(album)
  }

  const onAddHandler = () => {
    const newAlbum = {
      title: title,
      userId: userId
    }
    actions.addAlbum(newAlbum)
  }

  const onUpdateHandler = () => {
    const changedAlbum = {
      id,
      title,
      userId
    }
    actions.updateAlbum(changedAlbum)
  }

  const openAddDialog = () => {
    setDialogTitle('add')
    setDialogOpen(true)
  }

  const openUpdateDialog = (album) => {
    setId(album.id)
    setTitle(album.title)
    setTitle(album.title)
    setUserId(album.userId)
    setUserId(album.userId)
    setDialogTitle('update')
    setDialogOpen(true)
  }

  const clearInputs = () => {
    setTitle('')
    setId('')
    setUserId('')
  }


  return (
    <div className="App">

      {isLoading ? <div>Loading</div> : <div>Finished</div>}

      {dialogOpen && <div className='dialog'>
        <h2>{dialogTitle}</h2>
        <label>Title </label>
        <input onChange={(e) => { setTitle(e.target.value) }} value={title} placeholder='title' type='text' /><br />
        <label>User ID </label>
        <input onChange={(e) => { setUserId(e.target.value) }} value={userId} placeholder='user id' type='text' /><br />
        <button onClick={() => setDialogOpen(false)}>Cancel</button>
        {dialogTitle === 'add' && <button onClick={onAddHandler}>Add</button>}
        {dialogTitle === 'update' && <button onClick={onUpdateHandler}>Update</button>}
      </div>}

      <div className='addNew'>
        <button onClick={openAddDialog}>Add New Album</button>
      </div>

      {
        albums?.map((album) => (
          <div key={album.id} className='album'>
            Name: {album.title} - id: {album.id}
            <br></br>
            <button onClick={() => onDeleteHandler(album)} >Delete Album</button>
            <button onClick={() => openUpdateDialog(album)} >Update Album</button>
          </div>
        ))
      }
    </div>
  );
}

const mapStateToProps = state => {
  return ({
    albums: state.getAlbums.albums,
    isLoading: state.getAlbums.isLoading
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
