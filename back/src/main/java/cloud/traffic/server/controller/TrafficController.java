package cloud.traffic.server.controller;

import cloud.traffic.server.service.TrafficService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping(value = "/service")
public class TrafficController {

    @Autowired
    private TrafficService trafficService;

    @GetMapping(value = "/camera/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getApiVersion(@PathVariable("id") String id) throws NumberFormatException {
        return new ResponseEntity<>(trafficService.getStatistic(Integer.parseInt(id)), HttpStatus.OK);
    }

}
