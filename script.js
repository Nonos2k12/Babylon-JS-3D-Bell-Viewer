/*window.addEventListener("load", function() {
    let canvas = document.getElementById("canvas");
    let engine = new BABYLON.Engine(canvas, true);    
    engine.enableOfflineSupport = false;

    let createScene = function() {
        let scene = new BABYLON.Scene(engine);
        let camera = new BABYLON.ArcRotateCamera("Camera", Math.PI/2, Math.PI/2, 2, new BABYLON.Vector3(0, 0, 5), scene);
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.attachControl(canvas,true);*/

        /*let lum1 = new BABYLON.HemispherieLight("Light1", new BABYLON.Vector3(4, 1, 0), scene);*/
        /*let lum2 = new BABYLON.PointLight("Light2", new BABYLON.Vector3(-4, 1, -4), scene);

        let model = BABYLON.SceneLoader.Append("./", "Star_Wars_FALCON.obj", scene, function(scene) {
            return scene;
        });

        return scene;

    };

    let scene = createScene();

    engine.runRenderLoop(function(){
        scene.render();
    });

    window.addEventListener("resize", function() {
        engine.resize();
    });
});*/

var canvas = document.getElementById("renderCanvas");

        var createScene = function () {
        
            // This creates a basic Babylon Scene object (non-mesh)
            var scene = new BABYLON.Scene(engine);
        
            // Parameters: alpha, beta, radius, target position, scene
            var camera = new BABYLON.ArcRotateCamera("camera1", 0, 0, 0, new BABYLON.Vector3(0, 50, 0), scene);
			// Positions the camera overwriting alpha, beta, radius
			camera.setPosition(new BABYLON.Vector3(0, 50, 0))

            //var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 0, -10), scene);
			
			camera.lowerRadiusLimit = 30; //A quel point on peut se rapprocher de l'objet
			camera.upperRadiusLimit = 200;//A quel point on peut s'éloigner de l'objet
			//camera.lowerAlphaLimit = 0; // Possibilité de "bloquer" la rotation sur un axe horizontal
			//camera.upperAlphaLimit = Math.PI;
			camera.lowerBetaLimit = 0;
			//camera.upperBetaLimit = Math.PI / 2; //Gère la possibilité de tourner à 360° ou pas sur un axe vertical
            // This targets the camera to scene origin
            camera.setTarget(BABYLON.Vector3.Zero());
        
            // This attaches the camera to the canvas
            camera.attachControl(canvas, true);
        
            // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
            var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 20, 0), scene);
        
            // Default intensity is 1. Let's dim the light a small amount
            light.intensity = 1;

            scene.clearColor = new BABYLON.Color4(0,0,0,0);
        
            // Our built-in 'sphere' shape.
            //var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, scene);
			      
            // Move the sphere upward 1/2 its height
            //sphere.position.y = 1;
        
            // Our built-in 'ground' shape.
            //var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);
			
			BABYLON.SceneLoader.Append("./assets/", "bell.obj", scene);
            return scene;
        };
		
		__createScene = createScene;
        
        var engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });
        var scene = createScene();

        engine.runRenderLoop(function () {
            if (scene) {
                scene.render();
            }
        });

        // Resize
        window.addEventListener("resize", function () {
            engine.resize();
        });