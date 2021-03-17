using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MyApiController : ControllerBase
    {
        private static readonly string[] data = new[]
        {
            "Data", "More Data", "And More"
        };

        private readonly ILogger<MyApiController> _logger;

        public MyApiController(ILogger<MyApiController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<MyApi> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 3).Select(index => new MyApi
            {
                Date = DateTime.Now.AddDays(index),
                key = rng.Next(1, 99).ToString(),
                data = data[rng.Next(data.Length)]
            })
            .ToArray();
        }
    }
}
