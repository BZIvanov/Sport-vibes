import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ListContext from '../../context/list-context';
import Daily from './Daily/Daily';

const Dailies = () => {
  const [state, dispatch] = useContext(ListContext);

  const handleFinished = (i) => {
    dispatch({ type: 'completeItem', payload: i });
  };

  let dataToDisplay =
    state.list.length === 0 ? (
      <div>
        <h1>Well done!</h1>
        <Link to='/home'>Back to home</Link>
      </div>
    ) : (
      state.list.map((x, i) => (
        <Daily key={x.id} data={x} onFinished={() => handleFinished(i)} />
      ))
    );

  return <section>{dataToDisplay}</section>;
};

export default Dailies;
