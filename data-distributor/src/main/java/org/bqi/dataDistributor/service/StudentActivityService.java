package org.bqi.dataDistributor.service;

import com.amazonaws.services.sns.AmazonSNS;
import com.amazonaws.services.sns.model.MessageAttributeValue;
import com.amazonaws.services.sns.model.PublishRequest;
import com.amazonaws.services.sns.model.PublishResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class StudentActivityService {

    @Autowired
    AmazonSNS snsClient;

    public String publicStudentActivityMesg(String studentActivityMesg) {

        return sendSMSMessage(studentActivityMesg, null);
    }

    private String sendSMSMessage(String message, Map<String, MessageAttributeValue> smsAttributes) {

        //publish to an SNS topic
        String topicArn = "arn:aws:sns:us-east-1:180440336715:StudentActivityMessage";
        PublishRequest publishRequest = new PublishRequest(topicArn, message);
        PublishResult publishResult = snsClient.publish(publishRequest);

        //print MessageId of message published to SNS topic
        System.out.println("MessageId - " + publishResult.getMessageId());

        return publishResult.getMessageId();
    }

}
