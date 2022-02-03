import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import { Scene } from 'three'
import vertexShader from './shaders/test/vertex.glsl'
import fragmentShader from './shaders/test/fragment.glsl'
import vertexShaderLines from './shaders/test/vertexLines.glsl'
import fragmentShaderLines from './shaders/test/fragmentLines.glsl'
import trees from './assets/img/trees.jpg'
import imagesLoaded from 'imagesloaded'
import gsap from 'gsap'
import FontFaceObserver from 'fontfaceobserver'
import{EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer.js'
import{RenderPass} from 'three/examples/jsm/postprocessing/RenderPass.js'
import{ShaderPass} from 'three/examples/jsm/postprocessing/ShaderPass.js'
import {PostProcessing} from './postprocessing.js'





export default class Sketch{
    constructor(options){
       
        this.time = 0

        this.scene = new THREE.Scene()

        this.container = options.dom;
        this.width = this.container.offsetWidth
        this.height = this.container.offsetHeight


        // renderer
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        this.renderer.setSize(this.width,this.height)
        this.renderer.physicallyCorrectLights=true
        this.renderer.outputEncoding = THREE.sRGBEncoding
        this.renderer.setClearColor(0x111111, 1)

        // add renderer to dom
        this.container.appendChild(this.renderer.domElement)
        
        // camera
        this.camera = new THREE.PerspectiveCamera(
            50,
            window.innerWidth/window.innerHeight,
            0.001,
            1000,

        )
        // this.camera = new THREE.OrthographicCamera(
        //     this.width / - 2, this.width / 2, this.height / 2, this.height / - 2, 1, 1000 
        // )
        this.camera.position.set(0,0,8)
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)

        this.isPlaying = true
        this.addImages()
        // this.setPosition()

        // this.mouseMovement()
        
        this.setupResize()
        this.addObjects()
        this.addPostProcessing()
        this.resize()
        this.settings()
        this.render();

        // there is a problem with the usual scroll so we need to use a custom one, scroll.js
        // window.addEventListener('scroll', ()=>{
        //     this.currentScroll = window.scrollY

        //     this.setPosition()
        // })
    
        

    }
    // mouseMovement(){
       

    //     window.addEventListener( 'mousemove', event => {
    //         this.mouse.x = ( event.clientX / this.width ) * 2 - 1;
    //         this.mouse.y = - ( event.clientY / this.height ) * 2 + 1;

    //         // update the picking ray with the camera and pointer position
    //         this.raycaster.setFromCamera(this.mouse, this.camera );

    //         // calculate objects intersecting the picking ray
    //         const intersects = this.raycaster.intersectObjects( this.scene.children );

    //         if(intersects.length>0){
    //             let obj = intersects[0].object;
    //             obj.material.uniforms.uHover.value = intersects[0].uv
    //         }
    //     }, false );

    // }
    settings(){
        let that = this;
        this.settings={
            uStrengthRGBShift: 0.2,
            uNoiseStrength: 0.15,

            position1X: 0,
            position1Y: 0.5,
            position1Z: 0,

            position2X: -2,
            position2Y: -1,
            position2Z: 1,

            position3X: 2,
            position3Y: -1,
            position3Z: 1,

            cameraZ: 8
        };
        this.gui = new dat.GUI()
        this.geo1 = this.gui.addFolder('geometry 1')
        this.geo2 = this.gui.addFolder('geometry 2')
        this.geo3 = this.gui.addFolder('geometry 3')
        this.gui.add(this.settings, "uStrengthRGBShift", 0,1,0.01)
        this.gui.add(this.settings, "uNoiseStrength", -2,2,0.01)
        this.geo1.add(this.settings, 'position1X', -6,6,0.01).name('position1 X')
        this.geo1.add(this.settings, 'position1Y', -6,6,0.01).name('position1 Y')
        this.geo1.add(this.settings, 'position1Z', -6,6,0.01).name('position1 Z')
        this.geo2.add(this.settings, 'position2X', -6,6,0.01).name('position2 X')
        this.geo2.add(this.settings, 'position2Y', -6,6,0.01).name('position2 Y')
        this.geo2.add(this.settings, 'position2Z', -6,6,0.01).name('position2 Z')
        this.geo3.add(this.settings, 'position3X', -6,6,0.01).name('position3 X')
        this.geo3.add(this.settings, 'position3Y', -6,6,0.01).name('position3 Y')
        this.geo3.add(this.settings, 'position3Z', -6,6,0.01).name('position3 Z')
        this.gui.add(this.settings, 'cameraZ',0,20,0.01).name('position camera Z')
    }
    setupResize(){
        window.addEventListener('resize', this.resize.bind(this))
    }

    
    addImages(){
        let texture = new THREE.TextureLoader().load(trees)
        texture.wrapS = THREE.MirroredRepeatWrapping;
        texture.wrapT = THREE.MirroredRepeatWrapping;
        this.material = new THREE.ShaderMaterial({
            side: THREE.DoubleSide,
            fragmentShader:fragmentShader,
            vertexShader: vertexShader, 
            uniforms:{
                uTime: {value:0},
                uImage:{value: 0},
                uHover: {value: new THREE.Vector2(0.5,0.5)},
                uHoverState: {value: 0},
                uTreesTexture: {value: texture},     
            }
        })

        // Lines for ico
        this.materialLines = new THREE.ShaderMaterial({
            side: THREE.DoubleSide,
            fragmentShader:fragmentShaderLines,
            vertexShader: vertexShaderLines, 
            uniforms:{
                uTime: {value:0},
                uImage:{value: 0},
                uHover: {value: new THREE.Vector2(0.5,0.5)},
                uHoverState: {value: 0},
                uTreesTexture: {value: texture},
                uNoiseStrength: {value: 0}
            }
        })
    }
    // setPosition(){
    //     this.imageStore.forEach(obj => {
    //         obj.mesh.position.y = this.currentScroll -obj.top + this.height/2 - obj.height/2;
    //         obj.mesh.position.x = obj.left -this.width/2 + obj.width/2;
    //     })
    // }
    addObjects(){
        this.geometry = new THREE.OctahedronGeometry(1,1)
        this.geometryLines = new THREE.OctahedronBufferGeometry(1.001,1)
        let length = this.geometryLines.attributes.position.array.length;

        let baryCoords = []

        for (let i = 0; i < length; i++) {
            baryCoords.push(0,0,1,   0,1,0,   1,0,0)
        }
        let aBaryCoords = new Float32Array(baryCoords)
        this.geometryLines.setAttribute('aBaryCoords', new THREE.BufferAttribute(aBaryCoords,3))
        

        this.mesh1 = new THREE.Mesh(this.geometryLines, this.material);
        this.meshLines1 = new THREE.Mesh(this.geometryLines, this.materialLines);

        this.mesh2 = new THREE.Mesh(this.geometryLines, this.material);
        this.meshLines2 = new THREE.Mesh(this.geometryLines, this.materialLines);
        // this.mesh2.position.set(-5,0,0)
        // this.meshLines2.position.set(-5,0,0)

        this.mesh3 = new THREE.Mesh(this.geometryLines, this.material);
        this.meshLines3 = new THREE.Mesh(this.geometryLines, this.materialLines);
        // this.mesh3.position.set(5,0,0)
        // this.meshLines3.position.set(5,0,0)

        this.scene.add(this.mesh1, this.meshLines1);
        this.scene.add(this.mesh2, this.meshLines2);
        this.scene.add(this.mesh3, this.meshLines3);
    }
    addPostProcessing(){
        this.composer = new EffectComposer(this.renderer)
        this.composer.addPass(new RenderPass(this.scene,this.camera))
     
        this.customPass = new ShaderPass(PostProcessing)
        this.customPass.uniforms["resolution"].value = new THREE.Vector2(window.innerWidth, window.innerHeight)
        this.customPass.uniforms["resolution"].value.multiplyScalar(window.devicePixelRatio)
        this.composer.addPass(this.customPass)
    }
    resize(){
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer.setSize(this.width,this.height)
        this.composer.setSize(this.width,this.height)

        this.camera.aspect = this.width/this.height;
        this.camera.updateProjectionMatrix(); 
    }
    render(){
        this.time += 0.0005;  

        this.customPass.uniforms.uTime.value = this.time
        this.customPass.uniforms.uStrengthRGBShift.value = this.settings.uStrengthRGBShift
        this.customPass.uniforms.uNoiseStrength.value = this.settings.uNoiseStrength

        // Positions

        this.mesh1.position.x = this.settings.position1X
        this.meshLines1.position.x = this.settings.position1X

        this.mesh1.position.y = this.settings.position1Y
        this.meshLines1.position.y = this.settings.position1Y

        this.mesh1.position.z = this.settings.position1Z  + Math.sin(this.time * 15) * 0.5  
        this.meshLines1.position.z = this.settings.position1Z  + Math.sin(this.time * 15) *0.5 
        
        

        this.mesh2.position.x = this.settings.position2X
        this.meshLines2.position.x = this.settings.position2X

        this.mesh2.position.y = this.settings.position2Y   
        this.meshLines2.position.y = this.settings.position2Y 

        this.mesh2.position.z = this.settings.position2Z - Math.sin(this.time * 25) * 0.2  
        this.meshLines2.position.z = this.settings.position2Z - Math.sin(this.time * 25) *0.2 

        this.mesh3.position.x = this.settings.position3X
        this.meshLines3.position.x = this.settings.position3X

        this.mesh3.position.y = this.settings.position3Y
        this.meshLines3.position.y = this.settings.position3Y

        this.mesh3.position.z = this.settings.position3Z + Math.sin(this.time * 10) * 0.4  
        this.meshLines3.position.z = this.settings.position3Z + Math.sin(this.time * 10) *0.4 

        // Camera Position

        this.camera.position.z = this.settings.cameraZ


        // Rotations

        this.mesh1.rotation.x = this.time;
        this.mesh1.rotation.y = this.time;
        this.meshLines1.rotation.x = this.time;
        this.meshLines1.rotation.y = this.time;

        this.mesh2.rotation.x = this.time;
        this.mesh2.rotation.y = this.time;
        this.meshLines2.rotation.x = this.time;
        this.meshLines2.rotation.y = this.time;


        this.mesh3.rotation.x = this.time;
        this.mesh3.rotation.y = this.time;
        this.meshLines3.rotation.x = this.time;
        this.meshLines3.rotation.y = this.time;


        // this.scroll.render()
        // this.currentScroll = this.scroll.scrollToRender
        // this.setPosition()
        // this.mesh.rotation.x = this.time /2000;
        // this.mesh.rotation.y = this.time /2000;

        // this.material.uniforms.uTime.value =  this.time;

        // this.materials.forEach(mat => {
        //     mat.uniforms.uTime.value = this.time;
        // })

        // this.renderer.render(this.scene, this.camera)
        this.composer.render()


        window.requestAnimationFrame(this.render.bind(this));
    }
}

new Sketch({
    dom: document.getElementById('container')
})
