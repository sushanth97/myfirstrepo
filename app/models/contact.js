import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    number: DS.attr(),
    email: DS.attr(),
    birthday: DS.attr(),
    address: DS.attr(),
    image: DS.attr(),
    description: DS.attr()
});
