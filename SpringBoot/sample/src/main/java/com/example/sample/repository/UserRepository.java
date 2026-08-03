package com.example.sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.sample.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}