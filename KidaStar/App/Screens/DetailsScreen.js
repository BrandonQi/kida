import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';

class DetailsScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            selectStudentId : '',
            activity : {
                what : '',
                unit : '',
                count : 0
            }
        }
    }
    render() {
        const teacherInfo = this.props.navigation.getParam('teacherInfo', {
            'id': '',
            'studentList': []
        });
        const activitiesInfo = this.props.navigation.getParam('activitiesInfo', []);

        console.log(teacherInfo);
        console.log(activitiesInfo);

        let studentList = teacherInfo.studentList.map((student) => {
            return (
                <View key={student.id} style={styles.rowContainer}>
                    <Text style={styles.rowTitle}>{student.name}</Text>
                </View>
            )
        });

        return (
            <View>
                <ScrollView>
                    {studentList}
                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    rowContainer : {
        padding : 15
    },
    rowTitle : {
        fontSize: 20
    }
});

module.exports = DetailsScreen;