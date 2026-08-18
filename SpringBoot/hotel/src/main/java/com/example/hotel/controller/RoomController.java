package com.example.hotel.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.hotel.model.Room;
import com.example.hotel.repository.RoomRepository;

@RestController
@RequestMapping("/room")
@CrossOrigin(origins = "http://localhost:3000")
public class RoomController {

    @Autowired
    private RoomRepository roomRepository;

    @PostMapping("/create")
    public Room createRoom(@RequestBody Room room) {
        return roomRepository.save(room);
    }

    @GetMapping("/read")
    public List<Room> readRooms() {
        return roomRepository.findAll();
    }

    @GetMapping("/read/{id}")
    public Optional<Room> readRoom(@PathVariable Long id) {
        return roomRepository.findById(id);
    }

    @PutMapping("/update/{id}")
    public Room updateRoom(
            @PathVariable Long id,
            @RequestBody Room room) {

        room.setId(id);

        return roomRepository.save(room);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteRoom(@PathVariable Long id) {

        roomRepository.deleteById(id);

        return "Room deleted successfully";
    }
}