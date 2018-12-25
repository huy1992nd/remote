'use strict';

module.exports = function(app) {
    var command = require('../../redis/command_controller');
    //web
    app.route("/run_login")
    .post(command.run_login);
}