import { dashBack, withDash } from "./powers";
import { initGame, move, SET_PATH } from "../actions";

export function getPathToRoom(startingRoom, graph, roomId) {
  console.log("STARTING ROOM BFS", startingRoom);
  let queue = [];
  queue.push([startingRoom]);
  const visited = new Set();
  while (queue.length > 0) {
    let path = queue.shift();
    let room = path[path.length - 1];
    //Condition to return path when given room id is found aka shop, return that path, otherwise keep searching for it
    if (room.room_id === roomId) {
      return path;
    }
    if (!visited.has(room.room_id)) {
      visited.add(room.room_id);
      let neighbors = graph[room.room_id].neighbors;
      for (let neighbor in neighbors) {
        let new_path = [...path, graph[neighbors[neighbor]]];
        queue.push(new_path);
      }
    }
  }
}

export async function traverse(
  dispatch,
  target,
  map,
  dash = false,
  fly = false
) {
  let room = await initGame(dispatch);

  let path = getPathToRoom(map[room.room_id], map, target);
  console.log("room", room, "path", path);
  dispatch({ type: SET_PATH, payload: path });

  if (dash === true) {
    path = withDash(path, map);
    console.log("Dashed path", path);
    return await dashBack(dispatch, path);
  } else {
    console.log("Normal path", path);
    return await moveBack(dispatch, path);
  }
}

export async function moveBack(dispatch, path) {
  let startingRoom;
  while (path.length > 0) {
    startingRoom = path.shift();
    let direction = startingRoom[0];
    for (let i = 1; i < startingRoom.length; i++) {
      console.log(startingRoom);
      await move(dispatch, direction, `${startingRoom[i].room_id}`);
    }
  }
}
