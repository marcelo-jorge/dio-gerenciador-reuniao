package dio.backend.service;

import dio.backend.model.Room;
import dio.backend.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomService {

    RoomRepository roomRepository;

    @Autowired
    public RoomService(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    public Room create(Room room){
        return roomRepository.save(room);
    }

    public Room update(Room room){
        return roomRepository.save(room);
    }

    public void delete(Long id){
        roomRepository.deleteById(id);
    }

    public List<Room> findAll(){
        return roomRepository.findAll();
    }

    public Optional<Room> findById(Long id){
        return roomRepository.findById(id);
    }
}
