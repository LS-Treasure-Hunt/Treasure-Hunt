// automatically traverse, pick up, go back to shop, sell treasures

import { initGame, take, sell, playerStatus } from "../actions/general";
import { move, fly, recall } from "../actions/movement";
import { getPathToRoom } from "./traverse";

export async function sellTreasure(dispatch, room, inventory) {
  if (room.room_id !== 0 && room.room_id !== 1) {
    await recall(dispatch);
  }

  if (room.room_id !== 1) {
    // encumbered flight is worse than encumbered move
    await move(dispatch, "w", 1);
    console.log("Going to shop");
  }

  console.log("Inventory", inventory);
  for (let i = 0; i < inventory.length; i++) {
    await sell(dispatch, inventory[i]);
  }
}

export async function collectTreasure(dispatch, map, attempts) {
  let count = 0;
  //Initialize current player location
  await initGame(dispatch);

  while (count < attempts) {
    await traverseForGold(dispatch, Math.floor(Math.random() * 499), map);
    count++;
  }
}

export async function traverseForGold(dispatch, target, map) {
  let room = await initGame(dispatch);

  let path = getPathToRoom(map[room.room_id], map, target);
  // console.log("room", room, "path", path);

  return await walkBackForGold(dispatch, path);
}

export async function walkBackForGold(dispatch, path) {
  let startingRoom = path.shift();
  let nextRoom = null;
  let player = await playerStatus(dispatch);
  let newRoom = await initGame(dispatch);

  // console.log("walkBack path", path, "startingRoom", startingRoom);

  while (path.length > 0 && player.encumbrance < player.strength) {
    nextRoom = path.shift();
    let directions = ["n", "s", "e", "w"];

    for (let dir of directions) {
      if (startingRoom.neighbors[dir] === nextRoom.room_id) {
        if (nextRoom.terrain !== "CAVE") {
          newRoom = await fly(dispatch, dir, `${nextRoom.room_id}`);
          console.log("FLYING", newRoom);
        } else {
          newRoom = await move(dispatch, dir, nextRoom.room_id);
          console.log("BOOSTED", newRoom);
        }
        startingRoom = nextRoom;
        console.log("COOLDOWN", newRoom.cooldown);

        while (newRoom.items.length > 0) {
          let collected = await take(dispatch, newRoom.items[0]);
          console.log("COLLECTING ITEMS!", "Items", newRoom.items);
          newRoom = collected;
          player = await playerStatus(dispatch);
        }
        break;
      }
    }
  }
  if (player.encumbrance >= player.strength) {
    // put in option to go to transmorg
    console.log(
      `Selling due to encumbrance. Current gold before selling: ${player.gold}`
    );
    await sellTreasure(dispatch, newRoom, player.inventory);
  }
  return startingRoom;
}
