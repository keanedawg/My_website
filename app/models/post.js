import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),
  key: DS.attr('string'),
  date: DS.attr('date', { defaultValue() { return new Date(); }}),
  isLocked: DS.attr('boolean')
});
