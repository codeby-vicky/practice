package com.example.demo.student;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class StudentService {

    	public List<Students> getStudents(){
        		return List.of(new Students(
			1L,
			"Vignesh",
			"vicky123@gmail.com",
			LocalDate.of(2004, Month.JUNE, 22),
			22
		));

	}
}
