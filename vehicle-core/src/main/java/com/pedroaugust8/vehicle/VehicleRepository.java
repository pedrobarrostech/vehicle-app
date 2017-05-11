package com.pedroaugust8.vehicle;

import java.util.List;

/**
 * @author Pedro Barros
 */
public interface VehicleRepository {
    List<Vehicle> list();

    Vehicle get(String id);

    void save(Vehicle vehicle);

    void delete(String id);
}
