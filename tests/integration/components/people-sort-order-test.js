import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('people-sort-order', 'Integration | Component | people sort order', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{people-sort-order}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#people-sort-order}}
      template block text
    {{/people-sort-order}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
