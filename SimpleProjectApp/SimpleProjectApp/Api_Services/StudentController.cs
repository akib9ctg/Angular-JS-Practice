using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SimpleProjectApp.Models;

namespace SimpleProjectApp.Api_Services
{
    public class StudentController : ApiController
    {
        
        // GET api/<controller>
        [HttpGet]
        [ActionName("AllStudent")]
        public List<Student> AllStudent()
        {
            MyDbContext myDbContext = new MyDbContext();
            List < Student > aa= myDbContext.Students.ToList();
            return aa;
        }

       

        // POST api/<controller>
        [HttpPost]
        [ActionName("SaveStudent")]
        public void SaveStudent([FromBody]Student student)
        {
            MyDbContext myDbContext=new MyDbContext();
            myDbContext.Students.Add(student);
            myDbContext.SaveChanges();
        }

        // PUT api/<controller>/5
        public void Put(int? id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int? id)
        {
        }
    }
}