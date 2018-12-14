import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Router.route('/myWorks');




Template.user.helpers(
    {
        user(){
            return currentAccount;
        }
    }
)


Template.myWorks.helpers({
    editing(){
        return this._id = Session.get('editItem');
    },
    list(){
        return Masterpiece.find({}, {limit:100, sort:{title:1}});
    },

});


Template.myWorks.events({
    'click button[name=remove]' (evt, tmpl){
        console.log('remove');
        Masterpiece.remove({ _id : this._id });
    },
    'click button[name=modify]' (evt, tmpl){
        console.log('modify');
        Session.set('editItem', this._id);
    },
    'click button[name=save]' (evt, tmpl){
        console.log('save');
        var modifiedInfo = {
            title : tmpl.find('input[name=title]').value,
            price : tmpl.find('input[name=price]').value,
            copyright : tmpl.find('input[name=copyright]').value,
            filename : tmpl.find('input[name=filename]').value,
            creator : currentAccount
        };
        Masterpiece.update({_id:this._id},{$set:modifiedInfo});
        Session.set('editItem', null);
    }

});



// 'click button[name=modify]' (evt, tmpl){
//     console.log('modify');
//     Session.set('editItem', this._id);
// },
// 'click button[name=save]' (evt, tmpl){
//     var modifiedInfo = {
//         title : tmpl.find('input[name=title]').value,
//         price : tmpl.find('input[name=price]').value,
//         copyright : tmpl.find('input[name=copyright]').value,
//         filename : tmpl.find('input[name=filename]').value,
//         creator : currentAccount
//     };
//     Masterpiece.update({_id:this._id},{$set:modifiedInfo});
//     Session.set('editItem', null);
// }