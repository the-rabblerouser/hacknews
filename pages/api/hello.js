import axios from 'axios';
import { BASE_API_URL } from '../../utils/constants';

export default (req, res) => {
	res.status(200).json({ name: 'John Doe' });
};
