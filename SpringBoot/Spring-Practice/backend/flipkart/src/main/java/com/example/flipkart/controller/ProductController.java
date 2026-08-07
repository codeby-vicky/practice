package com.example.flipkart.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.flipkart.model.Product;
import com.example.flipkart.repository.ProductRepository;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    @Autowired
    private ProductRepository productRepository; 

    @PostMapping("/create")
    public Product createproduct(@RequestBody Product product) {
       return productRepository.save(product);

    }
    
    @GetMapping("/read")
    public List<Product> readproduct() {
        return productRepository.findAll();
    }

    @DeleteMapping("/del/{id}")
    public String delete(@PathVariable Long id){
        productRepository.deleteById(id);
        return "Deleted Successfully";
    }

    
}
