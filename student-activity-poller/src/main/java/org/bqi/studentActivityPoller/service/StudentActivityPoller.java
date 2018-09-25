package org.bqi.studentActivityPoller.service;

import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Service;

import javax.jms.JMSException;

@Service
public class StudentActivityPoller{

  @JmsListener(destination = "StudentActivity")
  public void saveStudentActivity(String requestJSON) throws JMSException{

    System.out.println(requestJSON);

    //    try{
    //      ThumbnailRequest request = ThumbnailRequest.fromJSON(requestJSON);
    //      String thumbnailUrl = thumbnailCreator.saveStudentActivity(request.getImageUrl());
    //
    //    }catch(IOException ex){
    //      throw new JMSException("Encountered error while parsing message.");
    //    }
  }

}