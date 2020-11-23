package com.pritesh.bootstrap;

import com.pritesh.model.Employee;
import com.pritesh.repository.EmployeeRepository;
import org.springframework.boot.CommandLineRunner;

public class DataLoader implements CommandLineRunner {

  private final EmployeeRepository employeeRepository;

  public DataLoader(EmployeeRepository employeeRepository) {
    this.employeeRepository = employeeRepository;
  }

  @Override
  public void run(String... args) throws Exception {
    Employee emp1 = new Employee();
    emp1.setId(1L);
    emp1.setFirstName("");
  }
}
