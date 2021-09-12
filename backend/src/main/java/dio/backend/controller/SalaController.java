package dio.backend.controller;

import dio.backend.exception.ResourceNotFoundException;
import dio.backend.model.Sala;
import dio.backend.service.SalaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/sala")
public class SalaController {

    SalaService salaService;

    @Autowired
    public SalaController(SalaService salaService) {
        this.salaService = salaService;
    }

    @PostMapping
    public Sala create(@RequestBody Sala sala){
        return  salaService.create(sala);
    }

    @PutMapping
    public Sala update(@RequestBody Sala sala){
        return  salaService.update(sala);
    }

    @DeleteMapping("/{id}")
    public HttpStatus delete(@PathVariable Long id){
        try{
            salaService.delete(id);
            return HttpStatus.OK;
        }catch (Exception ex){
            new ResourceNotFoundException("Id não encontrado: " + id);
            return HttpStatus.NOT_FOUND;
        }
    }

    @GetMapping
    public List<Sala> findAll(){
        return salaService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Sala> findById(@PathVariable Long id) throws ResourceNotFoundException {
        Sala sala =  salaService.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Id Não encontrado: " + id)
        );
        return ResponseEntity.ok().body(sala);
    }
}
