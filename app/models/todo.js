import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr("String"),
  completed: DS.attr("boolean")
});
