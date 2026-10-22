import * as THREE from './assets/three.module.js';

const canvas = document.querySelector('#worldScene');
const items = window.CUBE_WORLD_ITEMS || [];

if (canvas && items.length) {
  try {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 40);
  camera.position.z = 7.5;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.35));
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  scene.add(new THREE.AmbientLight(0xffffff, 2.1));
  const keyLight = new THREE.DirectionalLight(0xd8ef95, 2.2);
  keyLight.position.set(-3, 5, 7);
  scene.add(keyLight);
  const fillLight = new THREE.DirectionalLight(0x8bc9d0, 0.8);
  fillLight.position.set(4, -2, 4);
  scene.add(fillLight);

  const layouts = [
    { x: -0.76, y: 0.56, z: -1.15, size: 0.72, phase: 0.2 },
    { x: 0.76, y: 0.47, z: -1.9, size: 0.96, phase: 1.6 },
    { x: -0.82, y: -0.3, z: -2.8, size: 0.88, phase: 2.7 },
    { x: 0.8, y: -0.34, z: -1.25, size: 0.67, phase: 4.1 },
    { x: -0.52, y: 0.05, z: -4.4, size: 0.58, phase: 5.4 },
    { x: 0.48, y: -0.03, z: -4.9, size: 0.74, phase: 3.4 }
  ];
  const rarityColors = { common: 0x788576, uncommon: 0x52b897, rare: 0x6689c8, epic: 0x9272aa, legendary: 0xc29b49 };
  const floatingItems = [];

  const textureLoader = new THREE.TextureLoader();
  textureLoader.load('assets/minecraft-sprite.webp', atlas => {
    atlas.colorSpace = THREE.SRGBColorSpace;
    atlas.magFilter = THREE.NearestFilter;
    atlas.minFilter = THREE.NearestFilter;
    atlas.generateMipmaps = false;
    const frameSize = 48;
    const columns = Math.round(atlas.image.width / frameSize);

    layouts.forEach((layout, index) => {
      const item = items[index % items.length];
      const cubeSize = layout.size;
      const material = new THREE.MeshStandardMaterial({
        color: rarityColors[item.rarity] || 0x76864b,
        roughness: 0.72,
        metalness: 0.08,
        transparent: true,
        opacity: 0.82
      });
      const cube = new THREE.Mesh(new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize), material);
      const [offsetX = 0, offsetY = 0] = String(item.spritePosition || '').split(/\s+/).map(value => Number.parseFloat(value.replace('px', '')));
      const spriteIndex = Math.max(0, Number(item.sprite) - 1);
      const tileX = Number.isFinite(offsetX) ? Math.round(Math.abs(offsetX) / frameSize) : spriteIndex % columns;
      const tileY = Number.isFinite(offsetY) ? Math.round(Math.abs(offsetY) / frameSize) : Math.floor(spriteIndex / columns);
      const spriteCanvas = document.createElement('canvas');
      spriteCanvas.width = frameSize;
      spriteCanvas.height = frameSize;
      const spriteContext = spriteCanvas.getContext('2d');
      spriteContext.imageSmoothingEnabled = false;
      spriteContext.drawImage(atlas.image, tileX * frameSize, tileY * frameSize, frameSize, frameSize, 0, 0, frameSize, frameSize);
      const texture = new THREE.CanvasTexture(spriteCanvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.magFilter = THREE.NearestFilter;
      texture.minFilter = THREE.NearestFilter;
      texture.generateMipmaps = false;
      texture.needsUpdate = true;

      const front = new THREE.Mesh(
        new THREE.PlaneGeometry(cubeSize * 0.78, cubeSize * 0.78),
        new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true, opacity: 0.94, depthWrite: false })
      );
      front.position.z = cubeSize * 0.505;
      cube.add(front);

      const edges = new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize)),
        new THREE.LineBasicMaterial({ color: 0xe7f2c0, transparent: true, opacity: 0.32 })
      );
      cube.add(edges);

      cube.position.z = layout.z;
      cube.scale.setScalar(window.innerWidth < 600 ? 0.76 : 1);
      cube.userData = { ...layout, itemId: item.id };
      scene.add(cube);
      floatingItems.push(cube);
    });
    resizeScene();
  });

  function resizeScene() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.35));
    renderer.setSize(width, height, false);
    const viewHeight = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
    const viewWidth = viewHeight * camera.aspect;
    floatingItems.forEach(cube => {
      const depthScale = (camera.position.z - cube.userData.z) / camera.position.z;
      cube.position.x = cube.userData.x * viewWidth * 0.5 * depthScale;
      cube.position.y = cube.userData.y * viewHeight * 0.5 * depthScale;
      cube.userData.baseY = cube.position.y;
      cube.scale.setScalar((width < 600 ? 0.76 : 1) * Math.min(1, height / 720));
    });
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) renderer.render(scene, camera);
  }

  window.addEventListener('resize', resizeScene, { passive: true });
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let animationFrame = 0;
  function animate(time) {
    if (document.hidden || reduceMotion.matches) return;
    const seconds = time * 0.001;
    floatingItems.forEach(cube => {
      const { phase } = cube.userData;
      cube.position.y = cube.userData.baseY + Math.sin(seconds * 0.7 + phase) * 0.12;
      cube.rotation.x = Math.sin(seconds * 0.25 + phase) * 0.1;
      cube.rotation.y += 0.0014;
      cube.rotation.z = Math.sin(seconds * 0.3 + phase) * 0.08;
    });
    renderer.render(scene, camera);
    animationFrame = requestAnimationFrame(animate);
  }
  function resumeScene(){
    cancelAnimationFrame(animationFrame);
    if(!document.hidden&&!reduceMotion.matches)animationFrame=requestAnimationFrame(animate);
    else if(reduceMotion.matches)renderer.render(scene,camera);
  }
  resumeScene();

  document.addEventListener('visibilitychange',resumeScene);
  reduceMotion.addEventListener('change',resumeScene);
  } catch {
    canvas.style.display = 'none';
  }
}
