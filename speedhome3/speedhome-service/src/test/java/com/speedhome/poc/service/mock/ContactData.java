package com.speedhome.poc.service.mock;

import com.speedhome.poc.api.model.ContactRequest;

public class ContactData {
    public static final String idContact = "D34543df-sa23-44f2-543d-6y454213d5f";
    private static final String NAME="Nguyen The Anh";
    private static final String EMAIL="theanh4497@gmail.com";
    private static final String MESSAGE="successfully";

    public static ContactRequest mockContactReq(){
        ContactRequest contactRequest = new ContactRequest();
        contactRequest.setId(idContact);
        contactRequest.setName(NAME);
        contactRequest.setEmail(EMAIL);
        contactRequest.setMessage(MESSAGE);
        return contactRequest;
    }

}
