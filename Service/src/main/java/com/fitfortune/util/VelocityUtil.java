package com.fitfortune.util;

import java.io.StringWriter;
import java.util.Map;

import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class VelocityUtil {
	
	@Autowired
    VelocityEngine velocityEngine;
	
	public String geContentFromTemplate(VelocityContext context) {

		String result = null;

        VelocityEngine velocity = new VelocityEngine();
        velocity.init();
        Template template = velocity.getTemplate("src/main/resources/template/emailTemplate.vm");

        StringWriter writer = new StringWriter();
        template.merge(context, writer);

        result = writer.toString();

        return result;
	}

}
