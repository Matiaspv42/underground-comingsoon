import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import vertexShader from './shaders/test/vertex.glsl'
import fragmentShader from './shaders/test/fragment.glsl'
import { Scene } from 'three'
import ocean from './img/ocean.png'
import imagesLoaded from 'imagesloaded'
import gsap from 'gsap'
import FontFaceObserver from 'fontfaceobserver'
import Scroll from './scroll.js'


export default class Sketch{
    constructor(options){
        this.time = 0;
        this.container = options.dom
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;


        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(70, this.width/this.height, 100,2000)
        this.camera.position.z = 600

        // atan gives back radians so we have to convert it to degrees
        this.camera.fov = (2*Math.atan(this.height/2 / this.camera.position.z))*(180/Math.PI)
        
        this.renderer = new THREE.WebGLRenderer({
            antialas:true,
            alpha:true
        });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
        
        this.renderer.setSize(this.width,this.height)



        this.container.appendChild(this.renderer.domElement)

        // controls
        this.controls = new OrbitControls(this.camera,this.renderer.domElement)

        // images

        this.images = [...document.querySelectorAll('img')]

        // Promises

        const fontOpen = new Promise(resolve =>{
            new FontFaceObserver("Open Sans").load().then(()=>{
                resolve()
            })
        })

        const fontPlayfair = new Promise((resolve, reject)=>{
            new FontFaceObserver('Playfair Display').load().then(()=>{
                resolve()
            })
        })

        // preload Images

        const preloadImages = new Promise((resolve, reject)=>{
            imagesLoaded(document.querySelectorAll('img'),{background:true},resolve)
        })
        
        let allDone = [fontOpen,fontPlayfair,preloadImages]

        // scroll position
        this.currentScroll = 0;

        // Now we need to know where is the mouse

        this.raycaster = new THREE.Raycaster()
        this.mouse = new THREE.Vector2()
        

        Promise.all(allDone).then(()=>{
            this.scroll = new Scroll()
            this.addImages()
            this.setPosition()

            this.mouseMovement()
            this.resize()
            this.setupResize()
            // this.addObjects()
            this.render();

            // there is a problem with the usual scroll so we need to use a custom one, scroll.js
            // window.addEventListener('scroll', ()=>{
            //     this.currentScroll = window.scrollY

            //     this.setPosition()
            // })
        })
        

    }
    mouseMovement(){
       

        window.addEventListener( 'mousemove', event => {
            this.mouse.x = ( event.clientX / this.width ) * 2 - 1;
            this.mouse.y = - ( event.clientY / this.height ) * 2 + 1;

            // update the picking ray with the camera and pointer position
            this.raycaster.setFromCamera(this.mouse, this.camera );

            // calculate objects intersecting the picking ray
            const intersects = this.raycaster.intersectObjects( this.scene.children );

            if(intersects.length>0){
                let obj = intersects[0].object;
                obj.material.uniforms.uHover.value = intersects[0].uv
            }
        }, false );

    }

    setupResize(){
        window.addEventListener('resize', this.resize.bind(this))
    }

    resize(){
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer.setSize(this.width,this.height)
        this.camera.aspect = this.width/this.height;
        this.camera.updateProjectionMatrix(); 
    }
    addImages(){
        this.material = new THREE.ShaderMaterial({
            side: THREE.DoubleSide,
            fragmentShader:fragmentShader,
            vertexShader: vertexShader, 
            uniforms:{
                uTime: {value:0},
                uImage:{value: 0},
                uHover: {value: new THREE.Vector2(0.5,0.5)},
                uHoverState: {value: 0},
                uOceanTexture: {value: new THREE.TextureLoader().load(ocean)}
            }
        })

        this.materials = []
        this.imageStore = this.images.map(img=>{
            let bounds = img.getBoundingClientRect()

            let geometry = new THREE.PlaneBufferGeometry(bounds.width,bounds.height,20,20);
            let texture = new THREE.Texture(img);
            texture.needsUpdate = true
            // let material = new THREE.MeshBasicMaterial({
            //     map: texture
            // })

            let material = this.material.clone()

            img.addEventListener('mouseenter',()=>{
                gsap.to(material.uniforms.uHoverState,{
                    duration:1,
                    value:1
                })
            })
            img.addEventListener('mouseout',()=>{
                gsap.to(material.uniforms.uHoverState,{
                    duration:1,
                    value:0
                })
            })

            this.materials.push(material)
            
            material.uniforms.uImage.value = texture

            let mesh = new THREE.Mesh(geometry,material);

            this.scene.add(mesh)

            return{
            img: img,
            mesh: mesh,
            top: bounds.top,
            left: bounds.left,
            width: bounds.width,
            height: bounds.height   
            }
        })
    }
    setPosition(){
        this.imageStore.forEach(obj => {
            obj.mesh.position.y = this.currentScroll -obj.top + this.height/2 - obj.height/2;
            obj.mesh.position.x = obj.left -this.width/2 + obj.width/2;
        })
    }
    addObjects(){
        this.geometry = new THREE.PlaneBufferGeometry(100,100,40,40)
        // this.geometry = new THREE.SphereBufferGeometry(0.4,40,40)

        

        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.mesh);
    }

    render(){
        this.time += 0.05;

        this.scroll.render()
        this.currentScroll = this.scroll.scrollToRender
        this.setPosition()
        // this.mesh.rotation.x = this.time /2000;
        // this.mesh.rotation.y = this.time /2000;

        // this.material.uniforms.uTime.value =  this.time;

        this.materials.forEach(mat => {
            mat.uniforms.uTime.value = this.time;
        })

        this.renderer.render(this.scene, this.camera)

        window.requestAnimationFrame(this.render.bind(this));
    }
}

new Sketch({
    dom: document.getElementById('container')
})

// /**
//  * Base
//  */
// // Debug
// const gui = new dat.GUI()

// // Canvas
// const canvas = document.querySelector('canvas.webgl')

// // Scene
// const scene = new THREE.Scene()

// /**
//  * Test mesh
//  */
// // Geometry
// const geometry = new THREE.SphereGeometry( 15, 32, 16 );

// // Material
// const material = new THREE.ShaderMaterial({
//     vertexShader: testVertexShader,
//     fragmentShader: testFragmentShader,
//     side: THREE.DoubleSide,
//     uniforms:{
//         uTime:{value: 0}
//     }
// })

// // Mesh
// const mesh = new THREE.Mesh(geometry, material)
// mesh.scale.set(0.1,0.1,0.1)
// mesh.position.z = -3
// scene.add(mesh)

// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// window.addEventListener('resize', () =>
// {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })

// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// camera.position.set(0.25, - 0.25, 1)
// scene.add(camera)

// // Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// /**
//  * Animate
//  */
// const clock = new THREE.Clock()

// const tick = () =>
// {   
//     const elapsedTime = clock.getElapsedTime()

//     // update material

//     material.uniforms.uTime.value = elapsedTime

    

//     // Update controls
//     controls.update()

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()