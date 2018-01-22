module.exports = function(){
    var faker = require("faker");
    var _ = require("lodash");
    return {
        people: _.times(4, function (n) {
            return {
                id: n,
                title: faker.lorem.words(3),
                description: faker.lorem.words(),
                tags: faker.lorem.words(),
                items: []
            }
        })
    }
}