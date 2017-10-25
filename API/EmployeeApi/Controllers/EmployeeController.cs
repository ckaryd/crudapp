using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using EmployeeApi.Models;
using System.Linq;

namespace EmployeeApi.Controllers
{
    [Route("api/employees")]
    public class EmployeeController : Controller
    {
        private readonly EmployeeContext _context;

        public EmployeeController(EmployeeContext context)
        {
            _context = context;

            if (_context.Employees.Count() == 0)
            {
                _context.Employees.Add(new Employee { Name = "Christos", Surname = "Karydis", Age = 30, Gender="Male" });
                _context.SaveChanges();
            }
        }
        /*Read Operation*/
        [HttpGet]
        public IEnumerable<Employee> GetAll()
        {
            return _context.Employees.ToList();
        }

        [HttpGet("{id}", Name = "GetEmployee")]
        public IActionResult GetById(long id)
        {
            var item = _context.Employees.FirstOrDefault(t => t.EmployeeId == id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        /*Create Operation*/
        [HttpPost]
        public IActionResult Create([FromBody] Employee employee)
        {
            
            if (employee == null)
            {
                return BadRequest();
            }
            
            _context.Employees.Add(employee);
            _context.SaveChanges();

            return CreatedAtRoute("GetEmployee", new { id = employee.EmployeeId }, employee);
        }

        /*Update Operation*/
        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] Employee employee)
        {
            if (employee == null || employee.EmployeeId != id)
            {
                return BadRequest();
            }

            var employ = _context.Employees.FirstOrDefault(t => t.EmployeeId == id);
            if (employ == null)
            {
                return NotFound();
            }

            
            employ.Name = employee.Name;
            employ.Surname = employee.Surname;
            employ.Age = employee.Age;
            employ.Gender = employee.Gender;

            _context.Employees.Update(employ);
            _context.SaveChanges();
            return new NoContentResult();
        }

        /*Delete Operation*/
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var employ = _context.Employees.FirstOrDefault(t => t.EmployeeId == id);
            if (employ == null)
            {
                return NotFound();
            }

            _context.Employees.Remove(employ);
            _context.SaveChanges();
            return new NoContentResult();
        }

    }
}