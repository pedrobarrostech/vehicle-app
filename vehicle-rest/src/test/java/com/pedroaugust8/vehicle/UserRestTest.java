/*
package com.pedroaugust8.vehicle;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class VehicleRestTest {
	private VehicleRest target;
	private List<Vehicle> mockList;
	private VehicleRepository service;
	private List<Vehicle> actualList;

	@Before
	public void setup(){
		mockList = mock(List.class);
		
		service = mock(VehicleRepository.class);
		when(service.list()).thenReturn(mockList);
		
		target = new VehicleRest(service);
	}
	
	@Test
	public void save(){
		Vehicle Vehicle = new Vehicle();
		
		try {
			target.create(Vehicle);
		} catch (VehicleException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		verify(service).save(Vehicle);
	}
	
	@Test
	public void list(){
		actualList = target.list();
		Assert.assertEquals(mockList, actualList);
	}
	
	
	/*@Test
	public void delete(){
		
		try {
			target.delete(actualList.get(0).getId());
		} catch (VehicleException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		verify(service).delete(actualList.get(0).getId());
		
	}
	
	
	
	
	
}*/