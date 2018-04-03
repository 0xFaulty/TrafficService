package cloud.traffic.server.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ExceptionHandlerAdvice {

    private static final Logger LOG = LoggerFactory.getLogger(ExceptionHandlerAdvice.class);

    @ExceptionHandler(Exception.class)
    public ResponseEntity handle(Exception e) {
        LOG.info("Error: " + e.getMessage());
        return ResponseEntity
                .status(HttpStatus.FORBIDDEN)
                .body("Server internal error");
    }

    @ExceptionHandler(NumberFormatException.class)
    public ResponseEntity handle(NumberFormatException e) {
        LOG.info("Wrong number: " + e.getMessage());
        return ResponseEntity
                .status(HttpStatus.FORBIDDEN)
                .body("Wrong camera number");
    }

}