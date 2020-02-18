//COLORS
let Colors = {
    red:0xf25346,
    white:0xd8d0d1,
    brown:0x59332e,
    pink:0xF5986E,
    brownDark:0x23190f,
    blue:0x68c3c0,
  };
  
  // THREEJS RELATED VARIABLES
  
  let scene,
    camera, fieldOfView, aspectRatio, nearPlane, farPlane,
    renderer, container;
  
  
  //INIT THREE JS, SCREEN AND MOUSE EVENTS
  
  function createScene() {
  
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  
  scene = new THREE.Scene();
  aspectRatio = WIDTH / HEIGHT;
  fieldOfView = 100;
  nearPlane = 1;
  farPlane = 10000;
  camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane
    );  
  
  // scene.fog = new THREE.Fog(0xf7d9aa, 100,950);
  camera.position.x = 1200;
  camera.position.z = 100;
  camera.position.y = 600;
  camera.rotation.x = 0;
  camera.rotation.y = 0 ;
  
  
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(WIDTH, HEIGHT);
  renderer.shadowMap.enabled = true;
  container = document.getElementById('world');
  container.appendChild(renderer.domElement);
  window.addEventListener('resize', handleWindowResize, false);
  
  }
  
  // HANDLE SCREEN EVENTS
  
  function handleWindowResize() {
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  renderer.setSize(WIDTH, HEIGHT);
  camera.aspect = WIDTH / HEIGHT;
  camera.updateProjectionMatrix();
  }
  
  
  
  
  // LIGHTS
  
  let ambientLight, hemisphereLight, shadowLight;
  
  function createLights() {
  
  hemisphereLight = new THREE.HemisphereLight(0xaaaaaa,0x000000, .9)
  shadowLight = new THREE.DirectionalLight(0xffffff, .9);
  shadowLight.position.set(-1200, 500, 300);
  shadowLight.castShadow = true;
  shadowLight.shadow.camera.left = -400;
  shadowLight.shadow.camera.right = 400;
  shadowLight.shadow.camera.top = 400;
  shadowLight.shadow.camera.bottom = -400;
  shadowLight.shadow.camera.near = 1;
  shadowLight.shadow.camera.far = 1000;
  shadowLight.shadow.mapSize.width = 2048;
  shadowLight.shadow.mapSize.height = 2048;
  
  scene.add(hemisphereLight);
  scene.add(shadowLight);
  
  }
  let Bedroom = function(){
    controls = new THREE.OrbitControls (camera, renderer.domElement);
    this.mesh = new THREE.Object3D();
    this.mesh.name = "Bedroom";

    let geomFloorBase= new THREE.BoxGeometry(3000,100,4300,1,1,1);
    let textureFloor = new THREE.TextureLoader().load('assets/textures/floor.jpg' );
    let matFloor = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureFloor});
    let floorBase = new THREE.Mesh(geomFloorBase, matFloor);
    floorBase.position.x=-2200;
    floorBase.position.y=-400;
    floorBase.position.z=1800;
    floorBase.castShadow = true;
    floorBase.receiveShadow = true;
    this.mesh.add(floorBase);

    let geomFrontDoorWalk= new THREE.BoxGeometry(600,25,5100,1,1,1);
    let textureFrontDoorWalk = new THREE.TextureLoader().load('assets/textures/floor3.jpg' );
    let matFrontDoorWalk = new THREE.MeshBasicMaterial({shading:THREE.FlatShading, map:textureFrontDoorWalk});
    let frontDoorWalk = new THREE.Mesh(geomFrontDoorWalk, matFrontDoorWalk);
    frontDoorWalk.position.x = -100;
    frontDoorWalk.position.y = -400;
    frontDoorWalk.position.z = 1350;
    frontDoorWalk.castShadow = true;
    frontDoorWalk.receiveShadow = true;
    this.mesh.add(frontDoorWalk);

    let geomBack= new THREE.BoxGeometry(3650,25,600,1,1,1);
    let textureBack = new THREE.TextureLoader().load('assets/textures/floor3.jpg' );
    let matBack = new THREE.MeshBasicMaterial({shading:THREE.FlatShading, map:textureBack});
    let back = new THREE.Mesh(geomBack, matBack);
    back.position.x = -2200;
    back.position.y = -400;
    back.position.z = -900;
    back.castShadow = true;
    back.receiveShadow = true;
    this.mesh.add(back);

    let geomFrontDoor1= new THREE.BoxGeometry(600,25,5100,1,1,1);
    let textureFrontDoor1 = new THREE.TextureLoader().load('assets/textures/floor3.jpg' );
    let matFrontDoor1 = new THREE.MeshBasicMaterial({shading:THREE.FlatShading, map:textureFrontDoor1});
    let frontDoor1 = new THREE.Mesh(geomFrontDoor1, matFrontDoor1);
    frontDoor1.position.x = -4300;
    frontDoor1.position.y = -400;
    frontDoor1.position.z = 1350;
    frontDoor1.castShadow = true;
    frontDoor1.receiveShadow = true;
    this.mesh.add(frontDoor1);
    

    let geomFloorBase1= new THREE.BoxGeometry(3000,100,2900,1,1,1);
    let textureFloor1 = new THREE.TextureLoader().load('assets/textures/cement.jpg' );
    let matFloor1 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureFloor1});
    let floorBase1 = new THREE.Mesh(geomFloorBase1, matFloor1);
    floorBase1.position.x=-2200;
    floorBase1.position.y=1350;
    floorBase1.position.z=1150;
    floorBase1.castShadow = true;
    floorBase1.receiveShadow = true;
    this.mesh.add(floorBase1);

    let geomRightWall= new THREE.BoxGeometry(50,1800,1900,1,1,1);
    let textureRightWall = new THREE.TextureLoader().load('assets/textures/wall2.jpg' );
    let matRightWall = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureRightWall});
    let rightWall = new THREE.Mesh(geomRightWall, matRightWall);
    rightWall.position.x=-700;
    rightWall.position.y=500;
    rightWall.position.z=600;
    rightWall.castShadow = true;
    rightWall.receiveShadow = true;
    this.mesh.add(rightWall);

    let geomRightWall2= new THREE.BoxGeometry(50,1800,400,1,1,1);
    let textureRightWall2 = new THREE.TextureLoader().load('assets/textures/wall2.jpg' );
    let matRightWall2 = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureRightWall2});
    let rightWall2 = new THREE.Mesh(geomRightWall2, matRightWall2);
    rightWall2.position.x=-700;
    rightWall2.position.y=500;
    rightWall2.position.z=2400;
    rightWall2.castShadow = true;
    rightWall2.receiveShadow = true;
    this.mesh.add(rightWall2);

    let geomDoor= new THREE.BoxGeometry(50,1400,650,1,1,1);
    let textureDoor = new THREE.TextureLoader().load('assets/textures/door1.jpg' );
    let matDoor = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureDoor});
    let door = new THREE.Mesh(geomDoor, matDoor);
    door.position.x=-700;
    door.position.y=300;
    door.position.z=1870;
    door.castShadow = true;
    door.receiveShadow = true;
    this.mesh.add(door);

    let geomDoorStep= new THREE.BoxGeometry(300,75,650,1,1,1);
    let textureDoorStep = new THREE.TextureLoader().load('assets/textures/floor3.jpg' );
    let matDoorStep = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureDoorStep});
    let doorStep = new THREE.Mesh(geomDoorStep, matDoorStep);
    doorStep.position.x=-520;
    doorStep.position.y=-350;
    doorStep.position.z=1870;
    doorStep.castShadow = true;
    doorStep.receiveShadow = true;
    this.mesh.add(doorStep);

    let geomDoorStep1= new THREE.BoxGeometry(300,75,1300,1,1,1);
    let textureDoorStep1 = new THREE.TextureLoader().load('assets/textures/floor3.jpg' );
    let matDoorStep1 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureDoorStep1});
    let doorStep1 = new THREE.Mesh(geomDoorStep1, matDoorStep1);
    doorStep1.position.x=-550;
    doorStep1.position.y=-350;
    doorStep1.position.z = 3200;
    doorStep1.castShadow = true;
    doorStep1.receiveShadow = true;
    this.mesh.add(doorStep1);

    let geomDoorStep2= new THREE.BoxGeometry(300,75,1300,1,1,1);
    let textureDoorStep2 = new THREE.TextureLoader().load('assets/textures/floor3.jpg' );
    let matDoorStep2 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureDoorStep2});
    let doorStep2 = new THREE.Mesh(geomDoorStep2, matDoorStep2);
    doorStep2.position.x=-3850;
    doorStep2.position.y=-350;
    doorStep2.position.z = 3200;
    doorStep2.castShadow = true;
    doorStep2.receiveShadow = true;
    this.mesh.add(doorStep2);

    let geomDoordecoration= new THREE.BoxGeometry(800,50,2550,1,1,1);
    let textureDoordecoration = new THREE.TextureLoader().load('assets/textures/roof.jpg' );
    let matDoordecoration = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureDoordecoration});
    let doorDecoration = new THREE.Mesh(geomDoordecoration, matDoordecoration);
    doorDecoration.position.x=-320;
    doorDecoration.position.y=1150;
    doorDecoration.position.z=1070;
    doorDecoration.castShadow = true;
    doorDecoration.receiveShadow = true;
    this.mesh.add(doorDecoration);

    let geomDoorExtension= new THREE.BoxGeometry(50,400,750,1,1,1);
    let textureDoorExtension = new THREE.TextureLoader().load('assets/textures/wall2.jpg' );
    let matDoorExtension = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureDoorExtension});
    let doorExtension = new THREE.Mesh(geomDoorExtension, matDoorExtension);
    doorExtension.position.x=-700;
    doorExtension.position.y=1200;
    doorExtension.position.z=1900;
    doorExtension.castShadow = true;
    doorExtension.receiveShadow = true;
    this.mesh.add(doorExtension);

    let geomLeftWall= new THREE.BoxGeometry(50,800,3000,1,1,1);
    let textureLeftWall = new THREE.TextureLoader().load('assets/textures/wall2.jpg' );
    let matLeftWall = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureLeftWall});
    let leftWall = new THREE.Mesh(geomLeftWall, matLeftWall);
    leftWall.position.x=-3700;
    leftWall.position.y= 0;
    leftWall.position.z=1100;
    leftWall.castShadow = true;
    leftWall.receiveShadow = true;
    this.mesh.add(leftWall);

    let geomLeftWall1= new THREE.BoxGeometry(50,1200, 900,1,1,1);
    let textureLeftWall1 = new THREE.TextureLoader().load('assets/textures/wall2.jpg' );
    let matLeftWall1 = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureLeftWall1});
    let leftWall1 = new THREE.Mesh(geomLeftWall1, matLeftWall1);
    leftWall1.position.x=-3700;
    leftWall1.position.y= 800;
    leftWall1.position.z= 50;
    leftWall1.castShadow = true;
    leftWall1.receiveShadow = true;
    this.mesh.add(leftWall1);

    let geomLeftWall2= new THREE.BoxGeometry(50,1200, 1300,1,1,1);
    let textureLeftWall2 = new THREE.TextureLoader().load('assets/textures/wall2.jpg' );
    let matLeftWall2 = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureLeftWall2});
    let leftWall2 = new THREE.Mesh(geomLeftWall2, matLeftWall2);
    leftWall2.position.x=-3700;
    leftWall2.position.y= 800;
    leftWall2.position.z= 1950;
    leftWall2.castShadow = true;
    leftWall2.receiveShadow = true;
    this.mesh.add(leftWall2);

    let geomLeftGlass= new THREE.BoxGeometry(50,100, 900,1,1,1);
    let textureLeftGlass = new THREE.TextureLoader().load('assets/textures/wall2.jpg' );
    let matLeftGlass = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureLeftGlass});
    let leftGlass = new THREE.Mesh(geomLeftGlass, matLeftGlass);
    leftGlass.position.x=-3700;
    leftGlass.position.y= 1350;
    leftGlass.position.z= 900;
    leftGlass.castShadow = true;
    leftGlass.receiveShadow = true;
    this.mesh.add(leftGlass)

    let geomLeftWindow= new THREE.BoxGeometry(200,50, 800,1,1,1);
    let textureLeftWindow = new THREE.TextureLoader().load('assets/textures/floor.jpg' );
    let matLeftWindow = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureLeftWindow});
    let leftWindow = new THREE.Mesh(geomLeftWindow, matLeftWindow);
    leftWindow.position.x=-3750;
    leftWindow.position.y= 400;
    leftWindow.position.z= 900;
    leftWindow.castShadow = true;
    leftWindow.receiveShadow = true;
    this.mesh.add(leftWindow)

    let geomLeftWindow1= new THREE.BoxGeometry(400,850, 50,1,1,1);
    let textureLeftWindow1 = new THREE.TextureLoader().load('assets/textures/door1.jpg' );
    let matLeftWindow1 = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureLeftWindow1});
    let leftWindow1 = new THREE.Mesh(geomLeftWindow1, matLeftWindow1);
    leftWindow1.position.x=-3850;
    leftWindow1.position.y= 870;
    leftWindow1.position.z= 450;
    leftWindow1.castShadow = true;
    leftWindow1.receiveShadow = true;
    this.mesh.add(leftWindow1)
    leftWindow1.rotation.y = -10;

    let geomLeftWindow2= new THREE.BoxGeometry(400,850, 50,1,1,1);
    let textureLeftWindow2 = new THREE.TextureLoader().load('assets/textures/door1.jpg' );
    let matLeftWindow2 = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureLeftWindow2});
    let leftWindow2 = new THREE.Mesh(geomLeftWindow2, matLeftWindow2);
    leftWindow2.position.x=-3850;
    leftWindow2.position.y= 870;
    leftWindow2.position.z= 1350;
    leftWindow2.castShadow = true;
    leftWindow2.receiveShadow = true;
    this.mesh.add(leftWindow2)
    leftWindow2.rotation.y = 10;

    let geomBackWall= new THREE.BoxGeometry(3000,800,50,1,1,1);
    let textureBackWall = new THREE.TextureLoader().load('assets/textures/wall2.jpg' );
    let matBackWall = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureBackWall});
    let backWall = new THREE.Mesh(geomBackWall, matBackWall);
    backWall.position.x=-2200;
    backWall.position.y=0;
    backWall.position.z=-350;
    backWall.castShadow = true;
    backWall.receiveShadow = true;
    this.mesh.add(backWall);

    let geomBackWall3= new THREE.BoxGeometry(3000,100,50,1,1,1);
    let textureBackWall3 = new THREE.TextureLoader().load('assets/textures/wall2.jpg' );
    let matBackWall3 = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureBackWall3});
    let backWall3 = new THREE.Mesh(geomBackWall3, matBackWall3);
    backWall3.position.x=-2200;
    backWall3.position.y=1350;
    backWall3.position.z=-350;
    backWall3.castShadow = true;
    backWall3.receiveShadow = true;
    this.mesh.add(backWall3);

    let geomBackWall1= new THREE.BoxGeometry(800,1800,50,1,1,1);
    let textureBackWall1 = new THREE.TextureLoader().load('assets/textures/wall2.jpg' );
    let matBackWall1 = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureBackWall1});
    let backWall1 = new THREE.Mesh(geomBackWall1, matBackWall1);
    backWall1.position.x=-1100;
    backWall1.position.y=500;
    backWall1.position.z=-350;
    backWall1.castShadow = true;
    backWall1.receiveShadow = true;
    this.mesh.add(backWall1);

    let geomBackWall2= new THREE.BoxGeometry(800,1800,50,1,1,1);
    let textureBackWall2 = new THREE.TextureLoader().load('assets/textures/wall2.jpg' );
    let matBackWall2 = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureBackWall2});
    let backWall2 = new THREE.Mesh(geomBackWall2, matBackWall2);
    backWall2.position.x=-3300;
    backWall2.position.y=500;
    backWall2.position.z=-350;
    backWall2.castShadow = true;
    backWall2.receiveShadow = true;
    this.mesh.add(backWall2);

    let geomBackWallWindow= new THREE.BoxGeometry(1400,50,300,1,1,1);
    let textureBackWallWindow = new THREE.TextureLoader().load('assets/textures/floor.jpg' );
    let matBackWallWindow = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureBackWallWindow});
    let backWallWindow = new THREE.Mesh(geomBackWallWindow, matBackWallWindow);
    backWallWindow.position.x=-2200;
    backWallWindow.position.y=400;
    backWallWindow.position.z=-450;
    backWallWindow.castShadow = true;
    backWallWindow.receiveShadow = true;
    this.mesh.add(backWallWindow);

    let geomBackWallWindow1= new THREE.BoxGeometry(50,850,600,1,1,1);
    let textureBackWallWindow1 = new THREE.TextureLoader().load('assets/textures/door1.jpg' );
    let matBackWallWindow1 = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureBackWallWindow1});
    let backWallWindow1 = new THREE.Mesh(geomBackWallWindow1, matBackWallWindow1);
    backWallWindow1.position.x=-1400;
    backWallWindow1.position.y=900;
    backWallWindow1.position.z=-600;
    backWallWindow1.castShadow = true;
    backWallWindow1.receiveShadow = true;
    this.mesh.add(backWallWindow1);
    backWallWindow1.rotation.y = -10;

    let geomBackWallWindow2= new THREE.BoxGeometry(50,850,600,1,1,1);
    let textureBackWallWindow2 = new THREE.TextureLoader().load('assets/textures/door1.jpg' );
    let matBackWallWindow2 = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureBackWallWindow2});
    let backWallWindow2 = new THREE.Mesh(geomBackWallWindow2, matBackWallWindow2);
    backWallWindow2.position.x=-3000;
    backWallWindow2.position.y=900;
    backWallWindow2.position.z=-600;
    backWallWindow2.castShadow = true;
    backWallWindow2.receiveShadow = true;
    this.mesh.add(backWallWindow2);
    backWallWindow2.rotation.y = 10;

    let geomBedBase= new THREE.BoxGeometry(1600,50,1600,1,1,1);
    let textureBedBase = new THREE.TextureLoader().load('assets/textures/wood3.jpg' );
    let matBedBase = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureBedBase});
    let bedBase= new THREE.Mesh(geomBedBase, matBedBase);
    bedBase.position.x = -2200;
    bedBase.position.y = 0;
    bedBase.position.z = 700;
    bedBase.castShadow = true;
    bedBase.receiveShadow = true;
    this.mesh.add(bedBase);

    let geomBedFoam= new THREE.BoxGeometry(1600,220,1600,1,1,1);
    let textureBedFoam = new THREE.TextureLoader().load('assets/textures/kama.jpg' );
    let matBedFoam = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureBedFoam});
    let bedFoam= new THREE.Mesh(geomBedFoam, matBedFoam);
    bedFoam.position.x = -2200;
    bedFoam.position.y = 150;
    bedFoam.position.z = 700;
    bedFoam.castShadow = true;
    bedFoam.receiveShadow = true;
    this.mesh.add(bedFoam);

    let geomBedPillow= new THREE.BoxGeometry(1100,200,400,1,1,1);
    let textureBedPillow = new THREE.TextureLoader().load('assets/textures/pillow.jpg' );
    let matBedPillow = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureBedPillow});
    let bedPillow= new THREE.Mesh(geomBedPillow, matBedPillow);
    bedPillow.position.x = -2200;
    bedPillow.position.y = 400;
    bedPillow.position.z = 200;
    bedPillow.castShadow = true;
    bedPillow.receiveShadow = true;
    this.mesh.add(bedPillow);

    let geomBedFrontLegsleft= new THREE.BoxGeometry(150,1000,100,1,1,1);
    let textureBedFrontLegsleft = new THREE.TextureLoader().load('assets/textures/wood3.jpg' );
    let matBedFrontLegsleft = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureBedFrontLegsleft});
    let bedFrontLegsleft= new THREE.Mesh(geomBedFrontLegsleft, matBedFrontLegsleft);
    bedFrontLegsleft.position.x = -2900;
    bedFrontLegsleft.position.y = -100;
    bedFrontLegsleft.position.z = 1550;
    bedFrontLegsleft.castShadow = true;
    bedFrontLegsleft.receiveShadow = true;
    this.mesh.add(bedFrontLegsleft);

    let geomBedFrontLegsright= new THREE.BoxGeometry(150,1000,100,1,1,1);
    let textureBedFrontLegsright = new THREE.TextureLoader().load('assets/textures/wood3.jpg' );
    let matBedFrontLegsright = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureBedFrontLegsright});
    let bedFrontLegsright= new THREE.Mesh(geomBedFrontLegsright, matBedFrontLegsright);
    bedFrontLegsright.position.x = -1500;
    bedFrontLegsright.position.y = -100;
    bedFrontLegsright.position.z = 1550;
    bedFrontLegsright.castShadow = true;
    bedFrontLegsright.receiveShadow = true;
    this.mesh.add(bedFrontLegsright);

    let geomBedFront= new THREE.BoxGeometry(1300,600,100,1,1,1);
    let textureBedFront = new THREE.TextureLoader().load('assets/textures/wood3.jpg' );
    let matBedFront = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureBedFront});
    let bedFront= new THREE.Mesh(geomBedFront, matBedFront);
    bedFront.position.x = -2200;
    bedFront.position.y = 50;
    bedFront.position.z = 1550;
    bedFront.castShadow = true;
    bedFront.receiveShadow = true;
    this.mesh.add(bedFront);

    let geomDresser= new THREE.BoxGeometry(350,800,800,1,1,1);
    let textureDresser = new THREE.TextureLoader().load('assets/textures/dresser2.jfif' );
    let matDresser = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureDresser});
    let dresser= new THREE.Mesh(geomDresser, matDresser);
    dresser.position.x = -3500;
    dresser.position.y = -100;
    dresser.position.z = 2000;
    dresser.castShadow = true;
    dresser.receiveShadow = true;
    this.mesh.add(dresser);

    let geomRoof= new THREE.BoxGeometry(3000,50,2900,1,1,1);
    let textureRoof = new THREE.TextureLoader().load('assets/textures/roof.jpg' );
    let matRoof = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureRoof});
    let roof = new THREE.Mesh(geomRoof, matRoof);
    roof.position.x=-2200;
    roof.position.y=1350;
    roof.position.z=2500;
    roof.castShadow = true;
    roof.receiveShadow = true;
    this.mesh.add(roof);

    let geomPillar= new THREE.BoxGeometry(100,1800,100,1,1,1);
    let texturePillar = new THREE.TextureLoader().load('assets/textures/cement.jpg' );
    let matPillar = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:texturePillar});
    let pillar = new THREE.Mesh(geomPillar, matPillar);
    pillar.position.x=-3600;
    pillar.position.y=450;
    pillar.position.z=3800;
    pillar.castShadow = true;
    pillar.receiveShadow = true;
    this.mesh.add(pillar);

    let geomPillar1= new THREE.BoxGeometry(100,1800,100,1,1,1);
    let texturePillar1 = new THREE.TextureLoader().load('assets/textures/cement.jpg' );
    let matPillar1 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:texturePillar1});
    let pillar1 = new THREE.Mesh(geomPillar1, matPillar1);
    pillar1.position.x=-800;
    pillar1.position.y=450;
    pillar1.position.z=3800;
    pillar1.castShadow = true;
    pillar1.receiveShadow = true;
    this.mesh.add(pillar1);

    let geomTableLeg= new THREE.BoxGeometry(100,700,100,1,1,1);
    let textureTableLeg = new THREE.TextureLoader().load('assets/textures/cement.jpg' );
    let matTableLeg = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureTableLeg});
    let tableLeg = new THREE.Mesh(geomTableLeg, matTableLeg);
    tableLeg.position.x=-2200;
    tableLeg.position.y=-60;
    tableLeg.position.z=3200;
    tableLeg.castShadow = true;
    tableLeg.receiveShadow = true;
    this.mesh.add(tableLeg);

    let geomTable= new THREE.CircleBufferGeometry(500, 500, 100);
    let textureTable = new THREE.TextureLoader().load('assets/textures/wall2.jpg' );
    let matTable = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureTable});
    let table = new THREE.Mesh(geomTable, matTable);
    table.position.x=-2200;
    table.position.y=300;
    table.position.z=3200;
    table.castShadow = true;
    table.receiveShadow = true;
    this.mesh.add(table);
    table.rotation.x = 11;

    let geomChair= new THREE.BoxGeometry(50,800,300,1,1,1);
    let textureChair = new THREE.TextureLoader().load('assets/textures/cement.jpg' );
    let matChair = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureChair});
    let chair = new THREE.Mesh(geomChair, matChair);
    chair.position.x=-3000;
    chair.position.y=0;
    chair.position.z=3200;
    chair.castShadow = true;
    chair.receiveShadow = true;
    this.mesh.add(chair);

    let geomChair1= new THREE.BoxGeometry(50,300,300,1,1,1);
    let textureChair1 = new THREE.TextureLoader().load('assets/textures/cement.jpg' );
    let matChair1 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureChair1});
    let chair1 = new THREE.Mesh(geomChair1, matChair1);
    chair1.position.x=-2700;
    chair1.position.y=-200;
    chair1.position.z=3200;
    chair1.castShadow = true;
    chair1.receiveShadow = true;
    this.mesh.add(chair1);

    let geomChair2= new THREE.BoxGeometry(350,50,300,1,1,1);
    let textureChair2 = new THREE.TextureLoader().load('assets/textures/cement.jpg' );
    let matChair2 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureChair2});
    let chair2 = new THREE.Mesh(geomChair2, matChair2);
    chair2.position.x=-2850;
    chair2.position.y=-50;
    chair2.position.z=3200;
    chair2.castShadow = true;
    chair2.receiveShadow = true;
    this.mesh.add(chair2);

    let geomRightChair= new THREE.BoxGeometry(50,800,300,1,1,1);
    let textureRightChair = new THREE.TextureLoader().load('assets/textures/cement.jpg' );
    let matRightChair = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureRightChair});
    let rightChair = new THREE.Mesh(geomRightChair, matRightChair);
    rightChair.position.x=-1500;
    rightChair.position.y=0;
    rightChair.position.z=3200;
    rightChair.castShadow = true;
    rightChair.receiveShadow = true;
    this.mesh.add(rightChair);

    let geomRightChair1= new THREE.BoxGeometry(50,300,300,1,1,1);
    let textureRightChair1 = new THREE.TextureLoader().load('assets/textures/cement.jpg' );
    let matRightChair1 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureRightChair1});
    let rightChair1 = new THREE.Mesh(geomRightChair1, matRightChair1);
    rightChair1.position.x=-1800;
    rightChair1.position.y=-200;
    rightChair1.position.z=3200;
    rightChair1.castShadow = true;
    rightChair1.receiveShadow = true;
    this.mesh.add(rightChair1);

    let geomRightChair2= new THREE.BoxGeometry(350,50,300,1,1,1);
    let textureRightChair2 = new THREE.TextureLoader().load('assets/textures/cement.jpg' );
    let matRightChair2 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureRightChair2});
    let rightChair2 = new THREE.Mesh(geomRightChair2, matRightChair2);
    rightChair2.position.x=-1650;
    rightChair2.position.y=-50;
    rightChair2.position.z=3200;
    rightChair2.castShadow = true;
    rightChair2.receiveShadow = true;
    this.mesh.add(rightChair2);

    

    


let mainBackground = new THREE.TextureLoader().load('assets/textures/background1.jpg' );
scene.background=(mainBackground)
};


Grass = function(){
let geom = new THREE.PlaneGeometry(8000,4000,3200);
geom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
let textureGrass = new THREE.TextureLoader().load( 'assets/textures/sagbot1.jpg' );
let mat = new THREE.MeshBasicMaterial({
  color:Colors.blue,
  transparent:false,
  opacity:.6,
  shading:THREE.FlatShading,
  map: textureGrass
});


this.mesh = new THREE.Mesh(geom, mat);
this.mesh.receiveShadow = true;
}



// 3D Models
let grass;
let bedroom;

function createBedroom(){
bedroom = new Bedroom();
bedroom.mesh.scale.set(.25,.25,.25);
bedroom.mesh.position.y = 100;
scene.add(bedroom.mesh);
}

function createGrass(){
grass = new Grass();
scene.add(grass.mesh);
}


function loop(){
controls.update();
renderer.render(scene, camera);
requestAnimationFrame(loop);
}


function init(event){
createScene();
createLights();
createBedroom();
createGrass();
loop();
}

window.addEventListener('load', init, false);