package org.bqi.dataDistributor.controllers;

import org.bqi.dataDistributor.dto.StudentActivityMessageDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class DataDistributorController {

    @PostMapping("/new-message")
    @ResponseBody
    public ResponseEntity postNewMessage(@RequestBody StudentActivityMessageDto newMessage) {
        newMessage.toString();
        return ResponseEntity.ok(HttpStatus.OK);
    }

}
