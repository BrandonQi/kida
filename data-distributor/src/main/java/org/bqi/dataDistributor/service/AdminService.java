package org.bqi.dataDistributor.service;


import org.bqi.dataDistributor.dto.Student;
import org.bqi.dataDistributor.dto.Teacher;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AdminService {

    public Teacher getTeacherInfo(String teacherId) {
        Teacher testTeacher = new Teacher();
        testTeacher.setId(teacherId);
        List<Student> testStuList = new ArrayList<>();
        testStuList.add(new Student("testStuId1", "testStuName1"));
        testStuList.add(new Student("testStuId2", "testStuName2"));
        testStuList.add(new Student("testStuId3", "testStuName3"));
        testStuList.add(new Student("testStuId4", "testStuName4"));
        testStuList.add(new Student("testStuId5", "testStuName5"));
        testStuList.add(new Student("testStuId6", "testStuName6"));
        testStuList.add(new Student("testStuId7", "testStuName7"));
        testStuList.add(new Student("testStuId8", "testStuName8"));
        testTeacher.setStudentList(testStuList);
        return testTeacher;
    }
}
