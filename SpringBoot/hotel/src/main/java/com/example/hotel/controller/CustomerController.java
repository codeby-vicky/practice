package com.example.hotel.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.hotel.model.Customer;
import com.example.hotel.repository.CustomerRepository;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    @PostMapping("/create")
    public Customer createCustomer(@RequestBody Customer customer) {
        return customerRepository.save(customer);
    }

    @GetMapping("/read")
    public List<Customer> readCustomers() {
        return customerRepository.findAll();
    }

    @GetMapping("/read/{id}")
    public Optional<Customer> readCustomer(@PathVariable Long id) {
        return customerRepository.findById(id);
    }

    @PutMapping("/update/{id}")
    public Customer updateCustomer(
            @PathVariable Long id,
            @RequestBody Customer customer) {

        customer.setId(id);

        return customerRepository.save(customer);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteCustomer(@PathVariable Long id) {

        customerRepository.deleteById(id);

        return "Customer deleted successfully";
    }
}