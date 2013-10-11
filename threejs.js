if (Meteor.isClient) {

    Template.hello.rendered = function() {

	/******mrdoob**************/
	var camera, scene, renderer, geometry, material, mesh;

	init();
	animate();

	function init() {
	    scene = new THREE.Scene();
	    
	    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
	    camera.position.z = 900;

	    scene.add(camera);

	    geometry = new THREE.CubeGeometry(200, 200, 200);
	    material = new THREE.MeshNormalMaterial();

	    mesh = new THREE.Mesh(geometry, material);
	    scene.add(mesh);

	    renderer = new THREE.CanvasRenderer();
	    renderer.setSize(window.innerWidth, window.innerHeight);

	    document.body.appendChild(renderer.domElement);
	}

	function animate() {
	    requestAnimationFrame(animate);
	    render();
	}

	function render() {
	    mesh.rotation.x += 0.01;
	    mesh.rotation.y += 0.02;

	    renderer.render(scene, camera);
	}

	/***end mrdoob****************/
    }
}
