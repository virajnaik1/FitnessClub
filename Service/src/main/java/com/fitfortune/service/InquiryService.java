package com.fitfortune.service;

import java.io.IOException;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Properties;
import java.util.StringJoiner;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.apache.velocity.VelocityContext;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;

import com.fitfortune.DAO.Impl.InquiryMasterDAO;
import com.fitfortune.modal.InquiryMaster;
import com.fitfortune.util.VelocityUtil;
import com.razorpay.Invoice;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;

@Service
public class InquiryService {
		
	private static final Logger log = LoggerFactory.getLogger(InquiryService.class);

	@Autowired
	private InquiryMasterDAO inquiryMasterDAO;
	
	@Autowired
	private VelocityUtil velocityUtil;
	
	@Value("razor.pay.key")
	private String razorPayKey;
	
	@Value("razor.pay.secret")
	private String razorPaySecret;
	
	@Value("razor.pay.type")
	private String razorPayType;
	
	@Value("razor.pay.description.prefix")
	private String razorPayDescriptionPrefix;

	public void save(InquiryMaster inquiryMaster) {
		inquiryMasterDAO.save(inquiryMaster);
	}

	public List<InquiryMaster> getAll() {
		return inquiryMasterDAO.getAll();
	}

	public void update(Long id, String status) {
		inquiryMasterDAO.update(id, status);
	}

	public Optional<InquiryMaster> fetchById(Long id) {
		return inquiryMasterDAO.findById(id);
	}
	
	public void sendEmailWithPayment(Long id, Double cost) {
		try {
			Optional<InquiryMaster> optionalInquiryMaster = fetchById(id);
			if (optionalInquiryMaster.isPresent()) {
				InquiryMaster inquiryMaster = optionalInquiryMaster.get();
				inquiryMaster.setStatus("L");
				save(inquiryMaster);
				sendmail(inquiryMaster,cost);
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}
	}

	private void sendmail(InquiryMaster inquiryMaster,Double cost) throws AddressException, MessagingException, IOException, RazorpayException {
		VelocityContext context = new VelocityContext();
		context.put("firstName", inquiryMaster.getFirstName());
		context.put("customerId", inquiryMaster.getId());
		context.put("paymentLink", getPaymentUrL(cost, inquiryMaster));

		String body = velocityUtil.geContentFromTemplate(context);
		
		Properties props = new Properties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.port", "587");

		Session session = Session.getInstance(props, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication("fitfortune15@gmail.com", "suhas1491");
			}
		});
		Message msg = new MimeMessage(session);
		msg.setFrom(new InternetAddress("fitfortune15@gmail.com", false));

		msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(inquiryMaster.getEmailId()));
		msg.setSubject("Welcome to Weightloss Program");
		msg.setSentDate(new Date());

		MimeBodyPart messageBodyPart = new MimeBodyPart();
		messageBodyPart.setContent(body,"text/html");

		Multipart multipart = new MimeMultipart();
		multipart.addBodyPart(messageBodyPart);

		msg.setContent(multipart);
		Transport.send(msg);
	}
	
	private String getPaymentUrL(Double cost, InquiryMaster inquiryMaster) throws RazorpayException {
		Calendar calendar=Calendar.getInstance();
		calendar.setTime(new Date());
		calendar.add(Calendar.HOUR_OF_DAY, 30);
		log.info("timestamp= "+calendar.getTimeInMillis());
		
		RazorpayClient client = new RazorpayClient("rzp_test_X96evLZAdruFxr", "WKWoIT0mFcye4MfyAMT1OApL");
		String customerName = inquiryMaster.getFirstName() + " " + inquiryMaster.getLastName();

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		JSONObject customerJsonObject = new JSONObject();
		customerJsonObject.put("name", customerName);
		customerJsonObject.put("email", inquiryMaster.getEmailId());
		customerJsonObject.put("contact", inquiryMaster.getPhoneNo());
		
		JSONObject personJsonObject = new JSONObject();
		personJsonObject.put("customer", customerJsonObject);
		personJsonObject.put("type", "link");
		personJsonObject.put("amount", Math.round(cost * 100));
		personJsonObject.put("sms_notify", 1);
		personJsonObject.put("email_notify", 1);
		personJsonObject.put("reminder_enable", true);
		personJsonObject.put("expire_by", calendar.getTimeInMillis()/1000);
		personJsonObject.put("description", razorPayDescriptionPrefix + customerName);

		Invoice entity = client.Invoices.create(personJsonObject);

		return entity.has("short_url") ? entity.get("short_url") : "";
	}
}
