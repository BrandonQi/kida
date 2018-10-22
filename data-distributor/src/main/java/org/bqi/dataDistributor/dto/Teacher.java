package org.bqi.dataDistributor.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Data
@Setter
@Getter
public class Teacher {
    private String id;

    private Date created_at;
    private Date updated_at;

    private String avatar_url;
    private String bio;

    private String className;
    private String schoolName;
    private String location;

    private String email;
    private String phone;
    private String login;
    private String name;
    private String type;

    private List<Student> studentList;
}
