import Ember from 'ember';

export default Ember.Controller.extend({
    //Properties
    selectedFilter: '',
    sortOrderFilter: '',

    //Actions
    actions: {
        updateSelectedFilter(category) {
            this.set('selectedFilter', category);
        },
        updateSortOrder(sortOrder) {
            this.set('sortOrderFilter', sortOrder);
        }
    }
});
