using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using SimpleProjectApp.Models;

namespace SimpleProjectApp
{
    public class MyDbContext : DbContext
    {
        public DbSet<Student> Students { get; set; }
    }
}