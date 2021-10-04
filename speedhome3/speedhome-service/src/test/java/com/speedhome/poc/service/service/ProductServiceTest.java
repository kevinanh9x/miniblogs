package com.speedhome.poc.service.service;

import com.speedhome.poc.service.mapper.ProductMapper;
import com.speedhome.poc.service.mock.ProductData;
import com.speedhome.poc.service.repository.ProductRepository;
import junit.framework.TestCase;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class ProductServiceTest extends TestCase {
    @InjectMocks
    ProductService productService;
    @Mock
    ProductRepository productRepository;
    @Mock
    ProductMapper productMapper;

    @Test
    public void createProduct(){
        productService.createProduct(ProductData.mockProductReq());
    }
    @Test
    public void updateProduct() {
        productService.updateProduct(ProductData.idProduct,ProductData.mockProductReq());
    }

    @Test
    public void removeProduct(){
        productService.removeProduct(ProductData.idProduct);
    }
    @Test
    public void getAllProduct(){
        productService.getAllProduct();
    }
}
