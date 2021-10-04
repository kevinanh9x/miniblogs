package com.speedhome.poc.service.repository;

import com.speedhome.poc.service.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<ProductEntity,String> {
    boolean existsById(String id);
}
