import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
        return this.store.findRecord('contact',params.contact_id)
        .then(function(a){
            console.log(a.name);
            return a;
        })
    },
    actions:{
        ab(){
            console.log(this.model.name);
        }

}
});
