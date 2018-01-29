import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['sort-order'],

    //Properties
    sortOrder: [
        "Featured",
        "A-Z",
        "Priority"
    ],

    //Actions
    actions: {
        updateSort(sortOrder) {
            this.sendAction('updateSort', sortOrder);
        }
    }
});
