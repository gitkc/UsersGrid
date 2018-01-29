import Ember from 'ember';

export default Ember.Route.extend({
    model () {
        //Use seed data for model
        return Ember.$.getJSON('/assets/public/user-seed-data.json');
    }
});
