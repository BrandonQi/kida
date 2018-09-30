package org.bqi.dataDistributor.Configuration;

import com.amazonaws.auth.profile.ProfileCredentialsProvider;
import com.amazonaws.regions.Region;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.sns.AmazonSNSClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SnsConfig {

    @Bean
    public AmazonSNSClient ssnClient() {
        AmazonSNSClient snsClient = new AmazonSNSClient(new ProfileCredentialsProvider());
        snsClient.setRegion(Region.getRegion(Regions.US_EAST_1));

        return snsClient;
    }
}