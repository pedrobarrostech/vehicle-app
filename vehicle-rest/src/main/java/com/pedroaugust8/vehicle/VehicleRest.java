package com.pedroaugust8.vehicle;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.pedroaugust8.vehicle.Vehicle;
import com.pedroaugust8.vehicle.ErrorResponse;
import com.pedroaugust8.vehicle.VehicleException;

/**
 * @author Pedro Barros
 */
@RestController
@CrossOrigin
@RequestMapping("/vehicles")
public class VehicleRest {
    private final VehicleRepository vehicleRepository;

    @Autowired
    public VehicleRest(final VehicleRepository vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Vehicle> list() {
        return vehicleRepository.list();
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Vehicle> create(@RequestBody Vehicle vehicle) throws VehicleException {
    		vehicleRepository.save(vehicle);
    		return new ResponseEntity<Vehicle>(vehicle, HttpStatus.OK);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> delete(@PathVariable("id") final String id) throws VehicleException {
		vehicleRepository.delete(id);
        return new ResponseEntity<Object>(HttpStatus.OK);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public Vehicle get(@PathVariable("id") final String id) {
        return vehicleRepository.get(id);
    }
    
    @ExceptionHandler(VehicleException.class)
	public ResponseEntity<ErrorResponse> exceptionHandler(Exception ex) {
		ErrorResponse error = new ErrorResponse();
		error.setErrorCode(HttpStatus.PRECONDITION_FAILED.value());
		error.setMessage(ex.getMessage());
		return new ResponseEntity<ErrorResponse>(error, HttpStatus.OK);
	}
}