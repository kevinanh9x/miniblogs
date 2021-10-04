package com.speedhome.poc.service.mock;

import com.speedhome.poc.api.model.ProductRequest;
import com.speedhome.poc.api.model.Products;


public class ProductData {
    public static final String idProduct = "C34543df-sa23-44f2-543d-6y454213d5f";
    private static final String TITLE="Where far wow thus a squirrel";
    private static final String IMAGE="image-1.jpg";
    private static final String DECRIPSTION="......Thus a squirrel racconon jezz jaguar this form along.....";
    private static final String TIME="2021/06/09";
    private static final String CATEGORY="Art";
    private static final String CONTEXT="....Where far wow thus a squirrel racconon jezz jaguar this form along.....";

    public static ProductRequest mockProductReq(){
        ProductRequest productRequest = new ProductRequest();
        productRequest.setTitle(TITLE);
        productRequest.setImage(IMAGE);
        productRequest.setDescription(DECRIPSTION);
        productRequest.setTime(TIME);
        productRequest.setCategory(CATEGORY);
        productRequest.setContext(CONTEXT);
        return productRequest;
    }



}
