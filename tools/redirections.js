const credentials = require('./app-keys');
credentials['consumerKey'] = '8hm9Qs925OwwIi7qUi1llt9AncZixwzI';

const ovh = require('ovh')(credentials);

ovh.requestPromised('GET', '/email/domain/valdera.fr/redirection')
.then(redirections => {
    redirections.forEach(id => {
        ovh.requestPromised('GET', `/email/domain/valdera.fr/redirection/${id}`)
        .then(redirection => {
            console.log(redirection);
        });
    });
});
