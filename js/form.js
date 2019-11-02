$(document).ready(function () {
    $('button').on('click', function () {
        let username = $('#user').val();
        let password = $('#pass').val();
        let email = $('#email').val();
        register(username,password,email);

        (username != "")?setSuccess('user') : setError('user');
        (password != "")?setSuccess('pass') : setError('pass');
        (email != "")?setSuccess('email') : setError('email');
    });
});
function setSuccess(success, label) {
    $('#' + success).addClass('border-success') .removeClass('border-danger');
    $('#' + label).addClass('text-success') .removeClass('text-danger');
}
function setError(error, label) {
    $('#' + error).addClass('border-danger').removeClass('border-success');
    $('#' + label).addClass('text-danger').removeClass('text-success');
}
function isUser(u) {
    u == ""? setError('user', 'plabel') : setSuccess('user', 'plabel');
}

function isPass(p) {
    p == ""? setError('pass', 'llabel') : setSuccess('pass', 'llabel');
}

function isEmail(e) {
    e == ""? setError('email', 'elabel') : setSuccess('email', 'elabel');
}
function register(u,p,e) {
    isUser(u);
    isPass(p);
    isEmail(e);
}