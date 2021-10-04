package com.speedhome.poc.service.service;

import com.speedhome.poc.service.mapper.ContactMapper;
import com.speedhome.poc.service.mock.ContactData;
import com.speedhome.poc.service.repository.ContactRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class ContactServiceTest {
    @InjectMocks
    ContactService contactService;

    @Mock
    ContactRepository contactRepository;

    @Mock
    ContactMapper contactMapper;

    @Test
    public void createContact(){
        contactService.createContact(ContactData.mockContactReq());
    }

    @Test
    public void updateContact() {
        contactService.updateContact(ContactData.idContact,ContactData.mockContactReq());
    }

    @Test
    public void removeContact(){
        contactService.removeContact(ContactData.idContact);
    }
    @Test
    public void getAllContact(){
        contactService.getAllContact();
    }

}
