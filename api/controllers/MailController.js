/**
 * MailController.js 
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var async = require('async');

module.exports = {
  /*
  index: function (req,res) {

    Mail.find( function foundFiles(err, theMail) {
      if (err) return next(err);
      // pass the array down to the /views/index.ejs page
      res.view({
        theMail: theMail
      });
    });
  },
  */
  
  create: function(req, res, next) {
    	
		var items = req.param('mandrill_events');
		
		async.forEach(items, function(item,done){
      
      Mail.create({ email: item.msg.email }).done(function fileCreated(err, mail){
        if (err) {
          console.log(err);
        }
        done()
      }), function(err){
        res.json({yeah: "boy"})
      }

    });

  },

  
};
