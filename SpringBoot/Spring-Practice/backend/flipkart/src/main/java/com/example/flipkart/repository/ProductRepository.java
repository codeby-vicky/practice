package com.example.flipkart.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.flipkart.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

}
