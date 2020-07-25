package com.fitfortune;

import java.util.Collections;

import org.apache.velocity.app.VelocityEngine;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.client.RestTemplate;

@Configuration
@SpringBootApplication
@PropertySource(value="classpath:application.properties")
public class AarogyamFitnessApplication {

	public static void main(String[] args) {
		SpringApplication app = new SpringApplication(AarogyamFitnessApplication.class);
		app.setDefaultProperties(Collections
		          .singletonMap("server.port", "8083"));
		app.run();
	}
	
	@Bean
	public RestTemplate restTemplate(RestTemplateBuilder builder) {
		return builder.build();
	}
	
	@Bean
	public VelocityEngine velocityEngine() {
		return new VelocityEngine(); 
	}
}
