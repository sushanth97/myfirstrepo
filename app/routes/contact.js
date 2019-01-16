import Route from '@ember/routing/route';

export default Route.extend({
    model()
    {
        return this.store.findAll('contact')
        .then(function(para){
            console.log("working");
            return para;
        },function(para){
            console.log('error');
        });
        //return ['acd','qwe','ytr'];
    }   
});
