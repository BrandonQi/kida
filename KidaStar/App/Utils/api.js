const api = {
    getTeacherInfo(username) {
        username = username.toLowerCase().trim();
        let url = 'http://localhost/teacher/' + username;
        return fetch(url).then((res) => res.json());
    }
};

module.exports = api;