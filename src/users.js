var User = function(config){
  return {
    list: function(){
      console.log('Will list all users');
    },

    show: function(id){
      console.log('Will find Ticket with id of', id);
    },

    create: function(data){
      var data = {ticket: data};
      console.log('Will create ticket with body', data);
    },

    update: function(id, data){
      var data = {ticket: data}
      console.log('Will update ticket with id', id, 'and body', data);
    },

    delete: function(id){
      console.log('Will delete ticket with id', id);
    }
  }
}

module.exports = User;
