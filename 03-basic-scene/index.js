// Create a scene
const scene = new THREE.Scene();

//create a cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xaaffff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// sizes
const sizes = {
	width: 800,
	height: 600
};

// Create a camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 5;
scene.add(camera);

// Create a renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(sizes.width, sizes.height);

// Render the scene
renderer.render(scene, camera);
