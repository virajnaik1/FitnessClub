package com.fitfortune.modal;

import javax.persistence.Column;

import lombok.Generated;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@Generated
@ToString
public class BaseEntity {
	
	@Column(name="creatorId")
	private String creatorId;
	
}