import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadPost } from './slice/postSlice';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();

  const { posts, status } = useSelector(state => state.posts)

  useEffect(() => {
    if (status === "idle") {
      dispatch(loadPost());
    }
  });

  console.log(posts);

  return (
    <div className="App">
      <h1>Asunc Thunk Redux</h1>
    </div>
  );
}

export default App;
