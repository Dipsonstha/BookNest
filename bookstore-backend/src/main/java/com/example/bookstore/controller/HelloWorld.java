package com.example.bookstore.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.HashSet;

@RestController
@RequestMapping("/")
public class HelloWorld {

    @GetMapping("/")
    ResponseEntity<?> getHelloWorld(){
        HashMap<String,String> message = new HashMap<>();

        message.put("message","Hello world");
        message.put("massag","Hello");
        message.put("messe","world");

        return ResponseEntity.ok(message);

    }
}
