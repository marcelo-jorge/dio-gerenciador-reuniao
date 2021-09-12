package dio.backend.service;

import dio.backend.model.Sala;
import dio.backend.repository.SalaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SalaService {

    SalaRepository salaRepository;

    @Autowired
    public SalaService(SalaRepository salaRepository) {
        this.salaRepository = salaRepository;
    }

    public Sala create(Sala sala){
        return salaRepository.save(sala);
    }

    public Sala update(Sala sala){
        return salaRepository.save(sala);
    }

    public void delete(Long id){
        salaRepository.deleteById(id);
    }

    public List<Sala> findAll(){
        return salaRepository.findAll();
    }

    public Optional<Sala> findById(Long id){
        return salaRepository.findById(id);
    }
}
