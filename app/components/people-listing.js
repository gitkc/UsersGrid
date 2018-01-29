import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'section',
    classNames: ['people-list'],

    //Computed Properties
    sortBy: Ember.computed('sortOrderFilter', function () {
        var sortBy = '';

        switch (this.get('sortOrderFilter')) {
            case 'A-Z':
                sortBy = 'name';
                break;
            case 'Priority':
                sortBy = 'priority';
                break;
            default:
                break;
        }

        return sortBy;
    }),

    filteredPeopleList: Ember.computed('model', 'selectedFilter', 'sortBy', function () {
            var people = this.get('model.data');
            var filter = this.get('selectedFilter');
            var sort = this.get('sortBy');

            if (filter != '' && filter != null) {
                people = people.filter(person => person.category == filter);
            }
            
            if (sort != '' && sort != null) {
                people = people.sortBy(sort);
            }

            return people;
        }
    )
});
