package com.example.demo.securityfilter;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class UserSecurity {

    @Bean
    public SecurityFilterChain securityfilterchain(HttpSecurity http) throws Exception {

        http.authorizeHttpRequests((h) -> {

            h.requestMatchers(HttpMethod.POST, "/fi/sec").permitAll()

             .requestMatchers("/fi/sec/**").authenticated()

             .anyRequest().permitAll();

        })

        .formLogin(Customizer.withDefaults())

        .csrf((h) -> h.disable());

        return http.build();
    }



    @Bean
    public UserDetailsService userdetailsservice(PasswordEncoder passwordEncoder) {

        UserDetails user = User.withUsername("maha")
                .password(passwordEncoder.encode("maha2123"))
                .roles("admin")
                .build();

        UserDetails user2 = User.withUsername("viji")
                .password(passwordEncoder.encode("viji@123"))
                .roles("sales")
                .build();

        return new InMemoryUserDetailsManager(user, user2);
    }


    

    @Bean
    public PasswordEncoder passwordEncoder() {

        return new BCryptPasswordEncoder();
    }
}