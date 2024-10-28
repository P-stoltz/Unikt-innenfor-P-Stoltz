import {
    Project,
    Sprite,
  } from "https://unpkg.com/leopard@^1/dist/index.esm.js";
  
  import Stage from "./Stage/Stage.js";
  import Rampe from "./Rampe/Rampe.js";
  import Sled from "./Sled/Sled.js";
  import Snowflake from "./Snowflake/Snowflake.js";
  import Start from "./Start/Start.js";
  import SnowballSide from "./SnowballSide/SnowballSide.js";
  import SnowballTop from "./SnowballTop/SnowballTop.js";
  
  const stage = new Stage({ costumeNumber: 3 });
  
  const sprites = {
    Rampe: new Rampe({
      x: -103.99999103546202,
      y: -31.859797256486935,
      direction: 90,
      rotationStyle: Sprite.RotationStyle.ALL_AROUND,
      costumeNumber: 1,
      size: 100,
      visible: false,
      layerOrder: 5,
    }),
    Sled: new Sled({
      x: -100,
      y: -135,
      direction: 90,
      rotationStyle: Sprite.RotationStyle.ALL_AROUND,
      costumeNumber: 2,
      size: 100,
      visible: false,
      layerOrder: 6,
    }),
    Snowflake: new Snowflake({
      x: 0,
      y: 100,
      direction: 90,
      rotationStyle: Sprite.RotationStyle.ALL_AROUND,
      costumeNumber: 1,
      size: 100,
      visible: false,
      layerOrder: 1,
    }),
    Start: new Start({
      x: 21.448853464199487,
      y: 28.71955865482257,
      direction: 90,
      rotationStyle: Sprite.RotationStyle.ALL_AROUND,
      costumeNumber: 1,
      size: 100,
      visible: false,
      layerOrder: 2,
    }),
    SnowballSide: new SnowballSide({
      x: 262,
      y: 0,
      direction: 90,
      rotationStyle: Sprite.RotationStyle.ALL_AROUND,
      costumeNumber: 1,
      size: 100,
      visible: false,
      layerOrder: 4,
    }),
    SnowballTop: new SnowballTop({
      x: 0,
      y: 200,
      direction: 90,
      rotationStyle: Sprite.RotationStyle.ALL_AROUND,
      costumeNumber: 2,
      size: 100,
      visible: false,
      layerOrder: 3,
    }),
  };
  
  const project = new Project(stage, sprites, {
    frameRate: 30, // Set to 60 to make your project run faster
  });
  export default project;
  