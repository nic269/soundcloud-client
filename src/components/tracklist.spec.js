import TrackList from './tracklist';
import {shallow} from 'enzyme';

describe('TrackList', () => {

	it('shows two tracks', () => {
		const props = {
			tracks: [{
				id: 1,
				title: 'foo'
			},
			{
				id: 2,
				title: 'bar'
			}]
		};

		const element = shallow(<TrackList {...props} />);

		expect(element.find('li')).to.have.length(2);
	});

	it('show track title', () => {
		const props = {
			tracks: [
				{
					id: 1,
					title: 'foo'
				}
			]
		};

		const element = shallow(<TrackList {...props} />);

		expect(element.contains('foo')).to.be.true;
	});
});