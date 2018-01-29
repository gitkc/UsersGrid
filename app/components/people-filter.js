import Ember from 'ember';

export default Ember.Component.extend({ 
    classNames: ['filter-options'],
    
    //Computed Properties
    filterOptions: Ember.computed('model', function () {
        let filterOptions = [];
        let people = this.get('model.data');
        
        people.forEach(function (person) {
            if (!filterOptions.contains(person.category)) {
                filterOptions.push(person.category);
            }
        });

        return filterOptions;
    }),


    //Actions
    actions: {
        updateFilter(category) {
            this.sendAction('updateFilter', category);
        }
    }
});
