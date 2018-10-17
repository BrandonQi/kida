package org.bqi.dataDistributor.controllers;

import org.bqi.dataDistributor.dto.StudentActivityMessageDto;
import org.bqi.dataDistributor.dto.Teacher;
import org.bqi.dataDistributor.service.AdminService;
import org.bqi.dataDistributor.service.StudentActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class DataDistributorController {

    @Autowired
    StudentActivityService studentActivityService;

    @Autowired
    AdminService adminService;

    @PostMapping("/new-message")
    @ResponseBody
    public ResponseEntity postNewMessage(@RequestBody StudentActivityMessageDto newMessage) {
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PostMapping("/student-activity-message")
    @ResponseBody
    public ResponseEntity postStudentActivityMessage(@RequestBody String studentActivityMesg) {
        String mesgId = studentActivityService.publicStudentActivityMesg(studentActivityMesg);
        return ResponseEntity.ok(mesgId);
    }

    @GetMapping("/teacher/{teacherId}")
    @ResponseBody
    public Teacher teacherInfo(@PathVariable("teacherId") String teacherId) {
        return adminService.getTeacherInfo(teacherId);
    }

}
