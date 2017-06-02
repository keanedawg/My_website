import Ember from 'ember';

export function appendHtml(params) {
    return Ember.String.htmlSafe(params[0]);
}

export default Ember.Helper.helper(appendHtml);
