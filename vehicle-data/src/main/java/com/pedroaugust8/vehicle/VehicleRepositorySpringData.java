package com.pedroaugust8.vehicle;

import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

/**
 * @author Pedro Barros
 */
@Repository
public class VehicleRepositorySpringData implements VehicleRepository {

    private final VehicleDaoMongo dao;

    @Autowired
    public VehicleRepositorySpringData(final VehicleDaoMongo dao) {
        this.dao = dao;
    }

    @Override
    public List<Vehicle> list() {
        return dao.findAll();
    }

    @Override
    public Vehicle get(String id) {
        return dao.findOne(id);
    }

    @Override
    public void save(Vehicle vehicle) {
        dao.save(vehicle);
    }

    @Override
    public void delete(String id) {
        dao.delete(id);
    }
}