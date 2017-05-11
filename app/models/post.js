import DS from 'ember-data';

// include later
// date: DS.attr('date', { defaultValue() { return new Date(); }}),

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  key: DS.attr('string'),
  date: DS.attr('date'),
  isLocked: DS.attr('boolean')
});
