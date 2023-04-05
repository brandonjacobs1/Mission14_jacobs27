using Microsoft.AspNetCore.Mvc;
using backend.Models;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class MovieController : ControllerBase
{
    private MovieContext _context;

    public MovieController(MovieContext context){
        _context = context;
    }
    [HttpGet]
    public IEnumerable<Movie> Get() {
        var allMovies = _context.Movies
        .Where(x => x.Edited == "Yes")
        .OrderBy(x => x.Title)
        .ToArray();

        return allMovies;
    }
    // [HttpPost]
    // public void Post(Movie movie){
        
    // }
}