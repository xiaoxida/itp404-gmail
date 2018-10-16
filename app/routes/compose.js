import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller, model) {
    //controller.set('model', model);
    this._super(controller, model);
    controller.set('from', '');
    controller.set('to', '');
    controller.set('subject', '');
    controller.set('message', '');
  }
});
