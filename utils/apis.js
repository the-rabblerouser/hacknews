import axios from 'axios';
// import { BASE_API_URL } from './constants';

// const getStory = async (id) => {
// 	try {
// 		const story = await axios.get(
// 			`${BASE_API_URL}/item/${id}.json?print=pretty`
// 		);
// 		return story;
// 	} catch (error) {
// 		console.log('Error');
// 	}
// };

// export const getStories = async (type) => {
// 	try {
// 		const { data: storyIds } = await axios.get(
// 			`${BASE_API_URL}/${type}stories.json?print=pretty`
// 		);
// 		const stories = await Promise.all(storyIds.slice(0, 30).map(getStory));
// 		return stories;
// 	} catch (error) {
// 		console.log('Error');
// 	}
// };
