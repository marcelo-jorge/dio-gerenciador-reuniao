package dio.backend.controller;

import dio.backend.exception.ResourceNotFoundException;
import dio.backend.model.Room;
import dio.backend.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class RoomController {

    RoomService roomService;

    @Autowired
    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    @PostMapping("/rooms")
    public Room create(@RequestBody Room room){
        return  roomService.create(room);
    }

    @PutMapping("/rooms/{id}")
    public ResponseEntity<Room> update(@PathVariable(value = "id") Long roomId,@Valid @RequestBody Room roomDetails)
    throws ResourceNotFoundException{
        Room room = roomService.findById(roomId).orElseThrow(
                () -> new ResourceNotFoundException("Room not found for this id: " + roomId)
        );
        room.setName(roomDetails.getName());
        room.setDate(roomDetails.getDate());
        room.setStartHour(roomDetails.getStartHour());
        room.setEndHour(roomDetails.getEndHour());
        final Room updateRoom = roomService.create(room);
        return  ResponseEntity.ok(updateRoom);
    }

    @DeleteMapping("/rooms/{id}")
    public HttpStatus delete(@PathVariable Long id){
        try{
            roomService.delete(id);
            return HttpStatus.OK;
        }catch (Exception ex){
            new ResourceNotFoundException("Id não encontrado: " + id);
            return HttpStatus.NOT_FOUND;
        }
    }

    @GetMapping("/rooms")
    public List<Room> findAll(){
        return roomService.findAll();
    }

    @GetMapping("/rooms/{id}")
    public ResponseEntity<Room> findById(@PathVariable Long id) throws ResourceNotFoundException {
        Room room =  roomService.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Id Não encontrado: " + id)
        );
        return ResponseEntity.ok().body(room);
    }
}
