package com.example.hotel.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.hotel.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

}