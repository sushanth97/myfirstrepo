import Route from '@ember/routing/route';


export default Route.extend({
    model(params){
        return this.store.findRecord('contact',params.detail_id);
    
},
templateName:'new',
controllerName:'new'
  

});
