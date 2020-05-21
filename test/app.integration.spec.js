// test/app.integration.spec.js
const request = require('supertest');
const app = require('../app');

/*
méthode regroupant une suite de tests, le 1er paramètre étant le titre du test, puis les tests sont
écrits dans la fonction qui est le 2e paramètre de la méthode
*/
describe('Test routes', () => {
    // 'it' défini un test avec un titre en 1er paramètre et une fonction en 2e paramètre
    it('GET / sends "Hello World" as json', (done) => {
        // envoi une requête à 'app' d'Express
        request(app)
        // en utilisant la méthode 'GET' sur l'url '/'
        .get('/')
        // on dit au test les conditions requises : il faut une réponse 200 et un contenu de type JSON
        .expect(200)
        .expect('Content-Type', /json/)
        // si tout est ok...
        .then(response => {
            // ... on définit un objet avec le résultat attendu
            const expected = { message: 'Hello World!' };
            /*
            JEST vérifie que le résultat soit conforme à ce que l'on a défini au préalable : "je
            m'attend à recevoir la réponse égale à notre objet défini plus haut"
            */
            expect(response.body).toEqual(expected);
            // tout est ok, JEST peut finir ici les tests et passer au suivant s'il y a
            done();
        });
    });
});