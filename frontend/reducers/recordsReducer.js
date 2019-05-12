import { combineReducers } from 'redux';
import jobPosts from './jobPostsReducer';
import companies from './companiesReducer';
import jobCategories from './jobCategoriesReducer';

export default combineReducers({ jobPosts, companies, jobCategories });
