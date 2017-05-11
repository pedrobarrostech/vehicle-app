package com.pedroaugust8.vehicle;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * @author Pedro Barros
 */
public interface VehicleDaoMongo extends MongoRepository<Vehicle, String> {
}
