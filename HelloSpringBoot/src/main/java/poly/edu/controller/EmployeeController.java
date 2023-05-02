package poly.edu.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import poly.edu.entity.Employee;
import poly.edu.service.EmployeeService;

import java.util.List;

@RestController
@CrossOrigin(originPatterns = {"http://127.0.0.1:8080/","http://localhost:8080/"})
@RequestMapping("/api")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("employee")
    public List<Employee> getAll() {
        return employeeService.getAll();
    }

    @GetMapping("employee/search/{name}")
    public List<Employee> findByName(@PathVariable String name){
        return employeeService.findByName(name);
    }

    @GetMapping("employee/{id}")
    public Employee getOne(@PathVariable Integer id) {
        return employeeService.getOne(id);
    }

    @DeleteMapping("employee/{id}")
    public void delete(@PathVariable Integer id) {
        employeeService.delete(id);
    }

    @PostMapping("employee")
    public void add(@RequestBody @Valid Employee employee) {
        employeeService.save(employee);
    }

    @PutMapping("employee/{id}")
    public void update(@RequestBody @Valid Employee employee) {
        employeeService.save(employee);
    }
}
