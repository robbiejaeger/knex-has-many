
exports.seed = function(knex, Promise) {
  return knex('comments').del() // Deletes ALL existing entries
    .then(function(){
      return knex('posts').del()
    })
    .then(function(){
      return knex('posts').insert({
        title: 'Post 1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, 'id')
    })
    .then(function(id){
      return knex('comments').insert([{
        body: 'Awesome!',
        username: 'Alice',
        post_id: id[0]
      },
      {
        body: 'This post was meh.',
        username: 'Bob',
        post_id: id[0]
      }])
    })
    .then(function(){
      return knex('posts').insert({
        title: 'Post 2',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      })
    })
}
