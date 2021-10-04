package com.speedhome.poc.service.entity;

import org.springframework.stereotype.Indexed;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Indexed
@Entity
@Table(name = "Contact")
public class ContactEntity {
    @Id
    @Column(name = "CONTACT_ID",nullable = false)
    private String id;
    @Column(name = "NAME",nullable = false)
    private String name;
    @Column(name = "EMAIL",nullable = false)
    private String email;
    @Column(name = "MESSAGE",nullable = false)
    private String message;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
