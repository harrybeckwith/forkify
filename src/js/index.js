import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements, renderLoader, clearLoader} from './views/base';
 
/* Global State of the app
- Search object
- Current recipt object
- Shopping list object
- Liked recipes
*/
const state = {};
 
const controlSearch = async () => {
    // 1. get the query from view
    const query = searchView.getInput();
 
    if(query){
        // 2. New search object and add to state
        state.search = new Search(query);
    }
        //  3. Prepare UI for results
        searchView.clearInput();
        renderLoader(elements.searchResults);

        //  4. Search for recipes
        await state.search.getResults();
 
        //  5. Render result on UI
        searchView.renderResults(state.search);
        clearLoader();
    
}
 
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})