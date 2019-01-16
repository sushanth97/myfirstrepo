import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  id:4,
    actions:{
        submit(){
           this.store.push({
            data: [{
              id: this.model.id||this.id,
              type: 'contact',
              attributes: {
                name: this.model.name,
                number: this.model.number,
                email: this.model.email,
                birthday: this.model.birthday,
                address: this.model.address,
                image: this.model.image,
                description: this.model.description
              }
            }]
              });
              if(this.model.id)
              {
                    this.transitionToRoute('contact.details',this.model.id);
              }
              else
              {
                this.transitionToRoute('contact.details',this.id);
                this.set('id',this.id+1);
              }
              
              
        }
    }
    
    
});
