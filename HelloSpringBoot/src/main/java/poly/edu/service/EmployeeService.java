package poly.edu.service;

import poly.edu.entity.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeService {
    List<Employee> getAll();

    List<Employee> findByName(String name);

    Employee getOne(Integer id);

    void delete(Integer id);

    void save(Employee employee);
}
