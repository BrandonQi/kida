const api = {
    getTeacherInfo(username) {
        // username = username.toLowerCase().trim();
        // let url = 'https://localhost/teacher/' + username;
        // return fetch(url).then((res) => res.json());
        return {
            'id': 'fakeTeacher',
            'studentList': [
                {'name': 'StudentName10', 'id': 'StudentId10'},
                {'name': 'StudentName11', 'id': 'StudentId11'},
                {'name': 'StudentName12', 'id': 'StudentId12'},
                {'name': 'StudentName13', 'id': 'StudentId13'},
                {'name': 'StudentName14', 'id': 'StudentId14'},
                {'name': 'StudentName15', 'id': 'StudentId15'},
                {'name': 'StudentName16', 'id': 'StudentId16'},
                {'name': 'StudentName17', 'id': 'StudentId17'},
                {'name': 'StudentName18', 'id': 'StudentId18'},
                {'name': 'StudentName19', 'id': 'StudentId19'},
                {'name': 'StudentName110', 'id': 'StudentId110'},
                {'name': 'StudentName111', 'id': 'StudentId111'},
                {'name': 'StudentName112', 'id': 'StudentId112'},
                {'name': 'StudentName113', 'id': 'StudentId113'},
                {'name': 'StudentName114', 'id': 'StudentId114'},
                {'name': 'StudentName115', 'id': 'StudentId115'},
                {'name': 'StudentName116', 'id': 'StudentId116'},
                {'name': 'StudentName117', 'id': 'StudentId117'},
                {'name': 'StudentName118', 'id': 'StudentId118'},
                {'name': 'StudentName119', 'id': 'StudentId119'}
            ]
        };
    },
    getActivitiesInfo() {
        // let url = 'https://localhost/teacher/' + username;
        // return fetch(url).then((res) => res.json());
        return [
            {'name': 'StudentName10', 'id': 'StudentId10'},
            {'name': 'StudentName11', 'id': 'StudentId11'},
            {'name': 'StudentName12', 'id': 'StudentId12'},
            {'name': 'StudentName13', 'id': 'StudentId13'},
            {'name': 'StudentName14', 'id': 'StudentId14'},
            {'name': 'StudentName15', 'id': 'StudentId15'},
            {'name': 'StudentName16', 'id': 'StudentId16'},
            {'name': 'StudentName17', 'id': 'StudentId17'},
            {'name': 'StudentName18', 'id': 'StudentId18'},
            {'name': 'StudentName19', 'id': 'StudentId19'},
            {'name': 'StudentName110', 'id': 'StudentId110'},
            {'name': 'StudentName111', 'id': 'StudentId111'},
            {'name': 'StudentName112', 'id': 'StudentId112'},
            {'name': 'StudentName113', 'id': 'StudentId113'},
            {'name': 'StudentName114', 'id': 'StudentId114'},
            {'name': 'StudentName115', 'id': 'StudentId115'},
            {'name': 'StudentName116', 'id': 'StudentId116'},
            {'name': 'StudentName117', 'id': 'StudentId117'},
            {'name': 'StudentName118', 'id': 'StudentId118'},
            {'name': 'StudentName119', 'id': 'StudentId119'}
        ];
    }
};

module.exports = api;