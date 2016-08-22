import React from 'react';
import ReactDOM from 'react-dom';
import TrackList from './components/tracklist';
import {configureStore} from './store';
import * as actions from './actions';

const tracks = [
	{
		id: 1,
		title: 'We don\'t talk any more'
	},
	{
		id: 2,
		title: 'lalala'
	}
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
	<TrackList />,
	document.getElementById('app')
);