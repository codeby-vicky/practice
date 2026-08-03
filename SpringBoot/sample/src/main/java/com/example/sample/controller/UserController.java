package com.example.sample.controller; 
import java.util.List; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.*; 
import com.example.sample.model.User; 
import com.example.sample.repository.UserRepository; 
@RestController 
@RequestMapping("/fi") 
public class UserController 
    {
     @Autowired private UserRepository repo; 
     @PostMapping("/sec") 
     public User my(@RequestBody User user) 
     { 
        return repo.save(user); 
    } 
    
    @GetMapping("/thi") 
    public List<User> abc() 
    { 
        return repo.findAll(); 
    } 
}
