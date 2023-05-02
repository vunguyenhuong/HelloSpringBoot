package poly.edu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import poly.edu.entity.Employee;
import poly.edu.repository.EmployeeRepository;
import poly.edu.service.EmployeeService;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    @Override
    public List<Employee> getAll() {
        return repository.findAll();
    }

    @Override
    public List<Employee> findByName(String name) {
        return repository.findEmployeesByNameContainingIgnoreCase(name);
    }

    @Override
    public Employee getOne(Integer id) {
        return repository.findEmployeeById(id);
    }

    @Override
    public void delete(Integer id) {
        repository.deleteById(id);
    }

    @Override
    public void save(Employee employee) {
        repository.save(employee);
    }
}
