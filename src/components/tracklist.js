import React, {Component, PropTypes} from 'react';

export default class TrackList extends Component {

	static propTypes = {
		tracks: PropTypes.array
	}

	static defaultProps = {
		tracks: []
	}

	render() {

		return (

			<ul>
				{
					this.props.tracks.map((track, key) => {
						return <li key={key}>Track: {track.title}</li>;
					})
				}
			</ul>
		)
	}
}