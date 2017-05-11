package com.pedroaugust8.vehicle;

import java.util.Objects;

/**
 * @author Pedro Barros
 */
public class Vehicle {
    
    private String id;
    
    private String plate;
    
    private String image;

    public String getId() {
        return id;
    }

    public String getPlate() {
        return plate;
    }

    public String getImage() {
        return image;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Vehicle vehicle = (Vehicle) o;
        return Objects.equals(id, vehicle.id) &&
                Objects.equals(plate, vehicle.plate) &&
                Objects.equals(image, vehicle.image);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, plate);
    }

    @Override
    public String toString() {
        return "Vehicle{id='" + id + "', plate='" + plate + "', image='" + image + "'}";
    }
}