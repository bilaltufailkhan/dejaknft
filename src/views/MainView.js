import { Link } from 'react-router-dom';
import About from '../components/About';
import FAQ from '../components/FAQ';
import RoadMap from '../components/RoadMap';
import TheGame from '../components/TheGame';
import Utility from '../components/Utility';

const AdminView = props => {
	return (
		<>
			<About />
			<TheGame />
			<RoadMap />
			<Utility />
			<FAQ />
		</>
	);
};

export default AdminView;
