import { Meteor } from 'meteor/meteor';


Meteor.startup(() => {
  // code to run on server at startup
  console.log('server started!!')
  multer({dest: './uploads/',
    onFileUploadStart: function(file){
      console.log(file.originalname + 'is starting');
    }});
});
